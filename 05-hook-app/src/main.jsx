import './index.css'

import { HooksApp } from './HooksApp'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <HooksApp />  
  </Router>
  // <React.StrictMode>
  // </React.StrictMode>,
)
