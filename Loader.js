import React, { useEffect, useState } from "react";
import loaderEvents from "./src/utils/loaderEvents";

export default function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onShow = () => setLoading(true);
    const onHide = () => setLoading(false);

    loaderEvents.addEventListener("show-loader", onShow);
    loaderEvents.addEventListener("hide-loader", onHide);

    return () => {
      loaderEvents.removeEventListener("show-loader", onShow);
      loaderEvents.removeEventListener("hide-loader", onHide);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ color: "#fff", fontSize: "24px" }}>Loading...</div>
    </div>
  );
}
