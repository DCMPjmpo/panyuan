"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import {
  Scale, FileText, ScrollText, Building2, Gavel, BookOpen, User, Wrench,
  ShieldCheck, Key, Download, Copy, Check, ChevronDown, ChevronUp, Sparkles,
  Monitor, Apple, Terminal, ArrowRight, CreditCard, MessageCircle, Users, Zap,
} from "lucide-react";

const WIN_CMD = 'powershell -c "& ([scriptblock]::Create((irm \'https://oss.1024code.com/clacky-ai/openclacky/main/scripts/install.ps1\'))) -BrandName \'磐元龙虾\' -CommandName \'panyuanclaw\'"';
const NIX_CMD = '/bin/bash -c "$(curl -sSL https://oss.1024code.com/clacky-ai/openclacky/main/scripts/install.sh)" -- --brand-name=磐元龙虾 --command=panyuanclaw';

export default function Home() {
  const [activeTab, setActiveTab] = useState<"windows" | "macos" | "linux">("windows");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentCmd = activeTab === "windows" ? WIN_CMD : NIX_CMD;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ========== Hero ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-primary/5 to-background -z-10" />
        <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl -z-10" />

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                OpenClacky 官方认证 · v1.0
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-primary to-red-400">
                  磐元龙虾
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/80">
                您的 AI 法律助手
              </p>
              <p className="text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
                搭载 <strong className="text-foreground">47 项专业法律技能</strong>，
                覆盖合同审查、法律文书、企业法务、诉讼辅助、法律法规、个人法律服务等全领域。
                一键安装，配好 API Key 即用。
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg gap-2" onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}>
                <Download className="w-5 h-5" /> 立即安装
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-lg" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
                查看 47 项技能 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== Install ========== */}
      <section id="install" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">安装 磐元龙虾</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              先下载安装器运行，再执行命令，<strong className="text-foreground">两步完成</strong>
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Platform Tabs */}
            <div className="flex justify-center gap-2 mb-6">
              {[
                { id: "windows" as const, label: "Windows", icon: <Monitor className="w-4 h-4" /> },
                { id: "macos" as const, label: "macOS", icon: <Apple className="w-4 h-4" /> },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  className="gap-2"
                  onClick={() => { setActiveTab(tab.id); setCopied(false); }}
                >
                  {tab.icon} {tab.label}
                </Button>
              ))}
            </div>

            {/* Step 1: Download Installer */}
            <Card className="overflow-hidden border-2 mb-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b">
                  <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">1</div>
                  <span className="font-semibold">第 1 步：下载安装器</span>
                  <span className="text-xs text-muted-foreground">
                    {activeTab === "windows" ? "（.exe 双击运行）" : "（.dmg 双击安装）"}
                  </span>
                </div>
                <div className="p-5 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={activeTab === "windows" ? "/installer.exe" : "/installer.dmg"}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5" />
                    {activeTab === "windows" ? "下载 .exe 安装器" : "下载 .dmg 安装器"}
                  </a>
                  <span className="text-sm text-muted-foreground">下载后双击运行，自动完成环境配置</span>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Terminal Command */}
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b">
                  <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">2</div>
                  <span className="font-semibold">第 2 步：运行安装命令</span>
                  <span className="text-xs text-muted-foreground">（安装磐元龙虾品牌 + 47 项法律技能）</span>
                </div>
                <div className="bg-zinc-950 text-zinc-50">
                  <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-xs text-zinc-400">
                      {activeTab === "windows" ? "PowerShell" : "Terminal"}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-zinc-400 hover:text-white hover:bg-zinc-800 h-8 px-3 text-xs gap-1.5"
                      onClick={handleCopy}
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "已复制" : "复制命令"}
                    </Button>
                  </div>
                  <div className="p-5 overflow-x-auto">
                    <code className="text-sm md:text-base font-mono whitespace-pre-wrap break-all leading-relaxed">
                      {currentCmd}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What gets installed */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { step: "1", text: "下载并运行安装器" },
                { step: "2", text: "运行安装命令" },
                { step: "3", text: "终端输入 panyuanclaw" },
                { step: "4", text: "配好 API Key 即用" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary text-sm font-bold">{item.step}</div>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Why Choose ========== */}
      <section id="features" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">为什么选择 磐元龙虾</h2>
            <p className="text-muted-foreground text-lg">基于 OpenClacky 开源框架，专为中国法律场景深度优化</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Scale className="w-6 h-6" />, title: "47 项专业法律技能", desc: "合同审查、法律文书生成、企业法务、诉讼辅助、法律法规解读、个人法律服务等七大领域全覆盖，每项技能均经过法律专家精心设计。" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "加密安全分发", desc: "基于 OpenClacky 平台 AES-256-GCM 加密技术，Skill 端到端加密分发，您的法律数据与隐私得到最高级别保护。" },
              { icon: <Key className="w-6 h-6" />, title: "自带密钥 (BYOK)", desc: "使用您自己的 API Key（Claude / GPT / DeepSeek / Kimi 等），法律数据本地处理，绝不上传任何第三方服务器，确保数据主权。" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">{item.icon}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Skills Grid ========== */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">47 项法律技能</h2>
            <p className="text-muted-foreground text-lg">七大领域，全面覆盖您的法律需求</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { name: "合同审查", count: 10, icon: <FileText className="w-5 h-5" />, desc: "买卖、租赁、劳动、合作、借款、保密、竞业限制、服务、技术、委托合同审查" },
              { name: "法律文书", count: 7, icon: <ScrollText className="w-5 h-5" />, desc: "起诉状、答辩状、法律意见书、律师函、仲裁申请、强制执行申请、证据清单整理" },
              { name: "企业法务", count: 7, icon: <Building2 className="w-5 h-5" />, desc: "公司章程制定、股权架构设计、股东协议、尽职调查、知识产权保护、商标注册指导、劳动用工合规" },
              { name: "诉讼辅助", count: 5, icon: <Gavel className="w-5 h-5" />, desc: "案例检索分析、诉讼策略建议、证据链分析、庭审准备、上诉论证" },
              { name: "法律法规", count: 6, icon: <BookOpen className="w-5 h-5" />, desc: "民法典、刑法、公司法、合同法、劳动法、知识产权法深度解读与查询" },
              { name: "个人法律", count: 6, icon: <User className="w-5 h-5" />, desc: "婚姻家事、遗产继承、房产交易、消费维权、交通事故、医疗纠纷" },
              { name: "通用能力", count: 6, icon: <Wrench className="w-5 h-5" />, desc: "法律风险评估、法律术语解释、合同模板库、法律计算器、诉讼时效提醒、法律政策解读" },
            ].map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full hover:border-primary/50 transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">{cat.icon}</div>
                      <div>
                        <h3 className="font-semibold">{cat.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-0.5">{cat.count} 项技能</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Pricing ========== */}
      <section id="pricing" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">社群版 · 年费订阅</h2>
            <p className="text-muted-foreground text-lg">一年使用权 + 社群陪伴，跟着磐元一起养龙虾</p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-primary shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/5 px-6 py-8 text-center border-b">
                  <div className="text-sm text-muted-foreground mb-2 font-medium">社群版 + 1 年期使用权</div>
                  <div className="text-5xl font-bold text-primary font-mono tracking-tight">
                    ¥999<span className="text-base font-normal text-muted-foreground ml-1">/年</span>
                  </div>
                </div>
                <div className="px-6 py-6 space-y-4">
                  {[
                    "磐元龙虾 47 项法律技能 1 年期使用权",
                    "社群专属答疑与交流",
                    "法律 AI 技能使用技巧分享",
                    "定期线上法律科技专题直播",
                    "磐元法讯周刊（邮件 + 社群推送）",
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                  <Button size="lg" className="w-full mt-4 gap-2" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                    <MessageCircle className="w-4 h-4" /> 微信咨询购买
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">购买后 24 小时内开通，支持对公转账</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== Values ========== */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">打造属于您的私人法律顾问</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Scale className="w-7 h-7" />, title: "专业全面", desc: "47 项法律技能由法律专家参与设计，覆盖从合同审查到诉讼辅助的全流程法律需求。" },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "数据安全", desc: "采用 BYOK 模式，所有法律数据本地处理，案件信息与客户资料绝不外泄。" },
              { icon: <Sparkles className="w-7 h-7" />, title: "持续进化", desc: "基于 OpenClacky Skill 自进化机制，每次使用自动优化，紧跟最新法规变化。" },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 text-primary">{v.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 磐元法讯 + 微信联系 ========== */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {/* 磐元法讯 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">磐元法讯</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  每周推送最新法律科技动态、AI 法律应用技巧、典型案例分析。
                  帮你用 AI 提升法律工作效率，走在法律科技最前沿。
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-muted-foreground">添加微信，备注「<strong className="text-foreground">磐元法讯</strong>」入群</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">与全国法律人一起交流 AI 应用心得</span>
                  </div>
                </div>
              </div>

              {/* 微信联系 */}
              <Card className="overflow-hidden">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">扫码或添加微信</h3>
                    <p className="text-sm text-muted-foreground mt-1">咨询购买 · 加入社群 · 获取法讯</p>
                  </div>
                  <div className="w-44 h-44 mx-auto rounded-xl overflow-hidden border-2 border-green-200 dark:border-green-800">
                    <img src="/qrcode.png" alt="微信二维码" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">微信号</p>
                    <p className="text-lg font-mono font-bold text-primary">15676112976</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    备注「磐元法讯」优先通过
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold">常见问题</h2></div>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              { q: "磐元龙虾是什么？", a: "磐元龙虾是基于开源 AI Agent 框架 OpenClacky 构建的专业法律 AI 助手，在 OpenClacky 官方平台认证发布。搭载 47 项法律技能，安装在本地电脑，配用您自己的 API Key 即可使用。" },
              { q: "如何安装？", a: "在上方选择您的操作系统（Windows / macOS / Linux），复制安装命令到终端运行即可。安装过程全自动：安装 OpenClacky → 下载 47 项法律技能 → 配置完成。安装后在终端输入 panyuanclaw 启动命令行模式，或 panyuanclaw server 启动 Web 界面（浏览器访问 localhost:7070）。" },
              { q: "需要什么 API Key？", a: "支持所有兼容 OpenAI 接口的大语言模型：Claude (Anthropic)、GPT (OpenAI)、DeepSeek、Kimi (Moonshot)、MiniMax、OpenRouter 等。在任意平台注册获取 API Key，启动后输入 /config 配置即可。" },
              { q: "磐元龙虾收费吗？", a: "磐元龙虾安装完全免费。使用 AI 功能需要您自带的 API Key，费用由模型提供商按用量收取，每次法律咨询的成本通常仅几美分。" },
              { q: "法律建议可靠吗？", a: "AI 生成的法律内容仅供参考与学习用途。技能设计遵循中国法律法规，但 AI 分析不能替代执业律师的专业判断。重大法律事务请务必咨询持证律师。" },
              { q: "支持哪些平台？", a: "Windows 10/11（通过 WSL）、macOS（Apple Silicon 和 Intel）、Linux（Ubuntu / Debian / CentOS 等主流发行版）。" },
            ].map((faq, i) => (
              <Card key={i} className="overflow-hidden">
                <button className="w-full p-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-medium pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-primary to-red-500 text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">准备好开始您的法律 AI 之旅了吗？</h2>
            <p className="text-primary-foreground/80 text-lg">一键安装磐元龙虾，47 项法律技能即刻就绪。自带 API Key，数据安全有保障。</p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-lg" onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}>
              <Download className="w-5 h-5 mr-2" /> 免费安装
            </Button>
            <p className="text-primary-foreground/60 text-sm">安装免费 · BYOK（自带密钥）· 数据本地处理不外传</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
