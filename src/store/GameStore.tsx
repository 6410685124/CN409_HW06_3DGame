import { create } from 'zustand'

type GameState = {
  score: number
  health: number
  setScore: (score: number) => void
  setHealth: (health: number) => void
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  health: 100,
  setScore: (score) => set({ score }),
  setHealth: (health) => set({ health })
}))

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}