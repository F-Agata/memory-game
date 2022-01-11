import styled from "styled-components";

function App() {
  return (
      <WrappApp>
          <Title> memory </Title>
          <WrappBtn>
              <BtnNextGame> nowa gra </BtnNextGame>
          </WrappBtn>
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
