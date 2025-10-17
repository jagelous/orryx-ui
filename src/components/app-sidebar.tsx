"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const mainNavigationItems: NavigationItem[] = [
  {
    id: "copy-dashboard",
    label: "Copy Dashboard",
    icon: "copy_dashboard",
    href: "/copy-dashboard",
  },
  {
    id: "fund-wallet",
    label: "Fund Wallet (USDT)",
    icon: "fund_wallet",
    href: "/fund-wallet",
  },
  {
    id: "withdraw-profits",
    label: "Withdraw Profits",
    icon: "withdraw_profits",
    href: "/withdraw-profits",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "analytics",
    href: "/analytics",
  },
  {
    id: "my-strategy",
    label: "My Strategy",
    icon: "my_strategy",
    href: "/my-strategy",
  },
];

const copyTradingItems: NavigationItem[] = [
  {
    id: "master-trades",
    label: "Master Trades",
    icon: "master_trades",
    href: "/master-trades",
  },
  {
    id: "follower-pnl",
    label: "Follower PnL",
    icon: "follower_pnl",
    href: "/follower-pnl",
  },
  {
    id: "top-traders",
    label: "Top Traders",
    icon: "top_traders",
    href: "/top-traders",
  },
];

const getIconSrc = (iconName: string, isActive: boolean = false) => {
  const state = isActive ? "live" : "dead";
  return `/icons/${state}_${iconName}.svg`;
};

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar className="border-none p-4">
      <SidebarHeader className="">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="Orryx Logo"
            width={50}
            height={36}
            className="w-[50px] h-[36px]"
          />
          <p className="text-[24px] font-bold text-white">Orryx</p>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup className="pt-9">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {mainNavigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <SidebarMenuItem className="" key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      className={`h-full w-[240px] rounded-[40px] text-[16px] p-1 ${
                        active
                          ? "bg-[#2D2D2D] text-white"
                          : "hover:bg-[#2D2D2D] bg-[#242424]"
                      }`}
                    >
                      <Link href={item.href} className="flex gap-3 p-1">
                        <Image
                          src={getIconSrc(item.icon, active)}
                          alt={item.label}
                          width={44}
                          height={44}
                          className="w-[44px] h-[44px]"
                        />
                        <span
                          className={active ? "font-medium" : "font-normal"}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Copy Trading Bots Section */}
        <SidebarGroup className="pt-6 pb-20">
          <SidebarGroupLabel className="text-[#8D8D8D] text-[14px] font-medium pb-3">
            Copy Trading Bots
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {copyTradingItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      className={`h-full w-[240px] rounded-[40px] text-[16px] p-1 ${
                        active
                          ? "bg-[#2D2D2D] text-white"
                          : "hover:bg-[#2D2D2D] bg-[#242424]"
                      }`}
                    >
                      <Link href={item.href}>
                        <Image
                          src={getIconSrc(item.icon, active)}
                          alt={item.label}
                          width={44}
                          height={44}
                          className="w-[44px] h-[44px]"
                        />
                        <span
                          className={active ? "font-medium" : "font-normal"}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Follower Statistics Section */}
        <SidebarGroup className="bg-[#242424] rounded-[10px] text-[#8D8D8D] p-4 mb-16 w-[240px]">
          <SidebarGroupLabel className="text-[#8D8D8D] text-[14px] font-medium p-0 pb-5">
            Follower Statistics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col gap-6">
              <div className="text-sm">
                <span className="">Total Followers: </span>
                <span className="font-semibold text-white">1245</span>
              </div>
              <div className="text-sm">
                <span className="">Total Copied Trades: </span>
                <span className="font-semibold text-white">67.4%</span>
              </div>
              <div className="text-sm">
                <span className="">Average Win Rate: </span>
                <span className="font-semibold text-white">50:50</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-4 px-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-full w-[240px] rounded-[40px] text-[16px] p-1 hover:bg-[#2D2D2D] bg-[#242424]">
              <Image
                src="/icons/logout.svg"
                alt="Log Out"
                width={44}
                height={44}
                className="w-[44px] h-[44px]"
              />
              <span className="font-normal">Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
