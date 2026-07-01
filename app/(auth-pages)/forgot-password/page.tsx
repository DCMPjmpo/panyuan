"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset password
        </h1>
        <p className="text-sm text-muted-foreground">
          Password reset is coming soon. Stay tuned!
        </p>
      </div>
      <div className="grid gap-6">
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled
            />
          </div>
          <Button className="w-full" disabled>
            Send reset link
          </Button>
        </form>
        <div className="text-sm text-muted-foreground text-center">
          Remember your password?{" "}
          <Link
            href="/sign-in"
            className="text-primary underline underline-offset-4 hover:text-primary/90"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
