import React from 'react'
import teste from './img/player_initial.png'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children  }) => {

  // Estado para selecionar as abas do jogo
  const [tab, setTab] = React.useState('battle')

  const player = [teste]



  return (
    <GlobalContext.Provider value={{ tab, setTab, player }}>{ children }</GlobalContext.Provider>
  )
}
