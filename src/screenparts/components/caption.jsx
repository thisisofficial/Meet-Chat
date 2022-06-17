import React from 'react'
import { Cont, Title, Text } from './particules';

export function Caption(props) {
    const {title, titlesize, titlephonesize, caption, text, nomargin} = props;

  return (
    <Cont margin={nomargin?"0px":undefined}>
        {/* Caption, a text above the title, optional */}
        <Title 
        size="20px"
        sizephone="16px"
        color="#4D96A9"
        caps
        >{caption?caption:""}</Title>

        {/* Title, main focus */}
        <Title 
        size={titlesize!=undefined?titlesize:undefined}
        sizephone={titlephonesize!=undefined?titlephonesize:undefined}
        >{title}</Title>

        {/* Text, explain your title */}
        <Text>
          {text}
        </Text>
    </Cont>
  )
}
