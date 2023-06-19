/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: TigerNDV (https://sketchfab.com/TigerNDV)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/583211a5935449ab92179aed53b2f4f2
title: Mike the Bird || all animations
*/
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";
import { useSurprise } from "../context/AboutContext";

export default function Model({ ...props }) {
  const { scene, animations } = useGLTF("/bug.gltf");
  const { ref, actions } = useAnimations(animations);
  const bugSurprise = useSurprise();
  const bugClock = new THREE.Clock();

  useEffect(() => {
    actions["SMALL BUGG IDLE"].play();
  }, [actions]);

  useFrame(({ clock, mouse }) => {
    // ref.current.position.z = -Math.sin(clock.getElapsedTime() / 2) * 8;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      Math.cos(bugClock.getElapsedTime() / 2) * 2,
      0.05
    );

    if (bugSurprise) {
      ref.current.position.z = THREE.MathUtils.damp(
        0,
        ref.current.position.z,
        0,
        100
      );
      bugClock.start();
    } else {
      ref.current.position.z = -Math.sin(clock.getElapsedTime() / 2) * 3;
    }
  });

  return <primitive object={scene} {...props} ref={ref} />;
}

useGLTF.preload("/bug.gltf");
