import React from 'react'
import styled from 'styled-components'
import Monster from './battle-components/Monster';
import monsters from '../img/monsters/importMonsters';

const BattleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  padding: 10px;
`

const DisplayBattle = () => {



  return (
    <BattleContainer>
      {monsters.map(({id, name, meso, image}, index) => (
        <Monster key={id} name={name} meso={meso} image={image} index={index} />
      ))}
    </BattleContainer>
  )
}

export default DisplayBattle