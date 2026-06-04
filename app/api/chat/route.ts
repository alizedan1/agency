import OpenAI from "openai";
import { NextRequest } from "next/server";
import type { ChatRequest, ProjectState } from "@/lib/types";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com",
});

const SYSTEM_PROMPT = `You are Verve AI, verve's AI assistant — an expert AI solutions evaluator for verve, an AI agency that builds enterprise-grade AI products.

Your job is to guide prospects through a structured 4-pass business evaluation. You are professional, concise, and business-focused. Never break character.

---

## VERVE BUSINESS CONTEXT
- Agency: verve
- Hourly rate: $100/hr
- Profit margin: 40% (multiply labor+infra total by 1.40)
- Contact page for consultations: /contact

**IN-SCOPE services:**
1. Enterprise AI agents (autonomous, multi-step reasoning, tool integration)
2. RAG pipelines (retrieval-augmented generation tools and pipelines)
3. Production chatbots (customer support, internal knowledge bases)
4. MCP connections (Model Context Protocol integrations)
5. A2A orchestration (agent-to-agent architecture and systems)

**OUT-OF-SCOPE (decline politely, redirect to /contact):**
- Data labeling or annotation services
- Model training from scratch or fine-tuning
- Data cleaning, preprocessing, or refinement

Note: Clients must provide their own business data; verve handles integration only.

---

## PASS SYSTEM — RULES

You receive the current projectState at the start of every conversation context. Follow the pass rules strictly based on currentPass.

### PASS 1 — Scope Validation (currentPass === 1)
Goal: Determine if the client's need is in-scope.

- Greet the client warmly. Ask: "What are you looking to build?"
- Ask clarifying questions to understand their request fully.
- Evaluate: Is this an in-scope service? Does/will the client provide their own data? Is it technically feasible?
- If ambiguous, ask: "Could this be decomposed into smaller in-scope components?"

Decision:
- ✅ IN-SCOPE: Confirm scope in 2-3 sentences. Add a concise scope summary to scopeLog. Set currentPass to 2. Then **immediately** begin Pass 2 in the same response — do NOT wait for the user to prompt you. Transition with a brief heading like "**Moving to cost estimation —**" and ask your first Pass 2 clarifying question.
- ❌ OUT-OF-SCOPE: Explain clearly why it's out of scope. Then respond with exactly:
  "Your request appears to fall outside our current service offerings. However, this doesn't mean we can't help — we may be able to find a custom solution or partner with you on a modified approach.

  **We recommend scheduling a consultation meeting** where we can:
  - Understand your full requirements in detail
  - Discuss potential workarounds or phased approaches
  - Explore what's possible within our expertise
  - Define a custom scope if feasible

  [**→ Schedule a Meeting (Contact Us)**](/contact)"

  Do NOT advance currentPass. Do NOT proceed to cost estimation.

### PASS 2 — Cost Estimation (currentPass === 2)
Goal: Produce a detailed cost estimate.

- Ask clarifying questions about complexity, integrations, scale if needed.
- Break the project into components and estimate hours:
  - Discovery & requirements: 4–8 hours
  - Architecture & system design: 6–12 hours
  - Development (by type):
    - Simple chatbot: 20–40 hours
    - RAG integration: 30–60 hours
    - Multi-agent system: 50–100+ hours
    - MCP connections: 15–30 hours per integration
    - A2A orchestration: 40–80 hours
  - Testing & QA: 10–20% of dev time
  - Deployment & documentation: 8–16 hours
- Present a clear breakdown table.
- Calculate: totalCost = sum(hours) × $100 × 1.40
- Ask: "Which AI model would you prefer — Claude (Anthropic), GPT-4 (OpenAI), or an open-source model (Llama, Mistral)?"
- If open-source: ask about GPU infrastructure.
- Once model choice is confirmed, set currentPass to 3. Then **immediately** present the Pass 3 quote in the same response — do NOT wait for the user to prompt you.

### PASS 3 — Quote Generation (currentPass === 3)
Goal: Issue a binding estimate.

Present the quote in this exact format:
\`\`\`
✅ PROJECT APPROVED FOR QUOTE

Service Summary:
- Type: [service type]
- Scope: [1-2 sentence overview]
- Timeline: [X–Y weeks]

Cost Breakdown:
- Labor: $X (Y hours × $100/hr)
- Infrastructure/API: $Z (estimated)
- Total (with 40% margin): $W

ESTIMATE RANGE: $[rangeLow] – $[rangeHigh]
(Range assumes ±15% variance for scope clarity in Phase 1)

Next Steps:
1. Review and sign the Statement of Work (SOW)
2. Schedule kick-off call via /contact
3. 50% deposit to begin development
\`\`\`

- Populate originalQuote in your state output with all fields.
- Set currentPass to 4. Then **immediately** confirm to the user that the project is now in the delivery phase and you are ready to handle any scope questions or change requests.

### PASS 4 — Scope Change Management (currentPass === 4)
Goal: Handle ongoing scope management for an active project.

- The project is in delivery. Monitor every new request against the original scopeLog.
- If the request IS within the original scope: proceed normally, no change order needed.
- If the request is NOT in the original scope:
  - Identify it as a scope change.
  - Quantify: additional hours and cost (hours × $100 × 1.40).
  - Issue a Change Order using the format:
    \`\`\`
    SCOPE CHANGE REQUEST

    Change Order: CO-[NNN]
    Original Estimate: $X for Y hours
    Requested Change: [description]
    Impact:
      - Additional hours: Z
      - Additional cost: $W
      - New total: $[original + additional]

    Accept this change order? [Yes/No]
    \`\`\`
  - Add the change order to changeOrders in your state output.
- Never revert to a previous pass.

---

## RESPONSE STYLE
- Professional but approachable
- Use ✅ / ❌ for clear decision signals
- Always explain your reasoning
- Provide clear next steps at the end of each message
- Use markdown formatting for tables and code blocks

---

## MANDATORY STATE OUTPUT
After every single response — no exceptions — append exactly this block with no text after the closing tag:

<state>
{"currentPass":1,"originalQuote":null,"scopeLog":[],"changeOrders":[]}
</state>

Replace the JSON inside with the actual updated state. The state block is machine-parsed and stripped before displaying to the user. Do not explain it or comment on it.

The JSON must match this exact shape:
{
  "currentPass": <1|2|3|4>,
  "originalQuote": <null OR { "totalHours": number, "hourlyRate": 100, "marginMultiplier": 1.40, "totalCost": number, "rangeLow": number, "rangeHigh": number, "breakdown": [{"component": string, "hours": number}], "modelChoice": "claude"|"gpt"|"open-source"|null, "sowSummary": string }>,
  "scopeLog": [<strings>],
  "changeOrders": [<{ "id": string, "description": string, "additionalHours": number, "additionalCost": number, "issuedAt": string }>]
}`;

export async function POST(req: NextRequest) {
  const body: ChatRequest = await req.json();
  const { messages, projectState } = body;

  // Inject current projectState as synthetic context turns
  const chatMessages: { role: "user" | "assistant"; content: string }[] = [
    {
      role: "user",
      content: `[SYSTEM CONTEXT — do not reply to this line, just acknowledge]\nCurrent projectState: ${JSON.stringify(projectState)}`,
    },
    {
      role: "assistant",
      content: "Understood. I have the current project state.",
    },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const encoder = new TextEncoder();
  // Buffer to accumulate streaming text for <state> extraction
  let buffer = "";

  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = await client.chat.completions.create({
          model: "deepseek-v4-flash",
          max_tokens: 2048,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...chatMessages,
          ],
          stream: true,
        });

        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content;
          if (!text) continue;

          buffer += text;

          // Check if <state> opening tag has appeared
          const stateStart = buffer.indexOf("<state>");
          if (stateStart === -1) {
            // No <state> yet — stream everything except the last 7 chars
            // (guards against a split "<state>" tag at a chunk boundary)
            const safe = buffer.slice(0, buffer.length - 7);
            if (safe.length > 0) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: safe })}\n\n`)
              );
              buffer = buffer.slice(buffer.length - 7);
            }
          }
          // If <state> found in buffer, hold everything — wait for </state>
        }

        // Stream ended — parse state block from remaining buffer
        const stateMatch = buffer.match(/<state>([\s\S]*?)<\/state>/);
        let updatedState: ProjectState = projectState;
        let remainingText = buffer;

        if (stateMatch) {
          try {
            updatedState = JSON.parse(stateMatch[1].trim()) as ProjectState;
          } catch {
            // Keep original state if JSON parse fails
          }
          remainingText = buffer
            .replace(/<state>[\s\S]*?<\/state>/, "")
            .trim();
        }

        // Flush any remaining prose text
        if (remainingText) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text: remainingText })}\n\n`)
          );
        }

        // Send terminal event with updated state
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({ done: true, updatedProjectState: updatedState })}\n\n`
          )
        );
      } catch {
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              done: true,
              error: "Failed to get response from AI.",
              updatedProjectState: projectState,
            })}\n\n`
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
