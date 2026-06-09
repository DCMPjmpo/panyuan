import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { createClient } from "@/utils/supabase/server";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const baseUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "磐元龙虾 PanyuanClaw - 您的 AI 法律助手",
  description:
    "磐元龙虾搭载47项专业法律技能，覆盖合同审查、法律文书、企业法务、诉讼辅助、法律法规、个人法律服务。基于 OpenClacky 平台，一键安装，配好 API Key 即用。",
  keywords:
    "磐元龙虾, AI法律助手, 法律AI, 合同审查, 法律文书, OpenClacky, PanyuanClaw",
  openGraph: {
    title: "磐元龙虾 PanyuanClaw - 您的 AI 法律助手",
    description: "搭载47项专业法律技能，一键安装，配好 API Key 即用。",
    type: "website",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "磐元龙虾 PanyuanClaw - AI 法律助手",
    description: "搭载47项专业法律技能，一键安装，配好 API Key 即用。",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Header user={user} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
