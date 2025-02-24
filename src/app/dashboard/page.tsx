import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Page() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center h-16 gap-2 shrink-0">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            {pathSegments.length > 0 && (
              <Breadcrumb>
                <BreadcrumbList className="flex items-center">
                  {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1;
                    const path = `/${pathSegments
                      .slice(0, index + 1)
                      .join("/")}`;
                    const formattedSegment = segment
                      .replace(/-/g, " ") // Ganti "-" dengan spasi
                      .replace(/\b\w/g, (char) => char.toUpperCase()); // Huruf pertama kapital

                    return (
                      <div key={path} className="flex items-center">
                        {index > 0 && <BreadcrumbSeparator className="mx-2" />}{" "}
                        {/* Tambahkan separator hanya setelah elemen pertama */}
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink
                              href={path}
                              className="text-gray-500"
                            >
                              {formattedSegment}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </div>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          <Outlet />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
