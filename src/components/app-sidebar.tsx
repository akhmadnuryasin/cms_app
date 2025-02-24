import * as React from "react";
import {
  BookOpen,
  ChartCandlestick,
  ClipboardMinus,
  Command,
  CreditCard,
  Database,
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
          title: "Super Admin",
          url: "/dashboard/manajemen-pengguna/super-admin",
        },
        {
          title: "Admin",
          url: "/dashboard/manajemen-pengguna/admin",
        },
        {
          title: "Dokter",
          url: "/dashboard/manajemen-pengguna/dokter",
        },
        {
          title: "User",
          url: "/dashboard/manajemen-pengguna/user",
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
          url: "/dashboard/managemen-dokter/jadwal-dokter",
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
          url: "/dashboard/reservasi/daftar-reservasi",
        },
        {
          title: "Riwayat Reservasi",
          url: "/dashboard/reservasi/riwayat-reservasi",
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
          url: "/dashboard/master-data/fasilitas-kesehatan",
        },
        {
          title: "Spesialisasi Dokter",
          url: "/dashboard/master-data/spesialisasi-dokter",
        },
        {
          title: "Jenis Layanan Kesehatan",
          url: "/dashboard/master-data/jenis-layanan-kesehatan",
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
          url: "/dashboard/pembayaran/transaksi-pembayaran",
        },
        {
          title: "Metode Pembayaran",
          url: "/dashboard/pembayaran/metode-pembayaran",
        },
      ],
    },
    {
      title: "Laporan",
      url: "#",
      icon: ChartCandlestick,
      items: [
        {
          title: "Laporan Pengguna",
          url: "/dashboard/laporan/laporan-pengguna",
        },
        {
          title: "Laporan Reservasi",
          url: "/dashboard/laporan/laporan-reservasi",
        },
        {
          title: "Laporan Pembayaran",
          url: "/dashboard/laporan/laporan-pembayaran",
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
          url: "/dashboard/pengaturan/pengaturan-sistem",
        },
        {
          title: "Hak Akses & Role",
          url: "/dashboard/pengaturan/hak-akses",
        },
      ],
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
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
