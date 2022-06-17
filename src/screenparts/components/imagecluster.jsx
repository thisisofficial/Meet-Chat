import React from 'react'
import {Cont, ImageTile} from './particules';

export function ImageCluster() {
  return (
    <Cont
    margin="80px 20% 80px 20%"
    flexphone>
        <ImageTile src="src/assets/desktop/image-woman-in-videocall.jpg"></ImageTile>
        <ImageTile src="src/assets/desktop/image-women-videochatting.jpg"></ImageTile>
        <ImageTile src="src/assets/desktop/image-men-in-meeting.jpg"></ImageTile>
        <ImageTile src="src/assets/desktop/image-man-texting.jpg"></ImageTile>
    </Cont>
  )
}
