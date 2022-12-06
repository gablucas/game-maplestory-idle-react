import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: ${({ tab }) => tab === 'training' ? 'block' : 'none'};
  height: 600px;
  background: yellow;
`

const DisplayTraining = ({ tab }) => {
  return (
    <Container tab={tab}>
      
    </Container>
  )
}

export default DisplayTraining