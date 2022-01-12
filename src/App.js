import React, { useState, useEffect }from "react";
import styled from "styled-components";
import MainPartMemory from "../src/MainPartMemory"

import { ImHome3, ImClock, ImSmile2, ImBell, ImBullhorn, ImCamera } from "react-icons/im"

const memoryIconArray = [
    {name: ImHome3},
    {name: ImClock},
    {name: ImSmile2},
    {name: ImBullhorn},
    {name: ImCamera},
    {name: ImBell},
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map((item) =>({ ...item, id: Math.random()}) )
};

function App() {

    const [allOptionsMemory, setAllOptionsMemory] = useState(shuffleArray([...memoryIconArray, ...memoryIconArray]));
    const [round, setRound] = useState(0)

const handleClickNextGame = () => {
        console.log("klikam next game")
        setRound(0);
        setAllOptionsMemory(shuffleArray(allOptionsMemory))

}

    useEffect(()=>{console.log('allOptionsMemory', allOptionsMemory)},[allOptionsMemory])
    useEffect(()=>{console.log('round', round)},[round])

  return (
      <WrappApp>
          <Title> memory </Title>
          <WrappBtn>
              <BtnNextGame onClick={handleClickNextGame}> nowa gra </BtnNextGame>
          </WrappBtn>
          <MainPartMemory allOptionsMemory={allOptionsMemory} setRound={setRound}/>
          <Counter>Liczba tur: {round}</Counter>
      </WrappApp>


  );
}

export default App;

const WrappApp = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  
  `

const Title = styled.h1`
color: gainsboro;
font-family: Arial, sans-serif;
font-size: 26px;
line-height: 30px;
text-align: center;
padding: 20px 0 10px 0;
letter-spacing: 2px;
text-transform: uppercase;  
border-bottom: 2px solid gainsboro;
  `

const WrappBtn = styled.div`
  background-color: black;
  border: 2px solid gainsboro;
  margin: 20px auto ;
  padding: 12px 26px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BtnNextGame = styled.button`
  background-color: black;
  color: gainsboro;
  font-family: Arial, sans-serif;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.2, 1.2);
  }
`

const Counter = styled.h3`
color: gainsboro;
font-family: Arial, sans-serif;
font-size: 20px;
line-height: 30px;
text-align: center;
padding: 20px 0 10px 0;
letter-spacing: 2px;
text-transform: uppercase;  
  `

