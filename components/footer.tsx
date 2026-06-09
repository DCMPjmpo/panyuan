"use client";

import { Logo } from "./logo";
import Link from "next/link";

const footerLinks = [
  {
    title: "产品",
    links: [
      { label: "首页", href: "/" },
      { label: "安装指南", href: "/#install" },
      { label: "法律技能", href: "/#skills" },
      { label: "价格", href: "/#pricing" },
    ],
  },
  {
    title: "联系",
    links: [
      { label: "磐元法讯", href: "/#contact" },
      { label: "常见问题", href: "/#faq" },
    ],
  },
  {
    title: "法律",
    links: [
      { label: "隐私政策", href: "/privacy" },
      { label: "服务条款", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              磐元龙虾 — 基于 OpenClacky 平台的专业 AI 法律助手。搭载 47 项法律技能，一键安装即用。
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">{group.title}</h3>
                <nav className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
