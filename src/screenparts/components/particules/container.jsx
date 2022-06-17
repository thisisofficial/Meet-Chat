import styled from 'styled-components';

export const Cont = styled.div` 
    margin: ${props => props.margin=== undefined? '0px 30% 0px 30%': props => props.margin};
    padding: ${props => props.padding=== undefined?'0':props => props.padding};
    display: ${props => props.flex || props.flexphone || props.flexabsolute?"flex":"block"};
    width: ${props=> props.width?props.width : "auto"};
    height: auto;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px){
        display: ${props => props.flexphone || props.flexabsolute?"flex":"block"};
        margin: ${props => props.margintablet ? props.margintablet: props.margin && (props.flexphone || props.flexabsolute || props.marginabsolute)? props.margin:'0px 20% 0px 20%'};
        width: ${props=> (props.flexphone || props.flexabsolute) && props.width?props.width: "auto"};
    }
    @media (max-width: 450px){
        display: ${props => props.flexabsolute?"flex":"block"};
        margin: ${props=> (props.flexabsolute || props.marginabsolute)&& props.margin?props.margin:'5px'};
    }
`;