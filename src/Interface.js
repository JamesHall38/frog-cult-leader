import { useState } from 'react'
import './style.css'

export default function Interface({ setCameraShakeFrequency }) {
    const [frogIsProud, setFrogIsProud] = useState(false)
    return (
        <div className='interface' >
            {frogIsProud ?
                <div className='congrats'>
                    Frog cult leader is proud of you.
                </div>
                :
                <div className='join'
                    onPointerEnter={() => setCameraShakeFrequency(10)}
                    onPointerLeave={() => setCameraShakeFrequency(1)}
                    onClick={() => {
                        setCameraShakeFrequency(1)
                        setFrogIsProud(true)
                    }}
                >
                    Join the cult<br />( very dangerous )
                </div>
            }
        </div >
    )
}
