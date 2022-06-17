import styled from "styled-components";

export const Title = styled.h1`
    font-family:'Red Hat Display', sans-serif;
    font-weight: 900;
    font-size: ${props => props.size? props => props.size:'64px'};
    text-align: ${props => props.align?props.align:'center'};
    color: ${props => props.color? props => props.color:'#28283D'};
    text-transform: ${props=> props.caps?'uppercase':'none'};
    letter-spacing: ${props=> props.caps? '4px': 'normal'};
    margin: 0;
    @media (max-width: 800px){
        font-size:${props => props.sizephone?props => props.sizephone:'48px'};
        text-align: center;
    }

`;