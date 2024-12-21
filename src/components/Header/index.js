import GameContext from '../../context/GameContext'
import './index.css'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value
      return (
        <div className="header-container">
          <div>
            <h1>
              ROCK
              <br />
              PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="score-container">
            <p>Score</p>
            <p className="val">{score}</p>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)
export default Header
