import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="mt-40">
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
