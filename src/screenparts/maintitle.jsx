import React from 'react'
import { Caption } from './components'
import { Button, Cont } from './components/particules'
import styled from 'styled-components'

const CustomImageCont1 = styled.div`
    background: url("src/assets/desktop/image-hero-left.png");
    background-repeat:no-repeat; 
    background-size: contain;
    background-position: right center;
    width:40%;
    height: 50vh;
    margin:0;
    @media (max-width: 800px){
        width:100%;
        background-image: url("src/assets/tablet/image-hero.png"); background-repeat:no-repeat; 
        background-size: contain;
        height: 40vw;
    }

`;

const CustomImageCont2 = styled(CustomImageCont1)`
    background: url("src/assets/desktop/image-hero-right.png");
    background-repeat:no-repeat; 
    background-size: contain;
    background-position: left center;
    @media (max-width: 800px){
        height:0%;
    }

`;

export function Maintitle() {
  return (
        <Cont margin="30px 0px 50px 0px" flex marginabsolute width="100%">
            <CustomImageCont1/>
            <Cont margin="0px 10% 0px 10%" marginabsolute>
                <Caption
                title='Group Chat for Everyone'
                text='Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.'
                nomargin
                />
                <Cont flexabsolute>
                    <Button color="#4D96A9" hover_color="#71C0D4" text_color_2="#8FE3F9" text= "Download" text_2="v1.3"/>
                    <Button text= "What is it?"/>
                </Cont>
            </Cont>
            <CustomImageCont2/>
        </Cont>
  )
}

