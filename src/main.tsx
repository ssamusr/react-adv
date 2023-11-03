import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigation } from './routes/Navigation.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
)
