import React from 'react'
import styled from 'styled-components'

const Navigate = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  background-color: #ddbb7d;
  border: 2px solid #8d8d8d;
  box-shadow: 1px 1px 0 #000000,
            -1px -1px 0 #000000,
            inset 1px 1px 0 #000000,
            inset -1px -1px 0 #000000;
  cursor: pointer;
`

const NavigateLeft = styled(Navigate)`
  &:hover {
    transform: translateX(-5px);
    background-color: #c2a063;
  }
`

const NavigateRight = styled(Navigate)`
  &:hover {
    transform: translateX(5px);
    background-color: #c2a063;
  }
`


const DisplayMap = () => {
  return (
    <>
      <NavigateLeft>Voltar</NavigateLeft>
      <NavigateRight>Proximo</NavigateRight>
    </>
  )
}

export default DisplayMap