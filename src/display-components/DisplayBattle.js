import React from 'react'
import styled from 'styled-components'
import Monster from './battle-components/Monster';
import monsters from '../img/monsters/importMonsters';
import DisplayMap from './DisplayMap';

const BattleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
  padding: 10px;
`

const DisplayBattle = () => {

  return (
    <BattleContainer>
      {monsters.map(({id, name, meso, image}, index) => (
        <Monster key={id} name={name} meso={meso} image={image} index={index} />
        ))}
        <DisplayMap />
    </BattleContainer>
  )
}

export default DisplayBattle