import React from 'react'
import styled from 'styled-components'

const Image = styled.img`

    width: 30%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin: .5vw;
    @media (max-width: 800px){
        width: 21vw;
        height: 21vw;
        margin: .7vw;
    }
    @media (max-width: 450px){
        width: 40vw;
        height: 40vw;
        margin: 3.2vw;
    }

`;

export function ImageTile(props) {
    const {src} = props;
  return (
     <Image src={src}>
     </Image>
  )
}
