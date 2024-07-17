import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@mui/material";

function ThreeScene() {
  const meshRef = useRef();
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  const animate = (time) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.0005;
      meshRef.current.rotation.y = time * 0.001;
    }
  };

  return (
    <Canvas style={{ width: "100%", height: !isMobile ? "580px" : "450px" }}>
      <SceneContent meshRef={meshRef} />
    </Canvas>
  );
}

function SceneContent({ meshRef, isMobile }) {
  const { gl, scene, camera } = useThree();

  const geometry = new THREE.SphereGeometry(!isMobile ? 3.3 : 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
  });
  const mesh = useRef();

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.008;
      mesh.current.rotation.y += 0.008;
    }
  });

  useEffect(() => {
    // Adjust camera aspect ratio to fit fixed height container
    camera.aspect = gl.domElement.clientWidth / 700; // Assuming 300px fixed height
    camera.updateProjectionMatrix();

    // Resize renderer to fit fixed height container
    gl.setSize(gl.domElement.clientWidth, 700);
  }, [gl, camera]);

  return (
    <>
      <primitive object={scene} />
      <mesh ref={mesh} geometry={geometry} material={material} />
    </>
  );
}

export default ThreeScene;
