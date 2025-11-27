'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShapes() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[-3, 2, -5]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color="#667eea" wireframe />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
                <mesh position={[3, -2, -5]}>
                    <torusGeometry args={[0.6, 0.2, 16, 100]} />
                    <meshStandardMaterial color="#764ba2" wireframe />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
                <mesh position={[0, 3, -8]}>
                    <octahedronGeometry args={[0.7]} />
                    <meshStandardMaterial color="#f093fb" wireframe />
                </mesh>
            </Float>

            <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
                <mesh position={[-4, -3, -6]}>
                    <icosahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#667eea" wireframe />
                </mesh>
            </Float>

            <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.7}>
                <mesh position={[4, 2, -7]}>
                    <sphereGeometry args={[0.4, 16, 16]} />
                    <meshStandardMaterial color="#764ba2" wireframe />
                </mesh>
            </Float>
        </>
    )
}

export default function ThreeDBackground() {
    return (
        <div className="fixed inset-0 -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <FloatingShapes />
            </Canvas>
        </div>
    )
}
