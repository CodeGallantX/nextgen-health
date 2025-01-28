import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Verification from "./pages/verification"

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/verification' element={<Verification />} />
    </Routes>
  )
}

export default App
