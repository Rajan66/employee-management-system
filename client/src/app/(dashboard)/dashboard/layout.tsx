import SidebarComponent from "@/components/dashboard/Sidebar"
// import Footer from "@/components/footer/Footer"

import Navbar from "@/components/header/Navbar"
import { SidebarProvider } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarComponent />
            <main className="w-full">
                <div>
                    <Navbar />
                </div>
                <div className="w-full p-4">
                    {children}
                </div>
            {/* <Footer /> */}
            </main>
        </SidebarProvider>
    )
}