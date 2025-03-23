import { usePlane } from '@react-three/cannon'
import { MeshReflectorMaterial } from '@react-three/drei'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static'
  }))

  return (
    <mesh
      ref={ref}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={15}
        depthScale={1}
        minDepthThreshold={0.85}
        color="#303030"
        metalness={0.6}
        roughness={1}
      />
    </mesh>
  )
}

export default Ground