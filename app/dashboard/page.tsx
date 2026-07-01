import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, CreditCard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 container">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border rounded-lg p-6 sm:p-8 mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 break-words">
          磐元龙虾 Dashboard
        </h1>
        <p className="text-muted-foreground">
          Dashboard features are coming soon. Manage your subscription and credits here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available Credits</p>
              <h3 className="text-2xl font-bold mt-1">--</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Coming soon</p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Subscription Status</p>
              <h3 className="text-2xl font-bold mt-1 text-muted-foreground">
                No Active Plan
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Coming soon</p>
        </div>
      </div>

      {/* Placeholder */}
      <div className="border border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center text-muted-foreground bg-muted/20">
        <p className="text-lg font-medium">更多功能即将上线</p>
        <p className="text-sm mt-2">订阅管理、积分查询、使用统计等功能正在开发中</p>
      </div>
    </div>
  );
}
