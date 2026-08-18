import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Checkbox } from "@base-ui/react"
import { Check, ChevronDown } from "lucide-react"
const Header = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          Task Manager
          <Check/>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}

export default Header
