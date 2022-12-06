import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from './GlobalContext'

const GameMenu = styled.div`
  grid-column: 1/-1;
  flex-direction: row;
  height: 40px;
  background-color: tomato;
`

const ButtonMenu = styled.button`
  height: 100%;
  font-size: 1rem;
  font-weight: bold;
`

const Menu = () => {

  const global = React.useContext(GlobalContext)

  function handleClick({ target }) {
    global.setTab(target.id)
  }

  return (
    <GameMenu>
      <ButtonMenu id="battle" onClick={handleClick}>BATALHA</ButtonMenu>
      <ButtonMenu id="training" onClick={handleClick}>TREINAMENTO</ButtonMenu>
      <ButtonMenu id="items" onClick={handleClick}>ITENS</ButtonMenu>
    </GameMenu>
  )
}

export default Menu