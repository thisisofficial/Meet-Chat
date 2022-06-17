import { useState } from 'react'
import './App.css'
import {Caption, ImageCluster, ImageFooter} from './screenparts/components';
import {Paginator} from './screenparts/components/particules';
import {Maintitle} from './screenparts/maintitle.jsx';
import {Logo} from './screenparts/logoplaced.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo/>
      <Maintitle/>
      <Paginator num="01"/>
      <ImageCluster/>
      <Caption
      title='Smarter meetings, all in one place'
      titlesize='40px'
      titlephonesize='30px'
      caption='Built for modern use'
      text='Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.'
      />
      <Paginator num="02"/>
      <ImageFooter/>
    </div>
  )
}

export default App
