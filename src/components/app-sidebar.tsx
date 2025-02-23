import * as React from "react";
import {
  BookOpen,
  ChartCandlestick,
  ClipboardMinus,
  Command,
  CreditCard,
  Database,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Manajemen Pengguna",
      url: "#",
      icon: UsersRound,
      isActive: true,
      items: [
        {
          title: "Super Admin & Admin",
          url: "/dashboard/users_admin",
        },
        {
          title: "Pengguna & Dokter",
          url: "/dashboard/users_doctor",
        },
      ],
    },
    {
      title: "Manajemen Dokter",
      url: "#",
      icon: ClipboardMinus,
      items: [
        {
          title: "Jadwal Dokter",
          url: "/dashboard/schedule",
        },
      ],
    },
    {
      title: "Reservasi",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Daftar Reservasi",
          url: "/dashboard/reservations",
        },
        {
          title: "Riwayat Reservasi",
          url: "/dashboard/reservations_history",
        },
      ],
    },
    {
      title: "Master Data",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Fasilitas Kesehatan",
          url: "/dashboard/health_facilities",
        },
        {
          title: "Spesialisasi Dokter",
          url: "/dashboard/specializations",
        },
        {
          title: "Jenis Layanan Kesehatan",
          url: "/dashboard/health_services",
        },
      ],
    },
    {
      title: "Pembayaran",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Transaksi Pembayaran",
          url: "/dashboard/payment_transactions",
        },
        {
          title: "Metode Pembayaran",
          url: "/dashboard/payment_methods",
        },
      ],
    },
    {
      title: "Laporan & Analitik",
      url: "#",
      icon: ChartCandlestick,
      items: [
        {
          title: "Laporan Pengguna",
          url: "/dashboard/user_report",
        },
        {
          title: "Laporan Reservasi",
          url: "/dashboard/reservation_report",
        },
        {
          title: "Laporan Pembayaran",
          url: "/dashboard/payment_report",
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Pengaturan Sistem",
          url: "/dashboard/system_settings",
        },
        {
          title: "Hak Akses & Role",
          url: "/dashboard/access_rights_and_controls",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-sm leading-tight text-left">
                  <span className="font-semibold truncate">MEDPOINT CMS</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
