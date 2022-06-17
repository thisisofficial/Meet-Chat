import React from 'react'
import styled from 'styled-components'
import { Text, Title, Cont, Button } from './particules'

const FooterCont = styled(Cont)`
    position: relative;
    margin:0;
    background-color: #4D96A9;
    height: 300px;

    @media (max-width: 800px){
        margin: 0;
        height: 500px;
    }
    @media (max-width: 400px){
        margin: 0;
        height: 500px;
    }

`;

const TextInImage = styled(Cont)`
    margin: 0;
    position: absolute;
    display: flex;
    justify-content:space-around;
    width:90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 800px){
        margin: 0px 20px 0px 20px;
        display: block;
        left: 45%;
    }
    @media (max-width: 400px){
        margin: 0px 20px 0px 20px;
        display: block;
        left: 45%;
    }

`;

const BackgroundImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    opacity: 0.3;
    filter: grayscale(100%);
`;

export function ImageFooter() {
  return (
    <FooterCont>
        <BackgroundImg src="src/assets/tablet/image-footer.jpg"/>
        <TextInImage>
            <Cont margin="0px 20px 0px 5%" width="30%"><Title
            size="40px"
            sizephone="40px"
            color="#FAFAFA"
            align="left"
            >Experience more together</Title></Cont>
            <Cont margin="0x" width="30%"><Text
            color="#FAFAFA"
            align="left"
            >
                Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
            </Text></Cont>
            <Cont margin="0px 5% 0px 0px" width="30%">
                <Button text="Download" text_2="v1.3"/>
            </Cont>
            
            
            
        </TextInImage>
    </FooterCont> 
  )
}
