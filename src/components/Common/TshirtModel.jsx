import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader, Color } from "three";

function Tshirt({ image, color }) {
  const { scene } = useGLTF("/models/Tshirt.glb");
  const shirtMaterial = useRef();

  // Apply image design when uploaded
  useEffect(() => {
    if (image) {
      const texture = new TextureLoader().load(image);
      if (shirtMaterial.current) {
        shirtMaterial.current.map = texture;
        shirtMaterial.current.needsUpdate = true;
      }
    } else {
      // Ensure the shirt is plain if no design is uploaded
      if (shirtMaterial.current) {
        shirtMaterial.current.map = null; // Remove texture (plain)
        shirtMaterial.current.needsUpdate = true;
      }
    }
  }, [image]);

  // Apply color change
  useEffect(() => {
    if (shirtMaterial.current) {
      shirtMaterial.current.color.set(color); // Apply chosen color
      shirtMaterial.current.needsUpdate = true;
    }
  }, [color]);

  // Ensure that initial model is plain (without any texture)
  useEffect(() => {
    if (shirtMaterial.current) {
      shirtMaterial.current.map = null; // Remove any texture to ensure plain look
      shirtMaterial.current.color.set(color); // Apply default color
      shirtMaterial.current.needsUpdate = true;
    }
  }, []);

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[-0.5, -1.2, 0]} // ✅ Geser ke kiri sedikit
    >
      {/* Ensure you're applying the texture and color to the material of the shirt */}
      {scene.children.map((child) => {
        if (child.material) {
          shirtMaterial.current = child.material;
        }
        return null;
      })}
    </primitive>
  );
}

export default function TshirtModel({ image, color }) {
  return (
    <Canvas
      camera={{ position: [0, 6, 8], fov: 50 }}
      style={{
        width: "100%",
        height: "500px",
        minHeight: "500px",
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      <Suspense fallback={null}>
        <Tshirt image={image} color={color} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
