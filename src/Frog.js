import { useGLTF } from "@react-three/drei"

export function Frog(props) {
    const { nodes, materials } = useGLTF("/frog.glb")
    return (
        <group {...props} dispose={null} rotation-y={Math.PI}>
            <group position={[0, 0.2, 0]}>
                <mesh geometry={nodes.Circle.geometry} material={materials.Red} />
                <mesh geometry={nodes.Circle_1.geometry} material={materials.White} />
                <mesh geometry={nodes.Circle_2.geometry} material={materials.Outline} />
            </group>
            <group position={[0, 0.2, 0]}>
                <mesh geometry={nodes.Cube002.geometry} material={materials.Grey} />
                <mesh geometry={nodes.Cube002_1.geometry} material={materials.White} />
                <mesh geometry={nodes.Cube002_2.geometry} material={materials.Black} />
                <mesh geometry={nodes.Cube002_3.geometry} material={materials.Red} />
                <mesh
                    geometry={nodes.Cube002_4.geometry}
                    material={materials.Outline}
                />
            </group>
            <group position={[-0.24, 0.08, 0]} scale={[0.02, 0.08, 0.02]}>
                <mesh geometry={nodes.Cone_1.geometry} material={materials.Grey} />
                <mesh geometry={nodes.Cone_2.geometry} material={materials.Outline} />
            </group>
            <group
                position={[0, 1.93, -0.05]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.16, 0.16, 0.19]}
            >
                <mesh geometry={nodes.Plane002.geometry} material={materials.White} />
                <mesh
                    geometry={nodes.Plane002_1.geometry}
                    material={materials.Outline}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/frog.glb");