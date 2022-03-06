import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";

const vertexShader = glsl`
    varying vec2 vUv;
    uniform float time;

    void main () {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

const fragmentShader = glsl`
    varying vec2 vUv;
    uniform vec3 color;
    uniform float time;
    
    void main () {
      gl_FragColor = vec4(sin(vUv.x + time)*color, 1.0);
    }
  `;

const ShimmerMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.0, 0.0, 0.0)
  },
  vertexShader,
  fragmentShader
);

extend({ ShimmerMaterial });
