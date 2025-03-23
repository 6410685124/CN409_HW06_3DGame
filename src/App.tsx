import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './components/Scene'
import { GameProvider } from './store/GameStore'
import UI from './components/UI'

const App = () => {
  return (
    <GameProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas
          shadows
          camera={{
            position: [0, 5, 10],
            fov: 75
          }}
        >
          <Stats />
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <UI />
      </div>
    </GameProvider>
  )
}

export default App