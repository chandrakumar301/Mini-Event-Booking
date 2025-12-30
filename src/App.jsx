
import { Routes,Route,Link } from "react-router-dom"
import './App.css'
import SignUp from "./SignUp"
import Login from './Login'
import DashBoard from "./DashBoard"
import EventPage from "./EventPage"
import Events from "./Events"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/event" element={<EventPage/>}/>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/eve" element={<Events/>}/>
    </Routes>
  )
}
export default App
