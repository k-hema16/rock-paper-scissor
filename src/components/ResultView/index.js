import GameContext from '../../context/GameContext'
import Button from '../StyledComponents'
import './index.css'

const ResultView = () => (
  <GameContext.Consumer>
    {value => {
      const {
        userChoiceValue,
        opponentChoice,
        choicesList,
        won,
        changeView,
      } = value
      const userChoiceObj = choicesList.find(
        item => item.id === userChoiceValue,
      )
      const opponentChoiceObj = choicesList.find(
        item => item.id === opponentChoice,
      )
      const clicked = () => {
        changeView()
      }
      const gameResult = () => {
        if (won === 'user') {
          return 'YOU WON'
        }
        if (won === 'opponent') {
          return 'YOU LOSE'
        }
        if (won === 'tie') {
          return 'IT IS DRAW'
        }
        return 'Result not found'
      }
      return (
        <>
          <div className="row result-bg">
            <div>
              <h2>YOU</h2>
              <img
                src={userChoiceObj.imageUrl}
                alt="your choice"
                className="img"
              />
            </div>
            <div>
              <h2>OPPONENT</h2>
              <img
                src={opponentChoiceObj.imageUrl}
                alt="opponent choice"
                className="img"
              />
            </div>
          </div>
          <p className="res">{gameResult()}</p>
          <Button type="button" onClick={clicked}>
            PLAY AGAIN
          </Button>
        </>
      )
    }}
  </GameContext.Consumer>
)
export default ResultView
