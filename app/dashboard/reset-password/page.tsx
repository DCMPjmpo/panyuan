import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPassword() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-10">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset password
        </h1>
        <p className="text-sm text-muted-foreground">
          Password reset is coming soon.
        </p>
      </div>
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/sign-in">Back to Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
