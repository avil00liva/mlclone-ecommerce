import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { PostsContext } from './context/PostsContext'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <PostsContext>
    <App />
  </PostsContext>
)
