import  SidebarComponent  from "@/components/dashboard/Sidebar"

import Navbar from "@/components/header/Navbar"
import { SidebarProvider} from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarComponent />
            <main className="w-full p-4">
                <div>
                    <Navbar />
                </div>
                    {children}
            </main>
        </SidebarProvider>
    )
}