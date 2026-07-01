"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">关于我们</h1>
              <p className="text-sm text-muted-foreground">
                了解磐元龙虾的故事与使命
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
              <Scale className="mr-2 h-4 w-4" />
              AI · 法律 · 创新
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              让法律 AI 服务每一个人
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              磐元龙虾是基于 OpenClacky 开源框架打造的专业 AI 法律助手，
              搭载 47 项专业法律技能，让法律工作更高效、更智能。
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>我们的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  用 AI 技术降低法律服务的门槛，让每一个人和每一家企业都能获得专业、高效、可负担的法律支持。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>数据安全</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  采用 BYOK（自带密钥）模式，所有法律数据本地处理。案件信息与客户资料绝不外泄，确保数据主权。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>持续进化</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  基于 OpenClacky Skill 自进化机制，每次使用自动优化，紧跟最新法规变化，越用越智能。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                关于磐元龙虾
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  「磐元」寓意坚如磐石、回归本源——我们坚信法律科技应当扎根于真实的法律场景，
                  解决实际问题，而不是追逐概念的空中楼阁。龙虾则是法律人圈内亲切的昵称，
                  象征着在专业领域深耕的"老法师"。
                </p>
                <p>
                  磐元龙虾搭载了 47 项精心设计的法律技能，覆盖合同审查、法律文书生成、
                  企业法务、诉讼辅助、法律法规解读、个人法律服务等七大领域。
                  每项技能均由资深法律专家参与设计，确保输出内容符合中国法律实践。
                </p>
                <p>
                  作为 OpenClacky 官方认证平台发布的技能包，磐元龙虾受益于开源社区的持续贡献。
                  我们坚信开放生态的力量，让法律 AI 技术惠及更多人。
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-4">准备好开始了吗？</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              一键安装磐元龙虾，47 项法律技能即刻就绪。自带 API Key，数据安全有保障。
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link href="/">
                免费安装
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
