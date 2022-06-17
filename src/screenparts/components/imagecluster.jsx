import React from 'react'
import {Cont, ImageTile} from './particules';
import WomanChat from '../../assets/desktop/image-woman-in-videocall.jpg'
import WomenVideo from '../../assets/desktop/image-women-videochatting.jpg'
import MenMeet from '../../assets/desktop/image-men-in-meeting.jpg'
import ManText from '../../assets/desktop/image-man-texting.jpg'

export function ImageCluster() {
  return (
    <Cont
    margin="80px 20% 80px 20%"
    flexphone>
        <ImageTile src={WomanChat}></ImageTile>
        <ImageTile src={WomenVideo}></ImageTile>
        <ImageTile src={MenMeet}></ImageTile>
        <ImageTile src={ManText}></ImageTile>
    </Cont>
  )
}
