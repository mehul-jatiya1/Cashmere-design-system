import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@cashfree/cashmere-tokens/css'
import '@cashfree/cashmere/styles'
import { App } from './App'

createRoot(document.getElementById('root')!).render(<App />)
