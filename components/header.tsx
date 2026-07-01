"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();

  // Main navigation items for 磐元龙虾
  const mainNavItems: NavItem[] = [
    { label: "首页", href: "/" },
    { label: "安装指南", href: "/#install" },
    { label: "法律技能", href: "/#skills" },
    { label: "价格", href: "/#pricing" },
    { label: "法讯", href: "/#contact" },
    { label: "常见问题", href: "/#faq" },
  ];

  const navItems = mainNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
