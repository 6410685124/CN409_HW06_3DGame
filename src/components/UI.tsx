import { useGameStore } from '../store/GameStore'

const UI = () => {
  const { score, health } = useGameStore()

  return (
    <div className="ui-overlay">
      <div className="game-ui">
        <div>Health: {health}</div>
        <div>Score: {score}</div>
        <div className="controls-info">
          <h3>Controls:</h3>
          <p>WASD - Move</p>
          <p>Space - Jump</p>
          <p>Shift - Run</p>
          <p>Mouse - Look around</p>
        </div>
      </div>
    </div>
  )
}

export default UI