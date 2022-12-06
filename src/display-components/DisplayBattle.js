import React from 'react'
import styled from 'styled-components'
import Monster from './battle-components/Monster';
import monsters from '../img/monsters/importMonsters';
import { GlobalContext } from '../GlobalContext';
import DisplayMap from './DisplayMap';

const BattleContainer = styled.div`
  display: ${({ tab }) => tab === 'battle' ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
  padding: 10px;
`

const DisplayBattle = ({ tab }) => {

  const global = React.useContext(GlobalContext)
  const [attack, setAttack] = React.useState(null);
  const elements = React.useRef();
  
  let timeout = React.useRef();

  function handleClick({ currentTarget }) {
    const element = currentTarget;
    const selectedMonster = monsters.find((monster) => monster.id === currentTarget.id)

    setAttack({
      element,
      selectedMonster
    });
  }

  React.useEffect(() => {

    if (!attack) {
      setAttack({
        element: document.getElementById('m1'),
        selectedMonster: monsters.find((monster) => monster.id === 'm1')
      })

    } else {

      const monsterLife = attack.element.lastChild.lastChild;
      const timeToKill = attack.selectedMonster.hp / global.player.attack;
      
      [...elements.current.children].forEach((elemento) => {
        if (elemento.id === attack.selectedMonster.id) {
          monsterLife.style.animation = `animateLoseLife ${timeToKill}s linear infinite`
        } else if (elemento.id) {
          elemento.lastChild.lastChild.style.animation = "none"
        }
      })

      clearInterval(timeout.current)
      timeout.current = setInterval(() => {
        global.setPlayer({
          ...global.player,
          attack: 50,
          gold: global.player.gold + 50,
        })
      }, timeToKill * 1000)

    }
  }, [attack, global.player])


  return (
    <BattleContainer ref={elements} tab={tab}>
      {monsters.map(({id, name, hp, meso, image}, index) => (
        <Monster onClick={handleClick} key={id} id={id} name={name} hp={hp} meso={meso} image={image} index={index}/>
        ))}
        <DisplayMap />
    </BattleContainer>
  )
}

export default DisplayBattle