import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import DashBoard from "./pages/DashBoard"
import { useUser } from "./context/userContext";

function App() {

  const {user} = useUser();

  return (
    <>
     <Routes>
      <Route path="/" element={user ? <Navigate to="/Dashboard" /> : <LandingPage />} />
      <Route path="/Login" element={!user ? <Login /> : <Navigate to="/Dashboard" />} />
      <Route path="/Dashboard" element={user ? <DashBoard /> : <Navigate to="/Login" />} />
     </Routes>
    </>
  )
}

export default App
