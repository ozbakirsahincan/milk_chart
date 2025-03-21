import { useState } from "react";

import Navbar from "./components/Navbar";
import Chart from "./components/Chart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Chart />
    </div>
  );
}

export default App;
