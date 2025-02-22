'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import { sidebarItems } from "./list/item";

export default function SidebarComponent() {
  return (
      <Sidebar>
        <SidebarHeader className="flex m-5 gap-4 flex-row items-center">
          <Image src={logo} width={30} height={30} alt="logo" />
          <h2 className="text-heading text-2xl">EMS</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="ml-3 p-2">
              <SidebarMenu className="gap-5">
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="text-base">
                      <a href={item.url}>
                        <item.icon />
                        <span className="p-3 text-md">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail/>
      </Sidebar>
  );
}