import styled from "styled-components";

export const Text = styled.p`
    @import url('../fonts/RedHatDisplay-VariableFont_wght.ttf');

    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    font-size: ${props => props.size? props => props.size:'18px'};
    text-align: ${props => props.align?props.align:'center'};
    color: ${props => props.color? props => props.color:'#87879D'};
    @media (max-width: 800px){
        font-size:${props => props.sizephone?props => props.sizephone:'16px'};
        text-align: center;
    }

`;