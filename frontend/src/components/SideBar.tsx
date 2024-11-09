import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Routes from "@/routes";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function SideBar() {
  return (
    <SidebarProvider className="h-screen flex overflow-x-hidden">
      <Sidebar>
        <SidebarHeader className="px-4 py-4 bg-white">
          <div className="flex items-center gap-2">
            <img
              src="/assets/imgs/logo_sem_fundo.png"
              alt="logo"
            />
          </div>
        </SidebarHeader>
        <SidebarContent className="bg-white">
          <div className="flex flex-col gap-2 p-2">
            <a href="/">
              <Button variant="ghost" className="w-full justify-start">
                <img src="/assets/icons/house.svg" alt="home" />
                Página inicial
              </Button>
            </a>

            <a href="/report">
              <Button variant="ghost" className="w-full justify-start">
                <img src="/assets/icons/chart-bar.svg" alt="report" />
                Relatório
              </Button>
            </a>

            <a href="/carbon-credit">
              <Button variant="ghost" className="w-full justify-start">
                <img src="/assets/icons/coins.svg" alt="carbon-credit" />
                Crédito de carbono
              </Button>
            </a>

            <a href="/recomendation">
              <Button variant="ghost" className="w-full justify-start">
                <img src="/assets/icons/coins.svg" alt="recomendation" />
                Recomendações
              </Button>
            </a>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <ScrollArea className="h-full bg-[#EFEFEF]">
          <Routes />
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
