import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <SidebarProvider className="p-12">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex h-screen">
            <div className="flex-1 p-4">
              <div className="mb-4">
                <SidebarTrigger />
              </div>
              {children}
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
