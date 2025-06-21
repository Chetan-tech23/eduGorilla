import { useState } from "react";
import { showLoader, hideLoader } from "../utils/loaderEvents";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  const [showC, setShowC] = useState(false);

  const handleShowC = async () => {
    showLoader();
    await new Promise((res) => setTimeout(res, 2000));
    hideLoader();
    setShowC(true);
  };

  return (
    <div>
      <h2>Component B</h2>
      <button onClick={handleShowC}>Show C Component</button>
      {showC && <ComponentC />}
    </div>
  );
}
