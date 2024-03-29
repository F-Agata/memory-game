import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainPartMemory from '../src/MainPartMemory'

import {
  ImHome3,
  ImClock,
  ImSmile2,
  ImBell,
  ImBullhorn,
  ImCamera,
} from 'react-icons/im'

const memoryIconArray = [
  { name: 'ImHome3', identifier: ImHome3, couple: false },
  { name: 'ImClock', identifier: ImClock, couple: false },
  { name: 'ImSmile2', identifier: ImSmile2, couple: false },
  { name: 'ImBullhorn', identifier: ImBullhorn, couple: false },
  { name: 'ImCamera', identifier: ImCamera, couple: false },
  { name: 'ImBell', identifier: ImBell, couple: false },
]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.map((item) => ({ ...item, id: Math.random() }))
}

function App() {
  const [allOptionsMemory, setAllOptionsMemory] = useState(
    shuffleArray([...memoryIconArray, ...memoryIconArray]),
  )
  const [round, setRound] = useState(0)
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const handleClickNextGame = () => {
    setRound(0)
    setAllOptionsMemory(shuffleArray([...memoryIconArray, ...memoryIconArray]))
    setFirstChoice(null)
    setSecondChoice(null)
  }

  const newRound = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setRound((prevRound) => prevRound + 1)
    setDisabled(false)
  }

  const handleChoice = (item) => {
    firstChoice ? setSecondChoice(item) : setFirstChoice(item)
  }

  useEffect(() => {
    if (firstChoice !== null && secondChoice !== null) {
      if (firstChoice.name && secondChoice.name) {
        setDisabled(true)
        if (firstChoice.name === secondChoice.name) {
          setAllOptionsMemory((prevAllOptionsMemory) => {
            return prevAllOptionsMemory.map((item) => {
              // console.log(item.name.name)
              if (item.name === firstChoice.name) {
                return { ...item, couple: true }
              } else {
                return item
              }
            })
          })
          newRound()
        } else {
          const clearRound = setTimeout(() => newRound(), 1000)
          return () => {
            clearTimeout(clearRound)
          }
        }
      }
    }
  }, [firstChoice, secondChoice])

  return (
    <WrappApp>
      <WrappMemory>
        <Title> memory </Title>
        <WrappBtn>
          <BtnNextGame onClick={handleClickNextGame}> nowa gra </BtnNextGame>
        </WrappBtn>
        <Counter>Liczba tur: {round}</Counter>
        <MainPartMemory
          allOptionsMemory={allOptionsMemory}
          handleChoice={handleChoice}
          firstChoice={firstChoice}
          secondChoice={secondChoice}
          disabled={disabled}
        />
      </WrappMemory>
    </WrappApp>
  )
}

export default App

const WrappApp = styled.div`
  min-height: 100vh;
  background-color: black;
  * {
    margin: 0px;
    box-sizing: border-box;
    padding: 0px;
  }
`

const WrappMemory = styled.div`
  min-width: 375px;
  max-width: 1800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 40px 0px;
`

const Title = styled.h1`
  color: gainsboro;
  font-family: Arial, sans-serif;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  padding-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid gainsboro;
  width: 100%;
  max-width: 660px;
`

const WrappBtn = styled.div`
  background-color: black;
  border: 2px solid gainsboro;
  margin: 40px auto 0 auto;
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
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  padding: 20px 0 10px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`
