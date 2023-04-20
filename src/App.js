import "./App.css";

import { Login } from "./components/Login";
import {Routes, Route, Link} from 'react-router-dom';
import { Signup } from "./components/Signup";

function App() {
  return (
    // <div className="App">
    //   <h1>Super League - Level 2 - Team 16</h1>
       <div className="App">
        <nav className="navigation">
          
        <ul className="home">
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/signup" >Sign Up</Link></li>
        </ul>

        </nav>
       

        <Routes>

<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

</Routes>
       
       </div>
       
   
  );
}

export default App;
