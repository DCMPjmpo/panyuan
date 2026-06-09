export interface CreemWebhookEvent {
  eventType: string;
  object: any;
}

export interface CreditTransaction {
  amount: number;
  type: "add" | "subtract";
  created_at: string;
}
