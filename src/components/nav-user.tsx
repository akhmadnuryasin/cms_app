"use client";

import { useAuth } from "@/hooks/use-auth";
import { LogOut } from "lucide-react";
import { Button } from "./Elements/Button/Index";
import { SidebarMenu } from "@/components/ui/sidebar";

export function NavUser() {
  const { user, logout } = useAuth();

  return (
    <SidebarMenu>
      <div className="flex flex-row items-center justify-between flex-1 gap-5 p-2 text-sm leading-tight text-left border rounded-lg">
        <span className="text-xs uppercase truncate">
          {user?.email || "guest@example.com"}
        </span>
        <Button
          onClick={logout}
          size="medium"
          variant="secondary"
          style={{
            backgroundColor: "transparent",
            color: "#68686E",
            padding: "0",
          }}
        >
          <LogOut />
        </Button>
      </div>
    </SidebarMenu>
  );
}
