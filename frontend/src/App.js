import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { Login } from "./components/Auth/Login"
import { Register } from "./components/Auth/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
