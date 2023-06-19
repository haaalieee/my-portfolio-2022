import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import About from "./components/About";
import Billboard from "./components/Billboard";
import City from "./components/City";
import Content from "./components/Content";
import Ledger from "./components/Ledger";
import Loader from "./components/Loader";
import MobileContent from "./components/MobileContent";
import { AboutProvider } from "./context/AboutContext";
import "./styles.css";

function App() {
  const ledger = useRef();
  const scroll = useRef(0);

  return (
    <div className="App">
      <BrowserView>
        <Canvas className="canvas" shadows>
          <color attach="background" args={["#12161a"]} /> {/** #c5dbea */}
          <OrbitControls enablePan={false} enableZoom={false} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={50}>
            <ambientLight intensity={1} />
          </PerspectiveCamera>
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
      </BrowserView>
      <MobileView>
        <MobileContent />
      </MobileView>
    </div>
  );
}

export default App;
