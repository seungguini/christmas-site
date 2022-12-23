import React from "react";

export default function Lights() {
  return (
    <>
      {/* <ambientLight intensity={0.8} /> */}
      <directionalLight position={[0, 0, 5]} />
    </>
  );
}
