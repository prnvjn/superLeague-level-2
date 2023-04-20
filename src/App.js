import "./App.css";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>Super League - Level 2 - Team 16</h1>
        <Login />
        <Dashboard/>
       
    </div>

  );
}

export default App;
