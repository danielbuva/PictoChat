import { OrbitControls } from "@react-three/drei/core";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Console from "./components/Console";

function App() {
  return (
    <Canvas
      camera={{
        fov: 45,
        position: [0, 60, 70],
      }}
    >
      <OrbitControls makeDefault />
      <Console />
    </Canvas>
  );
}

export default App;
