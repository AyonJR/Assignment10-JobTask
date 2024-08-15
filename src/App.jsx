import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
