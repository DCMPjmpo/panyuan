#Requires -Version 5
# =============================================================================
# 磐元龙虾 (Panyuan Claw) - Windows 安装脚本
#
# 使用方式:
#   powershell -c "& ([scriptblock]::Create((irm 'https://你的域名/install.ps1'))) -BrandName '磐元龙虾' -CommandName 'panyuanclaw' -BaseUrl 'https://你的域名'"
#
# 参数:
#   -BrandName    品牌名称 (默认: 磐元龙虾)
#   -CommandName  CLI 命令名 (默认: panyuanclaw)
#   -BaseUrl      下载 Skill 包的站点地址 (必须！)
#   -Region       CDN 区域: china (默认) 或 global
# =============================================================================

param(
    [string]$BrandName   = "磐元龙虾",
    [string]$CommandName = "panyuanclaw",
    [string]$BaseUrl     = "",
    [ValidateSet("china", "global")]
    [string]$Region = "china"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$global:DisplayName = $BrandName
$global:DisplayCmd  = $CommandName
$global:SkillUrl    = if ($BaseUrl) { "$BaseUrl/skills.tar.gz" } else { "" }

function Write-Info    { param($msg) Write-Host "  [i] $msg" -ForegroundColor Cyan }
function Write-Success { param($msg) Write-Host "  [+] $msg" -ForegroundColor Green }
function Write-Warn    { param($msg) Write-Host "  [!] $msg" -ForegroundColor Yellow }
function Write-Fail    { param($msg) Write-Host "  [x] $msg" -ForegroundColor Red }
function Write-Step    { param($msg) Write-Host "`n==> $msg" -ForegroundColor Blue }

function Show-Banner {
    Write-Host ""
    Write-Host "  ==============================================" -ForegroundColor Red
    Write-Host "      磐 元 龙 虾  -  Panyuan Claw" -ForegroundColor Yellow
    Write-Host "      您的AI法律助手 · 47项法律技能" -ForegroundColor Cyan
    Write-Host "  ==============================================" -ForegroundColor Red
    Write-Host ""
}

function Test-WslInstalled {
    try {
        $result = wsl --status 2>&1
        return ($LASTEXITCODE -eq 0)
    } catch { return $false }
}

# ---- WSL 内安装（核心流程） ----
function Install-InWsl {
    Write-Step "正在 WSL Ubuntu 中安装 $DisplayName ..."

    if (-not $SkillUrl) {
        Write-Warn "未指定 -BaseUrl，将不会安装法律技能包"
        Write-Warn "安装命令示例: ... -BaseUrl 'https://你的域名'"
    }

    $installScript = @"
#!/bin/bash
set -e

echo "==> 更新系统包..."
sudo apt-get update -qq

echo "==> 安装必要依赖..."
sudo apt-get install -y -qq curl git build-essential libssl-dev libreadline-dev zlib1g-dev

if ! command -v ruby &> /dev/null; then
    echo "==> 安装 Ruby..."
    sudo apt-get install -y -qq ruby ruby-dev
fi

RUBY_VERSION=\$(ruby -v 2>/dev/null | grep -oP '\d+\.\d+' | head -1)
echo "  Ruby 版本: \$RUBY_VERSION"

echo "==> 安装 OpenClacky..."
gem install openclacky --no-document

# ---- 下载并安装磐元龙虾法律技能包 ----
SKILL_URL="$SkillUrl"
if [ -n "\$SKILL_URL" ]; then
    echo ""
    echo "==> 下载磐元龙虾法律技能包..."
    mkdir -p ~/.clacky
    if curl -fSL --progress-bar "\$SKILL_URL" -o /tmp/skills.tar.gz 2>/dev/null; then
        echo "==> 安装47项法律技能到 ~/.clacky/skills/ ..."
        tar -xzf /tmp/skills.tar.gz -C ~/.clacky/
        rm -f /tmp/skills.tar.gz
        echo "  [+] 47项法律技能安装成功!"
    else
        echo "  [!] 技能包下载失败，OpenClacky 已安装但无法律技能"
        echo "  [!] 请检查 BaseUrl 是否正确"
    fi
else
    echo "  [!] 跳过技能包安装（未提供 SkillUrl）"
fi

# ---- 创建品牌配置 ----
mkdir -p ~/.clacky
cat > ~/.clacky/brand.yml << 'BRANDEOF'
product_name: "$DisplayName"
package_name: "$DisplayCmd"
homepage_url: "$BaseUrl"
BRANDEOF

# ---- 创建别名 ----
if ! grep -q "alias $DisplayCmd=" ~/.bashrc 2>/dev/null; then
    echo "" >> ~/.bashrc
    echo "# $DisplayName alias" >> ~/.bashrc
    echo "alias $DisplayCmd='openclacky'" >> ~/.bashrc
fi

echo ""
echo "=============================================="
echo "  磐元龙虾 安装完成!"
echo "=============================================="
echo ""
echo "  启动: $DisplayCmd (或 openclacky)"
echo "  Web UI: $DisplayCmd server  →  http://localhost:7070"
echo ""
echo "  首次使用:"
echo "    1. 输入 $DisplayCmd 启动"
echo "    2. 输入 /config 配置 API Key"
echo "    3. 输入 / 浏览 47 项法律技能"
echo ""
echo "  技能分类:"
echo "    合同审查(10) | 法律文书(7) | 企业法务(7)"
echo "    诉讼辅助(5) | 法律法规(6) | 个人法律(6)"
echo "    通用能力(6) = 47项法律技能"
echo "=============================================="
"@

    $installScript | wsl -d Ubuntu -u root bash 2>&1
    return ($LASTEXITCODE -eq 0)
}

# ---- 主流程 ----
function Main {
    Show-Banner

    Write-Info "品牌: $DisplayName | 命令: $DisplayCmd"
    Write-Info "技能包: $SkillUrl"

    if (-not $SkillUrl) {
        Write-Warn "未指定 -BaseUrl 参数，技能包将不会被安装"
        Write-Warn "完整安装命令:"
        Write-Host '  powershell -c "& ([scriptblock]::Create((irm '''https://你的域名/install.ps1'''))) -BrandName ''磐元龙虾'' -CommandName ''panyuanclaw'' -BaseUrl ''https://你的域名''"' -ForegroundColor Yellow
        Write-Host ""
    }

    Write-Step "开始安装..."

    if (Test-WslInstalled) {
        Write-Info "检测到 WSL，使用 WSL 方式安装"
        $ok = Install-InWsl
    } else {
        Write-Warn "未检测到 WSL"
        Write-Info "正在启用 WSL..."
        try {
            dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
            Write-Success "WSL 已启用，请重启电脑后再次运行此安装命令"
            exit 0
        } catch {
            Write-Fail "启用 WSL 失败，请手动安装: gem install openclacky"
            Write-Info "然后手动下载技能包: curl -o /tmp/skills.tar.gz $SkillUrl"
            Write-Info "解压到: tar -xzf /tmp/skills.tar.gz -C ~/.clacky/"
            exit 1
        }
    }

    if ($ok) {
        Write-Host ""
        Write-Host "==============================================" -ForegroundColor Green
        Write-Host "  磐元龙虾 安装成功!" -ForegroundColor Green
        Write-Host "==============================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "  在 WSL 终端中输入: $DisplayCmd" -ForegroundColor Yellow
        Write-Host "  Web UI: $DisplayCmd server → http://localhost:7070" -ForegroundColor Yellow
        Write-Host ""
    } else {
        Write-Fail "安装失败，请检查错误信息"
        exit 1
    }
}

Main
