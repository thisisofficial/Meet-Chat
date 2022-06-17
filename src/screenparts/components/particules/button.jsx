import styled, {css} from "styled-components";
import React from 'react';
import { Title } from "./title";

const ButtonCont = styled.div`
    width: auto;
    border-radius: 29px;
    padding-left: 28px;
    padding-right: 28px;
    justify-content: center;
    display: flex;
    align-items: center;
    height:56px;
    margin: 20px;
    background-color: ${props=> props.color? props.color: "#855FB1"};
    transition: 0.2s;
    cursor: pointer;
    
    &:hover{
        background-color: ${props=> props.hovering_color? props.hovering_color: "#B18BDD"};
    }

`;



export function Button(props) {

    const {color, hover_color, text_color, text_color_2, text, text_2} = props;

  return (
    <ButtonCont color={color?color:"#855FB1"} hover_coloring={hover_color?hover_color: "#B18BDD"}>
        <Title color={text_color?text_color:"#FFFFFF"} size="16px" sizephone="16px">{text}</Title>
        <Title color={text_color_2?text_color_2:"#D9B8FF"} size="16px" sizephone="16px">{text_2}</Title>
    </ButtonCont>
  )
}
