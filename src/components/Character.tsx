import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import { useKeyboard } from '../hooks/useKeyboard'
import { Mesh } from 'three'

const MOVEMENT_SPEED = 5
const RUNNING_SPEED = 8
const JUMP_FORCE = 5

const Character = () => {
  const [ref, api] = useBox<Mesh>(() => ({
    mass: 1,
    position: [0, 1, 0],
    args: [1, 2, 1],
    type: 'Dynamic'
  }))

  const velocity = useRef([0, 0, 0])
  const { forward, backward, left, right, jump, run } = useKeyboard()

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v))
  }, [])

  useFrame((state) => {
    const speed = run ? RUNNING_SPEED : MOVEMENT_SPEED
    const direction = [0, 0, 0]

    if (forward) direction[2] = -speed
    if (backward) direction[2] = speed
    if (left) direction[0] = -speed
    if (right) direction[0] = speed

    api.velocity.set(direction[0], velocity.current[1], direction[2])

    if (jump && Math.abs(velocity.current[1]) < 0.05) {
      api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2])
    }
  })

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default Character