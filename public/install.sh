#!/bin/bash
# =============================================================================
# 磐元龙虾 (Panyuan Claw) - macOS/Linux 安装脚本
#
# 使用方式:
#   /bin/bash -c "$(curl -sSL https://你的域名/install.sh)"
#
# 环境变量（可选）:
#   BRAND_NAME=磐元龙虾 COMMAND_NAME=panyuanclaw BASE_URL=https://你的域名
# =============================================================================

set -e

BRAND_NAME="${BRAND_NAME:-磐元龙虾}"
COMMAND_NAME="${COMMAND_NAME:-panyuanclaw}"
BASE_URL="${BASE_URL:-}"
SKILL_URL="${BASE_URL:+$BASE_URL/skills.tar.gz}"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m'

info()    { echo -e "  ${CYAN}[i]${NC} $1"; }
success() { echo -e "  ${GREEN}[+]${NC} $1"; }
warn()    { echo -e "  ${YELLOW}[!]${NC} $1"; }
error()   { echo -e "  ${RED}[x]${NC} $1"; }
step()    { echo -e "\n${YELLOW}==>${NC} $1"; }

show_banner() {
    echo ""
    echo -e "${RED}  ==============================================${NC}"
    echo -e "${YELLOW}      磐 元 龙 虾  -  Panyuan Claw${NC}"
    echo -e "${CYAN}      您的AI法律助手 · 47项法律技能${NC}"
    echo -e "${RED}  ==============================================${NC}"
    echo ""
}

detect_os() {
    case "$(uname -s)" in
        Linux*)  OS="Linux";;
        Darwin*) OS="macOS";;
        *)       OS="Unknown";;
    esac
    info "操作系统: $OS ($(uname -m))"
}

check_ruby() {
    if command -v ruby &> /dev/null; then
        RUBY_VER=$(ruby -v 2>/dev/null | grep -oP '\d+\.\d+' | head -1 || echo "0")
        info "Ruby 版本: $RUBY_VER"
        if [ "$(echo "$RUBY_VER >= 3.1" | bc -l 2>/dev/null || echo 0)" = "1" ]; then
            return 0
        fi
        if [ "${RUBY_VER%%.*}" -ge 3 ]; then
            return 0
        fi
    fi
    return 1
}

install_ruby() {
    step "安装 Ruby..."
    case "$OS" in
        macOS)
            if ! command -v brew &> /dev/null; then
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            fi
            brew install ruby
            export PATH="/usr/local/opt/ruby/bin:/opt/homebrew/opt/ruby/bin:$PATH"
            ;;
        Linux)
            if command -v apt-get &> /dev/null; then
                sudo apt-get update -qq && sudo apt-get install -y -qq ruby ruby-dev build-essential
            elif command -v yum &> /dev/null; then
                sudo yum install -y ruby ruby-devel
            elif command -v dnf &> /dev/null; then
                sudo dnf install -y ruby ruby-devel
            fi
            ;;
    esac
}

install_openclacky() {
    step "安装 OpenClacky..."
    gem install openclacky --no-document
    success "OpenClacky 安装完成"
}

install_skills() {
    if [ -z "$SKILL_URL" ]; then
        warn "未设置 BASE_URL，跳过技能包安装"
        warn "用法: BASE_URL=https://你的域名 $0"
        return 1
    fi

    step "下载磐元龙虾法律技能包..."
    mkdir -p "$HOME/.clacky"

    if curl -fSL --progress-bar "$SKILL_URL" -o /tmp/skills.tar.gz 2>/dev/null; then
        step "安装47项法律技能到 ~/.clacky/skills/ ..."
        tar -xzf /tmp/skills.tar.gz -C "$HOME/.clacky/"
        rm -f /tmp/skills.tar.gz
        success "47项法律技能安装完成!"
        return 0
    else
        error "技能包下载失败，请检查 BASE_URL"
        return 1
    fi
}

setup_brand() {
    step "配置磐元龙虾品牌..."
    mkdir -p "$HOME/.clacky"
    cat > "$HOME/.clacky/brand.yml" << EOF
product_name: "$BRAND_NAME"
package_name: "$COMMAND_NAME"
homepage_url: "$BASE_URL"
EOF
    success "品牌配置完成"
}

setup_alias() {
    SHELL_RC=""
    case "$SHELL" in
        */zsh)  SHELL_RC="$HOME/.zshrc";;
        *)      SHELL_RC="$HOME/.bashrc";;
    esac

    if ! grep -q "alias $COMMAND_NAME=" "$SHELL_RC" 2>/dev/null; then
        echo "" >> "$SHELL_RC"
        echo "# $BRAND_NAME" >> "$SHELL_RC"
        echo "alias $COMMAND_NAME='openclacky'" >> "$SHELL_RC"
        success "已添加命令别名到 $SHELL_RC"
    fi
}

show_completion() {
    echo ""
    echo -e "${GREEN}==============================================${NC}"
    echo -e "${GREEN}  🦞 ${BRAND_NAME} 安装完成!${NC}"
    echo -e "${GREEN}==============================================${NC}"
    echo ""
    echo -e "  ${YELLOW}启动:${NC}"
    echo -e "    ${WHITE}$COMMAND_NAME${NC}              # 命令行模式"
    echo -e "    ${WHITE}$COMMAND_NAME server${NC}      # Web UI (http://localhost:7070)"
    echo ""
    echo -e "  ${YELLOW}首次使用:${NC}"
    echo -e "    ${WHITE}1.${NC} 输入 ${WHITE}$COMMAND_NAME${NC} 启动"
    echo -e "    ${WHITE}2.${NC} 输入 ${WHITE}/config${NC} 配置 API Key"
    echo -e "    ${WHITE}3.${NC} 输入 ${WHITE}/${NC} 浏览 47 项法律技能"
    echo ""
    echo -e "  ${YELLOW}技能分类:${NC}"
    echo -e "    ${WHITE}合同审查(10) | 法律文书(7) | 企业法务(7)${NC}"
    echo -e "    ${WHITE}诉讼辅助(5) | 法律法规(6) | 个人法律(6)${NC}"
    echo -e "    ${WHITE}通用能力(6) = 47项法律技能${NC}"
    echo -e "${GREEN}==============================================${NC}"
    echo ""
}

main() {
    show_banner
    detect_os

    info "品牌: $BRAND_NAME | 命令: $COMMAND_NAME"
    [ -n "$SKILL_URL" ] && info "技能包: $SKILL_URL" || warn "未设置 BASE_URL，将只安装 OpenClacky 基础版"

    if ! check_ruby; then
        warn "Ruby 未安装或版本过低 (需要 >= 3.1)"
        install_ruby
        if ! check_ruby; then
            error "Ruby 安装失败"
            exit 1
        fi
    fi

    install_openclacky

    if [ -n "$SKILL_URL" ]; then
        install_skills
    fi

    setup_brand
    setup_alias
    show_completion
}

main "$@"
