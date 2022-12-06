import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../GlobalContext'

const PlayerData = styled.div`
  margin: 10% auto;
`
const PlayerAtk = styled.p`
  font-size: 1.2rem;

  &:before {
    content: "ATK";
    font-weight: bold;
    padding-right: 10px;
  }

`
const DisplayPlayer = () => {

  const global = React.useContext(GlobalContext)

  return (
    <PlayerData>
      <img src={global.player[0]} height="150px" alt="" />
      <PlayerAtk>500</PlayerAtk>
    </PlayerData>
  )
}

export default DisplayPlayer