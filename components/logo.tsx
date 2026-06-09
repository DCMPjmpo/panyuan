import Link from "next/link";
import { Gavel } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <div className="flex items-center justify-center p-1 bg-red-500/10 rounded-md">
        <Gavel className="w-5 h-5 text-red-500" />
      </div>
      <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-primary">
        磐元龙虾
      </span>
    </Link>
  );
}
