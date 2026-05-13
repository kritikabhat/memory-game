export default function Header({ score, bestScore }) {

  return (
    <>
    <div className="header">
      <h1>Pokemon Memory Game</h1>
    </div>
    <div className="scores">
      <p>Score: <span>{score}</span></p>
      <p>Best Score: <span>{bestScore}</span></p>
    </div>
    </>
  )
}