import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Verification from "./pages/verification"
import ForgotPassword from "./pages/forgot-password"
import AccountSetup from "./pages/AccountSetup"
import Dashboard from "./pages/dashboard"
import Search from "./pages/search"
import Appointment from "./pages/Appointment"
import Doctor from "./pages/doctor"

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/verification' element={<Verification />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/account-setup' element={<AccountSetup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/doctor' element={<Doctor />} />
    </Routes>
  )
}

export default App
