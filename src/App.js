import { useState } from "react";
import ComponentA from "./components/ComponentA";
import Loader from "../Loader";
import { showLoader, hideLoader } from "./utils/loaderEvents";

function App() {
  const [showA, setShowA] = useState(false);

  const handleClick = async () => {
    showLoader();
    await new Promise((res) => setTimeout(res, 2000));
    hideLoader();
    setShowA(true);
  };

  return (
    <div>
      <Loader />
      <button onClick={handleClick}>Show A Component</button>
      {showA && <ComponentA />}
    </div>
  );
}

export default App;
