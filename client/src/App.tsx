import { QueryProvider } from "./providers"
import { Reservations } from "./screens/Reservations"

function App() {
  return (
    <QueryProvider>
      <div className="w-screen h-screen">
        <Reservations />
      </div>
    </QueryProvider>
  )
}

export default App
