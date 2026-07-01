"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function TermsPage() {
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
              <h1 className="text-xl font-bold">服务条款</h1>
              <p className="text-sm text-muted-foreground">
                使用磐元龙虾服务须遵守的条款
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
              <Scale className="mr-2 h-4 w-4" />
              法律条款
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              服务条款
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              这些条款适用于您使用磐元龙虾 AI 法律助手服务。使用即表示您同意这些条款。
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>最后更新：</strong>2025 年 1 月
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">您可以</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  使用磐元龙虾进行法律文书起草、合同审查、法律咨询辅助等合法用途。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">您不可以</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  滥用服务、侵犯他人权利、或将 AI 生成内容用于非法或有害目的。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">我们的承诺</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  提供可靠的服务、保护您的隐私、持续优化法律 AI 技能的质量。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                服务说明
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  磐元龙虾是基于 OpenClacky 开源框架构建的 AI 法律助手，提供 47 项专业法律技能，
                  包括但不限于合同审查、法律文书生成、企业法务咨询、诉讼辅助、法律法规解读等服务。
                </p>
                <ul className="space-y-2">
                  <li>• <strong>免费安装：</strong>磐元龙虾技能包可免费安装使用</li>
                  <li>• <strong>BYOK 模式：</strong>用户自带 API Key，数据在本地处理</li>
                  <li>• <strong>社群版订阅：</strong>可选年费订阅获取社群服务和持续更新</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                免责声明
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">AI 生成内容仅供参考</h4>
                  <p>
                    磐元龙虾提供的所有法律内容均由 AI 生成，仅供学习与参考用途，不构成正式法律意见。
                    AI 分析不能替代持证律师的专业判断。重大法律事务请务必咨询执业律师。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">服务可用性</h4>
                  <p>
                    虽然我们努力维持服务的持续可用，但不能保证不间断访问。
                    我们可能会因维护、更新或不可控情况而临时暂停服务。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">无担保声明</h4>
                  <p>
                    本服务按"现状"提供，不附带任何明示或暗示的担保。
                    我们不保证生成内容在所有法律场景中的适用性或准确性。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">有问题？</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              如果您对这些条款有任何疑问，请随时联系我们。
            </p>
            <Button asChild>
              <Link href="/">
                返回首页
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
