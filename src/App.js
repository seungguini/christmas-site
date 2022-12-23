import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import { ChristmasTree } from "./components/ChristmasTree";
import {
  Backdrop,
  Center,
  OrbitControls,
  Sphere,
  Stage,
} from "@react-three/drei";
import Lights from "./components/Lights";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 7], fov: 45, makeDefault: true }}
    >
      <Stage
        adjustCamera={1.3}
        intensity={0.5}
        // shadows={{
        //   type: "accumulative",
        //   color: "skyblue",
        //   colorBlend: 2,
        //   opacity: 2,
        // }}
        environment="city"
      >
        <ChristmasTree />

        {/* <Lights /> */}
        {/* <Sphere /> */}
      </Stage>
      <Backdrop
        receiveShadow
        scale={[20, 5, 5]}
        floor={1}
        position={[0, -1.3, -2]}
      >
        <meshPhysicalMaterial roughness={1} color="#737380" />
      </Backdrop>
      {/* <OrbitControls makeDefault /> */}
      <OrbitControls />
    </Canvas>
  );
}

export default App;
