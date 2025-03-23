import { useEffect, useState } from 'react'

const KEYS = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'left',
  KeyD: 'right',
  Space: 'jump',
  ShiftLeft: 'run'
} as const

type KeyState = {
  [K in (typeof KEYS)[keyof typeof KEYS]]: boolean
}

export const useKeyboard = () => {
  const [movement, setMovement] = useState<KeyState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.code as keyof typeof KEYS
      if (key in KEYS) {
        setMovement((m) => ({ ...m, [KEYS[key]]: true }))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.code as keyof typeof KEYS
      if (key in KEYS) {
        setMovement((m) => ({ ...m, [KEYS[key]]: false }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return movement
}