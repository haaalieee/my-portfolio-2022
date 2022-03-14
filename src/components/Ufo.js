/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: yanix (https://sketchfab.com/yanix)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ufo-2d55eec1da344c9a9943abafbd07f0f9
title: Ufo
*/

import { Vector3 } from "three";
import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  SpotLight,
  useDepthBuffer,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    light.current.target.position.lerp(
      vec.set(
        (-state.mouse.x * viewport.width) / 2,
        (-state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );

    light.current.target.updateMatrixWorld();
  
  });
  return (
    <SpotLight
      ref={light}
      penumbra={1}
      distance={12}
      angle={0.5}
      attenuation={5}
      anglePower={4}
      intensity={4}
      {...props}
    />
  );
}

export default function Model({ ...props }) {
  const { scene, animations } = useGLTF("/alien.gltf");
  const { ref, actions } = useAnimations(animations);
  const depthBuffer = useDepthBuffer({ frames: 1 });

  useEffect(() => {
    actions["spin"].play();
  }, [actions]);

  useFrame(({clock}) => {
    ref.current.position.z =  10 + Math.sin(clock.getElapsedTime()*5)/4;
  });

  return (
    <group>
      <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[4.75, -15, 9]} />
      <primitive position={[5, -10, 10]} rotation={[1.5,0,0]} object={scene} ref={ref} scale={5} {...props} />
    </group>
  );
}

useGLTF.preload("/ufo.gltf");
