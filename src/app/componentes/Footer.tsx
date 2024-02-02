'use client'

import { Camera, Computer, Mic, NoCamera, NoComputer, NoMic, Phone } from '@/Icons';
import Container from './Container';
import { useState } from 'react';

const formatTimeData = (timeData: number) => timeData.toString().padStart(2, '0');

function getTime() {
    const date = new Date();
    return formatTimeData(date.getHours()) + ':' + formatTimeData(date.getMinutes());
}

export default function Footer() {
    const time = getTime();

    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    const iconsClass = 'h-10 w-16 text-white p-2 rounded-md cursor-pointer';

    return (
        <div className='fixed items-center bottom-0 bg-black py-2 w-full'>
            <Container>
            <div className='grid grid-cols-3'>
                <div className='flex items-center'>
                <p className='text-xl'>{time}</p>
                </div>
                <div className='flex space-x-6 justify-center'>
                    {
                        isMuted
                            ? <NoMic className={iconsClass+ ' bg-red-500'} onClick={() => setIsMuted(!isMuted)}/>
                            : <Mic className={iconsClass+ ' bg-gray-950'} onClick={() => setIsMuted(!isMuted)}/>
                    }

                    {
                        isCameraOff
                            ? <NoCamera className={iconsClass+ ' bg-red-500'} onClick={() => setIsCameraOff(!isCameraOff)}/>
                            : <Camera className={iconsClass+ ' bg-gray-950'} onClick={() => setIsCameraOff(!isCameraOff)}/>
                    }

                    {
                        isScreenSharing
                            ? <NoComputer className={iconsClass+ ' bg-red-500'} onClick={() => setIsScreenSharing(!isScreenSharing)}/>
                            : <Computer className={iconsClass+ ' bg-gray-950'} onClick={() => setIsScreenSharing(!isScreenSharing)}/>
                    }

                    <Phone className='h-10 w-16 text-white hover:bg-red-500 p-2 bg-primary rounded-md cursor-pointer'/>
                </div>
            </div>
            </Container>
        </div>
    )
}