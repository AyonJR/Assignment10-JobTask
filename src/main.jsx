// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Home from "./Home/Home.jsx";
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SnackbarProvider maxSnack={3}> {/* Wrap with SnackbarProvider */}
        <RouterProvider router={router}>
          <App></App>
        </RouterProvider>
      </SnackbarProvider>
    </AuthProvider>
  </StrictMode>
);
