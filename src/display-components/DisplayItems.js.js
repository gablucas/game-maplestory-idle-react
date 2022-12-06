import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: ${({ tab }) => tab === 'items' ? 'block' : 'none'};
  height: 600px;
  background: green;
`


const DisplayItems = ({ tab }) => {
  return (
    <Container tab={tab}>
      
    </Container>
  )
}

export default DisplayItems