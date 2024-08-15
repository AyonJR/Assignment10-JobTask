import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div>
      <div className="w-full h-12 bg-customPurple hidden lg:block">
        <div className="flex gap-5 w-full">
          <div>
            <div className="w-full mt-2 flex items-center gap-2">
              <CiPhone className="h-8 w-8 font-bold text-white ml-5"></CiPhone>
              <h2 className="text-white custom-font font-light text-xl">+ 01415896129</h2>
            </div>
           
          </div>
          <div>
          <div className="w-full mt-2 flex items-center gap-2">
              <MdOutlineMail className="h-8 w-8 text-white ml-5"></MdOutlineMail>
              <h2 className="text-white custom-font font-light text-xl"> grippable@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav className="relative">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <h2 className="custom-font text-3xl text-customPurple font-medium">
              GRIPPABLE
            </h2>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-customPurple hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 custom-font md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex gap-4 items-center flex-col md:flex-row md:mx-6">
              <Link to={"/"}>
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                  Home
                </a>
              </Link>
             
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-customPurple hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                 
                  <Link to={"/login"}>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                      <VscAccount></VscAccount>
                    </a>
                  </Link>
                </>
              )}
            </div>

            
          </div>
        </div>
      </nav>
    </div>
  );
}
