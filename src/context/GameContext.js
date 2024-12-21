import React from 'react'

const GameContext = React.createContext({
  score: 0,
  choicesList: [],
  userChoice: '',
  oponentChoice: '',
  userChoiceValue: '',
  won: '',
  changeView: '',
})
export default GameContext
