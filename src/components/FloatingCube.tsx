"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useSpring, animated } from '@react-spring/three'

export function FloatingCube() {
  const meshRef = useRef<Mesh>(null!)
  
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 }
  })

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <animated.mesh
      ref={meshRef}
      scale={scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5686F5" />
    </animated.mesh>
  )
}