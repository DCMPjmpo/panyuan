# 磐元龙虾 Panyuan Claw 🦞

**您的 AI 法律助手** — 搭载 47 项专业法律技能，基于 OpenClacky 开源框架，一键安装即用。

官网：[https://panyuan.claw](https://panyuan.claw)（替换为你的实际域名）

---

## 📖 目录

- [用户指南：安装和使用磐元龙虾](#用户指南安装和使用磐元龙虾)
- [开发者指南：运行和修改网页](#开发者指南运行和修改网页)
- [项目结构](#项目结构)
- [技术栈](#技术栈)

---

# 用户指南：安装和使用磐元龙虾

## 🦞 什么是磐元龙虾？

磐元龙虾是基于 OpenClacky 平台构建的 AI 法律助手，在 OpenClacky 官方平台认证发布。它搭载 **47 项法律技能**，覆盖七大领域，安装在本地电脑上，配用你自己的 API Key 即可使用。

### 47 项法律技能

| 分类 | 技能数 | 包含 |
|------|--------|------|
| 合同审查 | 10 | 买卖、租赁、劳动、合作、借款、保密、竞业限制、服务、技术、委托合同审查 |
| 法律文书 | 7 | 起诉状、答辩状、法律意见书、律师函、仲裁申请、强制执行申请、证据清单整理 |
| 企业法务 | 7 | 公司章程制定、股权架构设计、股东协议、尽职调查、知识产权保护、商标注册指导、劳动用工合规 |
| 诉讼辅助 | 5 | 案例检索分析、诉讼策略建议、证据链分析、庭审准备、上诉论证 |
| 法律法规 | 6 | 民法典、刑法、公司法、合同法、劳动法、知识产权法查询解读 |
| 个人法律 | 6 | 婚姻家事、遗产继承、房产交易、消费维权、交通事故、医疗纠纷 |
| 通用能力 | 6 | 法律风险评估、法律术语解释、合同模板库、法律计算器、诉讼时效提醒、法律政策解读 |

---

## 💻 安装磐元龙虾

### 前置条件

**Windows 用户需要先安装 WSL**（Windows Subsystem for Linux）：

以管理员身份打开 PowerShell，运行：

```powershell
wsl --install -d Ubuntu
```

等待完成后**重启电脑**。重启后开始菜单会出现 "Ubuntu"，打开它，设置用户名和密码。

### 安装（两步完成）

#### 第 1 步：下载安装器

- **Windows**：下载 [installer.exe](https://github.com/DCMPjmpo/panyuan/raw/main/public/installer.exe)，双击运行
- **macOS**：下载 [installer.dmg](https://github.com/DCMPjmpo/panyuan/raw/main/public/installer.dmg)，双击安装

安装器会自动配置 Ruby、WSL 等运行环境。等待它跑完。

#### 第 2 步：运行安装命令

安装器跑完后，打开终端运行命令，安装磐元龙虾品牌和 47 项法律技能：

**Windows**（PowerShell 管理员运行）：

```powershell
powershell -c "& ([scriptblock]::Create((irm 'https://oss.1024code.com/clacky-ai/openclacky/main/scripts/install.ps1'))) -BrandName '磐元龙虾' -CommandName 'panyuanclaw'"
```

**macOS**（终端运行）：

```bash
/bin/bash -c "$(curl -sSL https://oss.1024code.com/clacky-ai/openclacky/main/scripts/install.sh)" -- --brand-name=磐元龙虾 --command=panyuanclaw
```

> ⚠️ 注意：如果 Windows 没有 WSL，可以先装 Ruby（https://rubyinstaller.org/），然后运行 `gem install openclacky`，再运行上面的 PowerShell 命令。

---

## 🚀 启动和使用

### 启动磐元龙虾

打开终端（Windows 用 WSL Ubuntu 终端），输入：

```bash
panyuanclaw
```

进入交互式命令行模式。

### 启动 Web 界面

```bash
panyuanclaw server
```

浏览器打开 **http://localhost:7070**，即可使用带界面的磐元龙虾。

### 首次配置

1. 启动后输入 `/config`
2. 设置你的 API Key（Claude / GPT / DeepSeek / Kimi 等任选其一）
3. 设置 API Base URL（如使用官方接口则无需修改）
4. 输入 `/` 浏览全部 47 项法律技能

### 使用技能

- 输入 `/` 模糊搜索技能
- 直接描述你的法律问题，AI 会自动匹配合适的技能
- 示例：
  - "帮我审查这份买卖合同"
  - "起草一份律师函"
  - "查询民法典关于违约责任的规定"

### API Key 获取

| 平台 | 地址 | 说明 |
|------|------|------|
| Anthropic (Claude) | https://console.anthropic.com/ | 推荐，法律理解能力强 |
| OpenAI (GPT) | https://platform.openai.com/ | 通用能力强 |
| DeepSeek | https://platform.deepseek.com/ | 性价比高 |
| Moonshot (Kimi) | https://platform.moonshot.cn/ | 中文友好 |

---

## 💰 定价

磐元龙虾安装**免费**。使用 AI 功能产生的 API 费用由模型提供商按用量收取，每次咨询通常仅几美分。

社群版 ¥999/年（含 47 项技能 1 年期使用权 + 专属社群 + 磐元法讯周刊），微信咨询：**15676112976**。

---

## ❓ 常见问题

**Q: 磐元龙虾和 ChatGPT 有什么区别？**
A: 磐元龙虾是专为法律场景设计的 AI 助手，内置 47 项法律专业技能，不是通用 AI 套壳。它会根据法律场景自动调用对应的技能，输出更专业、格式更规范。

**Q: 安装需要多久？**
A: 网络正常情况下 5-10 分钟。

**Q: 必须用 WSL 吗？**
A: Windows 推荐用 WSL。也可以直接装 Ruby（rubyinstaller.org），然后用 `gem install openclacky` 安装。

**Q: 法律建议可靠吗？**
A: AI 内容仅供参考学习，重大法律事务请咨询执业律师。

**Q: 支持哪些平台？**
A: Windows 10/11、macOS（Intel 和 Apple Silicon）、Linux。

---

# 开发者指南：运行和修改网页

## 🛠 环境要求

- **Node.js** 18+ 
- **npm**（随 Node.js 安装）

## 🚀 快速启动

### 1. 克隆仓库

```bash
git clone https://github.com/DCMPjmpo/panyuan.git
cd panyuan
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npx next dev --port 3000
```

看到 `✓ Ready` 后，浏览器打开 **http://localhost:3000** 查看网页。

### 4. 修改网页内容

| 想改的内容 | 修改文件 |
|-----------|---------|
| 首页 Hero 标题和描述 | `app/page.tsx` 开头部分 |
| 安装命令 | `app/page.tsx` 搜索 `WIN_CMD` 和 `NIX_CMD` |
| 定价金额 | `app/page.tsx` 搜索 `¥999` |
| 微信号 | `app/page.tsx` 搜索 `15676112976` |
| 微信二维码 | 替换 `public/qrcode.png` |
| Logo | `components/logo.tsx` |
| 导航栏链接 | `components/header.tsx` |
| 页脚内容 | `components/footer.tsx` |
| 网站标题/SEO | `app/layout.tsx` 的 metadata |
| 法律技能内容 | `.clacky/skills/` 目录下各 `SKILL.md` |

### 5. 构建生产版本

```bash
npm run build
npm start
```

生产版本运行在 http://localhost:3000。

## 📁 项目结构

```
├── app/                         # Next.js App Router
│   ├── page.tsx                 # 🔥 首页（磐元龙虾产品站）
│   ├── layout.tsx               # 根布局 + SEO 元数据
│   ├── globals.css              # 全局样式
│   ├── (auth-pages)/            # 登录/注册页
│   ├── api/                     # API 路由
│   ├── dashboard/               # 用户仪表盘
│   └── about/privacy/terms/     # 其他页面
├── components/
│   ├── ui/                      # shadcn/ui 组件库
│   ├── header.tsx               # 导航栏
│   ├── footer.tsx               # 页脚
│   ├── logo.tsx                 # Logo
│   └── pricing-section.tsx      # 定价组件
├── .clacky/skills/              # 🔥 47 项法律技能定义
│   ├── sales-contract-review/   # 买卖合同审查
│   ├── complaint-generation/    # 起诉状生成
│   └── ...（共 47 个）
├── public/                      # 静态资源
│   ├── installer.exe / .dmg     # 安装器下载文件
│   ├── qrcode.png               # 微信二维码
│   └── skills.tar.gz            # 技能包
├── config/                      # 配置文件
├── types/                       # TypeScript 类型
├── utils/                       # 工具函数
└── hooks/                       # 自定义 Hooks
```

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 + React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS + shadcn/ui |
| 动画 | Framer Motion |
| AI 平台 | OpenClacky |
| 部署 | Vercel / 任意支持 Next.js 的平台 |

---

## 📞 联系

- 🦞 产品：磐元龙虾（OpenClacky 官方认证）
- 📱 微信：**15676112976**
- 📧 备注"磐元法讯"入群，获取每周法律科技动态
