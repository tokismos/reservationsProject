import { Outlet } from "react-router-dom"
import { QueryProvider } from "./providers"

function App() {
  return (
    <QueryProvider>
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </QueryProvider>
  )
}

export default App
