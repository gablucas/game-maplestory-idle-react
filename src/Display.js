import React from 'react'
import styled from 'styled-components'
import DisplayBattle from './display-components/DisplayBattle'
import DisplayTraining from './display-components/DisplayTraining'
import DisplayItems from './display-components/DisplayItems.js.js'
import { GlobalContext } from './GlobalContext'
import DisplayPlayer from './display-components/DisplayPlayer'

const Container = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  border: 10px solid #ddbb7d;
  box-shadow: 1px 1px 0 #000000,
              -1px -1px 0 #000000,
              inset 1px 1px 0 #000000,
              inset -1px -1px 0 #000000;
`

const Display = () => {

  const global = React.useContext(GlobalContext);

  return (
    <Container>
      <DisplayBattle tab={global.tab} />
      <DisplayTraining tab={global.tab} />
      <DisplayItems tab={global.tab} />
      <DisplayPlayer />
    </Container>
  )
}

export default Display