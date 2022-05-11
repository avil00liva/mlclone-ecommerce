import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PostsContext } from './context/PostsContext'

ReactDOM.render(
  <React.StrictMode>
    <PostsContext>
      <App />
    </PostsContext>
  </React.StrictMode>,
  document.getElementById('root')
)
