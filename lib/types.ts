export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export type PassNumber = 1 | 2 | 3 | 4;

export interface HourEstimate {
  component: string;
  hours: number;
}

export interface OriginalQuote {
  totalHours: number;
  hourlyRate: number;
  marginMultiplier: number;
  totalCost: number;
  rangeLow: number;
  rangeHigh: number;
  breakdown: HourEstimate[];
  modelChoice: "claude" | "gpt" | "open-source" | null;
  sowSummary: string;
}

export interface ChangeOrder {
  id: string;
  description: string;
  additionalHours: number;
  additionalCost: number;
  issuedAt: string;
}

export interface ProjectState {
  currentPass: PassNumber;
  originalQuote: OriginalQuote | null;
  scopeLog: string[];
  changeOrders: ChangeOrder[];
}

export interface ChatRequest {
  messages: ChatMessage[];
  projectState: ProjectState;
}
