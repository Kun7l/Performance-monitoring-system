import Sidebar from "./components/SideBar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      
      <AppRoutes/>
      <ToastContainer />
    </>
  )
}

export default App
