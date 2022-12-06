import React from "react";
import styled from "styled-components";
import { GlobalStorage } from "./GlobalContext"

import Menu from "./Menu";
import Display from "./Display";


const Container = styled.section`
  width: 1240px;;
  margin: 40px auto;
  padding: 20px;
  background-color: #c05358;
`

function App() {

  return (
    <GlobalStorage>
      <Container>
        <Menu />
        <Display />
      </Container>
    </GlobalStorage>
  )
}

export default App;
