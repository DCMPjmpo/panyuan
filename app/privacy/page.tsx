"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, UserCheck, Database, Eye } from "lucide-react";

export default function PrivacyPage() {
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
              <h1 className="text-xl font-bold">隐私政策</h1>
              <p className="text-sm text-muted-foreground">
                我们如何保护您的数据
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
              <Shield className="mr-2 h-4 w-4" />
              您的隐私至关重要
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              隐私政策
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              磐元龙虾致力于保护您的隐私。本政策说明了我们如何收集、使用和保护您的信息。
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>最后更新：</strong>2025 年 1 月
            </p>
          </motion.div>

          {/* Privacy Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">透明</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  我们清楚说明收集哪些数据以及如何使用，不存在隐藏的数据收集行为。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">安全</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  您的个人信息受到行业标准安全措施和加密协议的保护，确保数据安全。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">掌控</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  您对自己的数据拥有完全控制权，可以随时访问、更新或删除您的信息。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                我们收集的信息
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">您主动提供的信息</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>账户信息：</strong>注册时提供的电子邮件地址</li>
                    <li>• <strong>API Key：</strong>您配置的大语言模型 API 密钥（存储在本地，不会上传至我们的服务器）</li>
                    <li>• <strong>使用偏好：</strong>您选择的技能配置和个性化设置</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">自动收集的信息</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>使用数据：</strong>您与服务的交互方式（仅用于功能改进）</li>
                    <li>• <strong>设备信息：</strong>浏览器类型、操作系统版本</li>
                    <li>• <strong>Cookie：</strong>用于改善体验和记住您的偏好设置</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">我们如何使用您的信息</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>关键说明：</strong>磐元龙虾采用 BYOK（Bring Your Own Key）模式，
                  您使用的 API Key 直接连接您选择的大模型服务商。您的法律咨询内容
                  <strong>不会</strong>被发送到磐元龙虾的服务器，而是直接在您的本地环境中处理。
                </p>
                <ul className="space-y-2 mt-4">
                  <li>• 提供和改进 AI 法律技能服务</li>
                  <li>• 记录使用统计数据以优化技能质量</li>
                  <li>• 发送服务相关的通知和更新</li>
                  <li>• 确保服务安全和防止滥用</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">信息共享</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>我们不会出售您的个人信息。</strong>仅在以下有限情况下共享信息：
                </p>
                <ul className="space-y-2">
                  <li>• <strong>服务提供商：</strong>帮助我们运营服务的可信第三方（如网站托管、分析服务）</li>
                  <li>• <strong>法律要求：</strong>法律要求或为保护我们的权利和安全时</li>
                  <li>• <strong>获得同意：</strong>您明确同意共享信息时</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">隐私相关问题？</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              如果您对本隐私政策有任何疑问，请随时联系我们。
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
