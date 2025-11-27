'use client'

import dynamic from 'next/dynamic'

// Dynamically import 3D components to avoid SSR issues
const ThreeDBackground = dynamic(() => import('@/components/3d-background'), {
    ssr: false,
})

const ParticleField = dynamic(() => import('@/components/particle-field'), {
    ssr: false,
})

export default function ThreeDWrapper() {
    return (
        <>
            <ThreeDBackground />
            <ParticleField />
        </>
    )
}
