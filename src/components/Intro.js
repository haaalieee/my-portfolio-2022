import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../shaders/PointShaderMaterial";

let number =30;

const PointerLayer = (props) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.playhead = clock.getElapsedTime()*0.1;
  });
  
  return (
    <mesh
      position={[0, props.position, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry args={[1, 1]} />
      <pointShaderMaterial
        black={props.black}
        level={props.level}
        extensions={{
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        }}
        side={THREE.DoubleSide}
        ref={ref}
        color='#cd5851'
      />
    </mesh>
  );
};

const Intro = () => {
  return (
    <group position={[0, -0.5, 0]}>
      {[...new Array(number)].map((i, index) => {
        const level = (index+1) / number;
        return (
          <>
            <PointerLayer
              key={i}
              number={number}
              index={index}
              level={level}
              black={1}
              position={index === number ? level - 1 / number : level}
            />
            <PointerLayer
              key={i}
              number={number}
              index={index}
              level={level}
              black={0}
              position={index === number ? level - 1 / number : level - 0.005}
            />
          </>
        );
      })}
    </group>
  );
};

export default Intro;
