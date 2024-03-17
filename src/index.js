import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./pages/Body";
import SplashScreen from "./components/SplashScreen.js";
import RegisterPage from "./pages/Register.js";
import LogInPage from "./pages/Login.js";

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const hasShownSplashScreen = localStorage.getItem("hasShownSplashScreen");
    if (hasShownSplashScreen) {
      setShowSplashScreen(false);
    } else {
      localStorage.setItem("hasShownSplashScreen", true);
    }
  }, []);

  return (
    <div className="app text-[#CACACA]">
      {showSplashScreen ? (
        <SplashScreen setSplashScreen={setShowSplashScreen} />
      ) : (
        <>
          {/* <Header /> */}
          <Outlet />
        </>
      )}
    </div>
  );
};

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LogInPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Routes} />);
