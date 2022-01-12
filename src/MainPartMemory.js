import React, { useState, useEffect }from "react";
import styled from "styled-components";

import { ImSpinner9 } from "react-icons/im";

function MainPartMemory({ allOptionsMemory, setRound }) {


    // useEffect(()=>{console.log('allOptionsMemory', allOptionsMemory)},[allOptionsMemory])

    const oneCard = allOptionsMemory.map((item, index,) => (
        <WrappOneCard key={item.id}>

        </WrappOneCard>
    ))

    return (
        <WrappMainPartMemory>
            <WrappCards>
                {oneCard}
            </WrappCards>
        </WrappMainPartMemory>
    );
}

export default MainPartMemory;

const WrappMainPartMemory = styled.div`
  width: 900px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 20px auto;
  
    `
const WrappCards = styled.div`
width: 100%;
border: 2px solid gainsboro;
display: grid;  
`

const WrappOneCard = styled.div `
`



