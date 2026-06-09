export type SubscriptionState =
  | "active"
  | "trialing"
  | "canceled"
  | "past_due"
  | "unpaid"
  | "paused"
  | "incomplete"
  | "expired";

export const ACTIVE_STATUSES: readonly string[] = [
  "active",
  "trialing",
] as const;

export const GRACE_PERIOD_STATUSES: readonly string[] = [
  "canceled",
  "past_due",
  "unpaid",
  "paused",
] as const;

export interface ProductTier {
  name: string;
  id: string;
  productId: string;
  priceMonthly: string;
  description: string;
  features?: string[];
  featured?: boolean;
  discountCode?: string;
  creditAmount?: number;
}

export interface SubscriptionStatus {
  isSubscribed: boolean;
  status: SubscriptionState | null;
  willEndOn: Date | null;
  isInGracePeriod: boolean;
  daysLeft: number | null;
}
