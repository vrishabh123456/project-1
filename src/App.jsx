import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homes from "./pages/Homes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homes />
    </>
  );
}

export default App;
