import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>
         {title}
        </h1>
        <p>
          {description}
        </p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
          {leftBtnText}
        </LeftButton>
        { rightBtnText &&
        <RightButton>
        {rightBtnText}
      </RightButton> 
      }
        
      </ButtonGroup>
      </Fade>
      </Buttons>
      <DownArrow src="/images/down-arrow.svg"/>
      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 150vh;
background-size: cover;
backgorund-position: center;
backgorund-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between; 
align-items: center; 
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
z-index:-1;
`

const ButtonGroup = styled.div`
display: flex;
margin-top: 100%;
@media (max-width: 768px){
  flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin-top: 500px;
`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black;`

const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`

const Buttons = styled.div`
`