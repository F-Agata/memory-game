import React, { useState, useEffect }from "react";
import styled from "styled-components";

import { ImSpinner9 } from "react-icons/im";

function MainPartMemory({ allOptionsMemory, handleChoice, firstChoice, secondChoice, disabled }) {

    const handleClick = (item) => {
                if (!disabled) {
            handleChoice(item)
        }
    }

    const oneCard = allOptionsMemory.map((item) => {
        // console.log('item', item)
        // console.log('firstChoice', firstChoice)
        // console.log("dataRotated", dataRotated)


        const rotated = item === firstChoice || item === secondChoice || item.couple ? true : false
        console.log("rotated", rotated, item)
        return (
        <WrappOneCard key={item.id} >
            <WrappFronCard dataRotated={rotated} data-rotated={rotated} >
                <item.name/>
            </WrappFronCard>
            <WrappBackCard onClick={(e) => handleClick(item)} dataRotated={rotated} data-rotated={rotated}>
                <BackCard/>
            </WrappBackCard>
        </WrappOneCard>
    )}
    )

    // useEffect(()=>{console.log('allOptionsMemory', allOptionsMemory)},[allOptionsMemory])
    // useEffect(()=>{console.log('oneCard', oneCard)},[oneCard])
    // useEffect(()=>{console.log('allOptionsMemory[0].name', allOptionsMemory[0].name)},[oneCard])
    //  useEffect(()=>{console.log('rotated', rotated)},[oneCard])
    // useEffect(()=>{console.log('allOptionsMemory.name', allOptionsMemory.name)},[allOptionsMemory])

    return (
        <WrappMainPartMemory>
                {oneCard}
        </WrappMainPartMemory>
    )
}

export default MainPartMemory;

const WrappMainPartMemory = styled.div`
  width: 700px;
  background-color: black;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  `

const WrappOneCard = styled.div `
   width: 100%;
  cursor: pointer;
   border-radius: 10px;
  position: relative;
  `

const WrappFronCard = styled.div`
  width: 100%;
  background-color: black;
  border: 2px solid gainsboro;
  border-radius: 10px;
  color: gainsboro;
  padding: 30px !important;
  position: absolute;
  transition: all ease-in 0.2s;
  transform: ${props => props.dataRotated ? "rotateY(0deg)" : "rotateY(90deg)"};
  transition-delay: ${props => props.dataRotated ? "0.2s" : "0s"};
        * {
    width: 100%;
    height: 100%;
  }  
`

const WrappBackCard = styled.div`
  width: 100%;
  border: 2px solid gainsboro;
  border-radius: 10px;
  background: linear-gradient(130deg, rgba(220,220,220,1) 0%, rgba(220,220,220,0.5) 44%, rgba(220,220,220,0.7) 78%, rgba(220,220,220,1) 100%);
  color: black;
  padding: 40px !important;
  transition: all ease-in 0.2s;
  transform: ${props => props.dataRotated ? "rotateY(90deg)" : "rotateY(0deg)"};
  transition-delay: ${props => props.dataRotated ? "0s" : "0.2s"};
  * {
    width: 100%;
    height: 100%;
  }  
`

const BackCard = styled(ImSpinner9)`
  width: 100%;
  height: 100%;
   
`





