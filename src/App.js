import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import Ledger from "./components/Ledger";
import Content from "./components/Content";
import About from "./components/About";
import Billboard from "./components/Billboard";
import City from "./components/City";
import Loader from "./components/Loader";
import { AboutProvider } from "./context/AboutContext";
import "./styles.css";

function App() {
  const ledger = useRef();
  const scroll = useRef(0);

  return (
    <div className="App">
      <Canvas className="canvas">
        <color attach="background" args={["#11161a"]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={50}>
          <ambientLight intensity={0.02} />
          <pointLight intensity={1} position={[0, 20, 10]} />
          <spotLight
            castShadow
            intensity={1}
            angle={0.3}
            penumbra={1}
            position={[10, 15, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        {/* <Loader /> */}
        <Suspense fallback={<Loader/>}>
          <ScrollControls pages={4}>
            <Scroll>
              <AboutProvider>
                <About />
              </AboutProvider>
              <Billboard />
              <City />
              <Stars radius={500} depth={10} count={5000} factor={10} fade />
            </Scroll>
            <Scroll html>
              <Content />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Ledger ref={ledger} scroll={scroll} />
    </div>
  );
}

export default App;
