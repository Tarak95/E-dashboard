import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"

function App() {
 

  return (
     <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        xjcvh
      </main>
    </SidebarProvider>
  )
}

export default App
