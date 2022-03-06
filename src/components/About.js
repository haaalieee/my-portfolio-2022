import * as THREE from "three";
import { Cloud } from "@react-three/drei";
import { useSurprise } from "../context/AboutContext";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Bug from "./Bug";
import Tree from "./Tree";
import Pointer from "./Pointer";
import Chat from "./Chat";

export default function About() {
  const isVisible = useSurprise();
  const cloud1 = useRef();
  const cloud2 = useRef();
  const cloud3 = useRef();
  
  const [hovered1, setHovered1] = useState(false);

  useFrame((state, delta) => {
    if (isVisible) {
      cloud1.current.position.z = THREE.MathUtils.damp(
        cloud1.current.position.z,
        -60,
        0.5,
        delta
      );
      cloud2.current.position.z = THREE.MathUtils.damp(
        cloud2.current.position.z,
        -60,
        0.5,
        delta
      );
      cloud3.current.position.z = THREE.MathUtils.damp(
        cloud3.current.position.z,
        -60,
        0.5,
        delta
      );
    } else {
      cloud1.current.position.z = THREE.MathUtils.damp(
        0,
        cloud1.current.position.z,
        0,
        delta
      );
      cloud2.current.position.z = THREE.MathUtils.damp(
        0,
        cloud2.current.position.z,
        0,
        delta
      );
      cloud3.current.position.z = THREE.MathUtils.damp(
        0,
        cloud3.current.position.z,
        0,
        delta
      );
    }
    
  });

  return (
    <>
      <Chat/>
      <Bug scale={2} position={[5, 7, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Pointer position={[0, 0, 0]} />
      <Tree position={[0, -15, 3]} scale={2.8} rotation={[0, Math.PI / 2, 0]} />
      <mesh ref={cloud1} position={[3, -2, -5]}>
        <Cloud
          speed={0.2}
          opacity={1}
          onPointerOver={() => setHovered1(true)}
          onPointerOut={() => setHovered1(false)}
        />
      </mesh>
      <mesh ref={cloud2} position={[5, 0, -2]}>
        <Cloud speed={0.2} opacity={0.75} />
      </mesh>
      <mesh ref={cloud3} position={[-2, -1, -8]}>
        <Cloud speed={0.2} opacity={0.5} />
      </mesh>
    </>
  );
}
