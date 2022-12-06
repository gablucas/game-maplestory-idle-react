import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from './GlobalContext'

const GameMenu = styled.div`
  grid-column: 1/-1;
  flex-direction: row;
  height: 40px;
`

const ButtonMenu = styled.button`
  height: 100%;
  font-family: 'Mosk 900';
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  border: 1px solid #000000;
  color: #0185c1;

  -webkit-text-stroke:1px black;
  position: relative;
`

const ButtonBattle = styled(ButtonMenu)`
  border-bottom: ${({ selected }) => selected === "battle" ? "0px" : "1px solid #000000"};
  background-color: ${({ selected }) => selected === "battle" ? "#ddbb7d" : "#928160"};
  
  &::before {
    content: "BATALHA";
    position: absolute;
    left: 8px;
    color: ${({ selected }) => selected === "battle" ? "#FFFFFF" : "#c9adad"};
  }
`

const ButtonTraining = styled(ButtonMenu)`
  border-bottom: ${({ selected }) => selected === "training" ? "0px" : "1px solid #000000"};
  background-color: ${({ selected }) => selected === "training" ? "#ddbb7d" : "#928160"};

  &::before {
    content: "TREINAMENTO";
    position: absolute;
    left: 8px;
    color: ${({ selected }) => selected === "training" ? "#FFFFFF" : "#c9adad"};
  }
`

const ButtonItems = styled(ButtonMenu)`
  border-bottom: ${({ selected }) => selected === "items" ? "0px" : "1px solid #000000"};
  background-color: ${({ selected }) => selected === "items" ? "#ddbb7d" : "#928160"};

  &::before {
    content: "ITENS";
    position: absolute;
    left: 8px;
    color: ${({ selected }) => selected === "items" ? "#FFFFFF" : "#c9adad"};
  }
`

const Menu = () => {

  const buttons = React.useRef();
  const global = React.useContext(GlobalContext)

  function handleClick({ target }) {
    global.setTab(target.id)
  }

  return (
    <GameMenu>
      <ButtonBattle selected={global.tab} ref={buttons} id="battle" onClick={handleClick}>BATALHA</ButtonBattle>
      <ButtonTraining selected={global.tab} ref={buttons} id="training" onClick={handleClick}>TREINAMENTO</ButtonTraining>
      <ButtonItems selected={global.tab} ref={buttons} id="items" onClick={handleClick}>ITENS</ButtonItems>
    </GameMenu>
  )
}

export default Menu