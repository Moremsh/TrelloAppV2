import { useTheme } from "@/app/useTheme"
import { SidebarFooter } from "@/components/ui/sidebar"
import { Toggle } from "@/components/ui/toggle"
import { Moon, Sun } from "lucide-react"

const Footer = () => {
  const {theme , toggleTheme} = useTheme() 
  return (
    <SidebarFooter>
      <Toggle size="sm" onClick={toggleTheme} variant="outline">
        {theme === 'dark' ? <Sun/> : <Moon />}
        {theme === 'dark' ? "Light Mode" : "Dark Mode"}
      </Toggle>
    </SidebarFooter>
  )
}

export default Footer
