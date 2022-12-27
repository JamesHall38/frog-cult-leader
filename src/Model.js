import { ContactShadows, OrbitControls, CameraShake, Sparkles } from '@react-three/drei'
import { Frog } from './Frog'

export default function Model({ cameraShakeFrequency }) {

    return (
        <>
            <OrbitControls
                makeDefault
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 1.7}
                maxDistance={3}
            />
            <CameraShake
                maxYaw={0.01}
                maxPitch={0.01}
                maxRoll={0.01}
                yawFrequency={cameraShakeFrequency}
                pitchFrequency={cameraShakeFrequency}
                rollFrequency={cameraShakeFrequency}
                intensity={1}
            />

            <directionalLight position={[1, 2, 3]} />
            <ambientLight intensity={0.5} />

            <Sparkles count={50} scale={5} />

            <group position-y={-1}>
                <Frog />
                <ContactShadows opacity={0.75} scale={10} blur={2.5} far={4} />
            </group>
        </>
    )
}
