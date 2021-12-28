import React, { useEffect } from "react";

import Routes from "./routes";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        navigate("/", { replace: true });
      }
    }
  }, []);
  return <Routes />;
}

export default App;
