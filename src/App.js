import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Auth from "./pages/Auth"
import Home from './pages/Home'
import Pets from './pages/Pets'
import PetDetails from './pages/PetDetails'
import Medicines from './pages/Medicines'
//import { Login } from "@mui/icons-material"

export const LoginContext = createContext()

export default function App() {

  const [hasLogin, setLogin] = useState(false);
  
  return (
    <div>
      <LoginContext.Provider value={{'hasLogin': hasLogin, setLogin}}>
        <Navbar/>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Auth" element={<Auth/>}></Route>
              <Route path="/Pets" element={<Pets/>}></Route>
              <Route path="/Pets/:id" element={<PetDetails/>}></Route>
              <Route path="/Medicines" element={<Medicines/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </LoginContext.Provider>
    </div>
  )
}