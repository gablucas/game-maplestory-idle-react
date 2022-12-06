import React from 'react'
import styled from 'styled-components';

  const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding: 6px;
    background-color: #e09783;
    border: 2px solid #8d8d8d;
    cursor: pointer;
    box-shadow: 1px 1px 0 #000000,
              -1px -1px 0 #000000,
              inset 1px 1px 0 #000000,
              inset -1px -1px 0 #000000;
    &:hover {
      background-color: #d18975;
    }
  `

  const MonsterImage = styled.div`
    display: grid;
    place-items: center;
    width: 70px;
    height: 70px;
    padding: 10px 10px;
    background: linear-gradient(#5e5e5e, #91918f);
    border: 2px solid #8d8d8d;
    box-shadow: 1px 1px 0 #000000,
              -1px -1px 0 #000000,
              inset 1px 1px 0 #000000,
              inset -1px -1px 0 #000000;
  `

  const MonsterDetails = styled.div`
    display: grid;
    gap: 4px;
  `

  const MonsterName = styled.p`
    width: max-content;
    align-self: start;
    padding: 2px 6px;
    color: white;
    border: 1px solid #0185c1;
    background: linear-gradient(#9ee0e7 ,#0185c1);
  `

  const MonsterRewards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 1px;
    border: 1px solid black;
    background-color: #fcd969;
  `

  const RewardsInfo = styled.p`
    padding-left: 4px;
    color: #FFFFFF;
    border: 1px solid #000000;
    background-color: #9f1e22;
  `

  const RewardsDescription = styled.p`
    display: flex;
    align-items: center;
    font-size: .8rem;
    &::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 2px;
      border: 1px solid #000000;
      background-color: #317bec;
    }
  `

  const MonsterHP = styled.p`
    padding: 4px 6px;
    border: 1px solid #000000;
    color: white;
    background-color: #e7130d;
    &::before {
      content: "HP";
      padding-right: 10px;
    }

    @keyframes animateLoseLife {
      from {
        box-shadow: inset 0px 0 #e09783;
      }

      to {
        box-shadow: inset -285px 0 #e09783;
      }
    }
  `

const Monster = ({onClick, id, name, hp, meso, image, index }) => {

if (index < 8) {
    return (
      <Container id={id} onClick={onClick}>
        <MonsterImage>
          <img src={image} alt="" />
        </MonsterImage>

        <MonsterDetails>
          <MonsterName>{name}</MonsterName>
          <MonsterRewards>
            <RewardsInfo>{meso}</RewardsInfo>
            <RewardsDescription>Por morte</RewardsDescription>
            <RewardsInfo>600</RewardsInfo>
            <RewardsDescription>Por segundo</RewardsDescription>
          </MonsterRewards>
          <MonsterHP idMonstro={id}>{hp}</MonsterHP>
        </MonsterDetails>
      </Container>
    )
  }
}

export default Monster