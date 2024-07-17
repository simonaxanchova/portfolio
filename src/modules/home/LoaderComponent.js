// Loader.js
import React, { useEffect, useState } from "react";

export default function LoaderComponent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontFamily: "PPFragment-GlareExtraBold" }}>
        LOADING {progress}%
      </h1>
    </div>
  );
}
