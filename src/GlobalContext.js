import React from 'react'
import dataPlayer from './player';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  // Estado para selecionar as abas do jogo
  const [tab, setTab] = React.useState('battle')
  const [player, setPlayer] = React.useState(dataPlayer);

  return (
    <GlobalContext.Provider value={{ tab, setTab, player, setPlayer}}>{ children }</GlobalContext.Provider>
  )
}
