import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FontStyle from './screenparts/components/fonts/FontFace';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontStyle/>
    <App />
  </React.StrictMode>
)
