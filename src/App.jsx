
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from '../AppRoutes'

function App() {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
