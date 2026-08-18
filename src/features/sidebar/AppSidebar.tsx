import { Sidebar } from "@/components/ui/sidebar"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppSidebar = () => {
  return (
    <Sidebar className="">
      <Header />
      <Content />
      <Footer />
    </Sidebar>
  )
}

export default AppSidebar
