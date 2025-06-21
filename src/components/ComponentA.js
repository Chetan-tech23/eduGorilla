import { useState } from "react";
import { showLoader, hideLoader } from "../utils/loaderEvents";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  const [showB, setShowB] = useState(false);

  const handleShowB = async () => {
    showLoader();
    await new Promise((res) => setTimeout(res, 2000));
    hideLoader();
    setShowB(true);
  };

  return (
    <div>
      <h2>Component A</h2>
      <button onClick={handleShowB}>Show B Component</button>
      {showB && <ComponentB />}
    </div>
  );
}
