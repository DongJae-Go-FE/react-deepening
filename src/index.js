import React from 'react'
import App from './App'
import ReactDom from 'react-dom/client'

const $root = document.getElementById('app')

ReactDom.createRoot($root).render(
  <div>
    <App />
  </div>,
)
