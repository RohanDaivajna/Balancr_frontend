// Import React StrictMode for highlighting potential problems
import { StrictMode } from 'react'
// Import createRoot for React 18+ rendering
import { createRoot } from 'react-dom/client'
// Import global styles
import './index.css'
// Import main App component
import App from './App.jsx'

// Mount the React app to the root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)