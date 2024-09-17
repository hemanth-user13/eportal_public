import React, { useState, useEffect } from "react";
import AllRouter from "./Components/Allroutes/router";
import "./App.css";
import UserId from "./Components/Home/User/UserId";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showWelcome ? (
        <div className="welcome-screen">
          <div className="welcome-text-container">
            <div className="welcome-text fade-in-1">Welcome</div>
            <div className="welcome-text fade-in-2">To</div>
            <div className="welcome-text fade-in-3">E-Portal</div>
          </div>
        </div>
      ) : (
        <>
          <AllRouter />
          <UserId />
        </>
      )}
    </div>
  );
}

export default App;
