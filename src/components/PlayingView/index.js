import GameContext from '../../context/GameContext'
import './index.css'

const PlayingView = () => (
  <GameContext.Consumer>
    {value => {
      const {choicesList, userChoice} = value
      const clicked = id => {
        userChoice(id)
      }
      return (
        <div>
          <div className="row">
            <button
              type="button"
              onClick={() => clicked(choicesList[0].id)}
              data-testid="rockButton"
              className="img-btn"
            >
              <img
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                className="img"
              />
            </button>
            <button
              type="button"
              onClick={() => clicked(choicesList[1].id)}
              data-testid="scissorsButton"
              className="img-btn"
            >
              <img
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                className="img"
              />
            </button>
          </div>
          <button
            type="button"
            onClick={() => clicked(choicesList[2].id)}
            data-testid="paperButton"
            className="img-btn"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="img"
            />
          </button>
        </div>
      )
    }}
  </GameContext.Consumer>
)
export default PlayingView
