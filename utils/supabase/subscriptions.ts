import { createServiceRoleClient } from "./service-role";

export async function createOrUpdateCustomer(
  creemCustomer: any,
  userId: string
) {
  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from("customers")
    .upsert(
      {
        user_id: userId,
        creem_customer_id: creemCustomer?.id,
        email: creemCustomer?.email,
      },
      { onConflict: "user_id" }
    )
    .select("id")
    .single();

  if (error) {
    console.error("Error creating/updating customer:", error);
    throw error;
  }

  return data?.id;
}

export async function createOrUpdateSubscription(
  creemSubscription: any,
  customerId: string
) {
  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from("subscriptions")
    .upsert(
      {
        customer_id: customerId,
        status: creemSubscription?.status,
        current_period_end: creemSubscription?.current_period_end,
        creem_product_id: creemSubscription?.product?.id,
      },
      { onConflict: "customer_id" }
    )
    .select("id")
    .single();

  if (error) {
    console.error("Error creating/updating subscription:", error);
    throw error;
  }

  return data?.id;
}

export async function addCreditsToCustomer(
  customerId: string,
  credits: number,
  orderId: string,
  description: string
) {
  const supabase = createServiceRoleClient();

  // Increment credits via RPC
  const { error: rpcError } = await supabase.rpc("increment_credits", {
    customer_id: customerId,
    amount: credits,
  });

  if (rpcError) {
    console.error("Error incrementing credits:", rpcError);
    throw rpcError;
  }

  // Record transaction
  const { error: historyError } = await supabase
    .from("credits_history")
    .insert({
      customer_id: customerId,
      amount: credits,
      type: "add",
      description,
    });

  if (historyError) {
    console.error("Error recording credit history:", historyError);
    throw historyError;
  }
}
