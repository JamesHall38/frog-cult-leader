import { useState, Suspense } from 'react'
import './style.css'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import Interface from './Interface'


export default function App() {
    const [cameraShakeFrequency, setCameraShakeFrequency] = useState(1)
    return (
        <>
            <div className='loading'>Loading...</div>
            <Canvas camera={{ position: [0, 1, 3] }} >
                <Model cameraShakeFrequency={cameraShakeFrequency} />
            </Canvas>
            <Interface setCameraShakeFrequency={setCameraShakeFrequency} />
        </>
        // </Suspense>
    )
}

        // <Suspense fallback={
        //    // } >