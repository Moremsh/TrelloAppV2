import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/features/sidebar/AppSidebar"
import { Outlet } from "react-router"


const RootLayout = () => {
  return (
    <SidebarProvider   
    style={
    {
      "--sidebar-width": "20rem",
      "--sidebar-width-mobile": "20rem",
    } as React.CSSProperties
  }>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <Outlet/>
      </main>
      
    </SidebarProvider>
    
  )
}

export default RootLayout
