import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Grid } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Character from './Character'
import Ground from './Ground'
import { useGameStore } from '../store/GameStore'
import { Group } from 'three'

const Scene = () => {
  const sceneRef = useRef<Group>(null)

  useFrame(() => {
    // Update game logic here
  })

  return (
    <group ref={sceneRef}>
      {/* Lighting */}
      <ambientLight intensity={1.0} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Environment */}
      <Environment preset="sunset" />
      <Grid
        infiniteGrid
        cellSize={1}
        sectionSize={10}
        fadeDistance={50}
        fadeStrength={1}
      />

      {/* Game Elements */}
      <Physics>
        <Character />
        <Ground />
      </Physics>
    </group>
  )
}

export default Scene