import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../GlobalContext'
import bgPlayer from '../img/background/bg_player.png';

const PlayerInfo = styled.div`
  border-left: 10px solid #ddbb7d;
  box-shadow: -1px 0 0 #000000,
               inset 1px 0 0 #000000;
`

const PlayerImage = styled.div`
  display: grid;
  justify-content: center;
  align-content: end;
  height: 294px;
  padding-bottom: 70px;
  border-bottom: 10px solid #ddbb7d;
  box-shadow: 0 1px 0 #000000,
              inset 0 1px 0 #000000;
  background: url(${bgPlayer}) 46.8% 30% no-repeat;
`

const PlayerStats = styled.div`
  padding: 5px;

  h1 {
    font-family: 'Mosk 900';
    font-size: 2rem;
    padding: 0px 10px;
    border: 1px solid black;
    color: #0185c1;
    background-color: #BE4044;
   -webkit-text-stroke: 1px black;
    position: relative;
    &::before {
      content: "STATS";
      position: absolute;
      left: 6px;
      color: #FFFFFF;
  }
  }

  h2 {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: normal;
    color: #FFFFFF;
  }

  p {
    font-size: 1.7rem;
    letter-spacing: 0.2rem;
    padding: 2px 10px;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    background-color: #A41D23;
    box-shadow: 1px 1px 0 #000000,
                -1px -1px 0 #000000,
                inset 1px 1px 0 #000000,
                inset -1px -1px 0 #000000;
  }
`

const DisplayPlayer = () => {

  const global = React.useContext(GlobalContext)

  return (
    <PlayerInfo>
      <PlayerImage>
        <img src={global.player.skin} height="150px" alt="" />
      </PlayerImage>
      <PlayerStats>
        <h1>STATS</h1>
        <h2>Poder de ataque</h2>
        <p>{global.player.attack}</p>
        <h2>Gold</h2>
        <p>{global.player.gold}</p>
      </PlayerStats>
    </PlayerInfo>
  )
}

export default DisplayPlayer