import {
  useGLTF,
  Text,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/shards.glb");

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh data={mesh} key={i} />;
      })}
      <Font />
    </group>
  );
}

function Font() {
  const src = "/fonts/PPNeueMontreal-Bold.otf";
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };
  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        403
      </Text>
      <Text
        font={src}
        position={[0, -0.15, -0.1]}
        fontSize={0.03}
        {...textOption}
      >
        You are not authorized to view this page.
      </Text>
    </group>
  );
}

function Mesh({ data }) {
  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial roughness={0} transmission={0.99} />
      </mesh>
    </Float>
  );
}
