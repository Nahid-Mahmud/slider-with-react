import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>
        <h1 className="text-2xl  h-screen flex items-center justify-center">HEllo WOrld</h1>
      </div>
    </Fragment>
  );
}

export default App;
