import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0d0d0d]">
      <SidebarProvider>
        <AppSidebar />
        <div className="pl-16 flex w-full flex-col">
          <Header />
          <main className=" p-4 overflow-auto">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
