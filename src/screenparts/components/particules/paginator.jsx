import styled from 'styled-components';
import { Title, Cont} from './index';

const LineUp = styled.div`

    width:1px;
    height:85px;
    border: 1px solid #87879D;
    mix-blend-mode:normal;
    opacity: 0.25;
    justify-self: center;
    position: relative;
    left:50%;
    transform: translate(0%, 35%);
    z-index: 1000;

`;

const Circle = styled.div`

    width:56px;
    height:56px;
    border-radius: 29px;
    border: 1px solid rgba(135, 135, 157, 0.25);
    background: #FAFAFA;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    top:50%;
    transform: translate(0%, 50%);
    z-index:1000;
`;

const Num = styled(Title)`
font-size: 16px;
color: #87879D;
top: 50%;
@media (max-width: 800px){
    font-size:16px;
}

`;

const CustomCont = styled(Cont)` 

    position: relative;
    margin-left: calc(50% - 28px);
    margin-right: calc(50% - 28px);
    @media (max-width: 800px){
        margin-left: calc(50% - 28px);
        margin-right: calc(50% - 28px);
    }
    @media (max-width: 450px){
        margin-left: calc(50% - 28px);
        margin-right: calc(50% - 28px);
    }

`;

export function Paginator(props){

    const {num} = props;

    return(
        <CustomCont>
            <LineUp></LineUp>
            <Circle>
                <Num>{num}</Num>
            </Circle>
        </CustomCont>

    )
}