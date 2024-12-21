import {Component} from 'react'
import Header from './components/Header'
import GameContext from './context/GameContext'
import PlayingView from './components/PlayingView'
import ResultView from './components/ResultView'
import ReactPopup from './components/ReactPopup/popup'
import './App.css'

class App extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    playerView: true,
    won: '',
  }

  choicesList = [
    {
      id: 'ROCK',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    },
    {
      id: 'SCISSORS',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    },
    {
      id: 'PAPER',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    },
  ]

  changeScore = () => {
    const {won} = this.state
    if (won === 'user') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (won === 'opponent') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  userChoice = id => {
    const opponentChoice = Math.floor(Math.random() * 3)
    this.setState(
      {
        userChoice: id,
        opponentChoice: this.choicesList[opponentChoice].id,
        playerView: false,
      },
      this.declareResult,
    )
  }

  declareResult = () => {
    const {userChoice, opponentChoice} = this.state
    let res = ''
    if (userChoice === opponentChoice) {
      res = 'tie'
    } else if (userChoice === 'ROCK' && opponentChoice === 'PAPER') {
      res = 'opponent'
    } else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      res = 'user'
    } else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      res = 'opponent'
    } else if (userChoice === 'PAPER' && opponentChoice === 'ROCK') {
      res = 'user'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      res = 'user'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      res = 'opponent'
    }
    this.setState({won: res}, this.changeScore)
  }

  changeView = () => {
    this.setState({playerView: true})
  }

  render() {
    const {score, opponentChoice, playerView, userChoice, won} = this.state
    return (
      <GameContext.Provider
        value={{
          score,
          choicesList: this.choicesList,
          userChoice: this.userChoice,
          opponentChoice,
          userChoiceValue: userChoice,
          won,
          changeView: this.changeView,
        }}
      >
        <div className="bg">
          <Header />
          {playerView ? <PlayingView /> : <ResultView />}
          <ReactPopup />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
