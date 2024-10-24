import { StrictMode } from 'react'
import { createRoott } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import ProfileForm from './components/ProfileForm.tsx'
import Home from './components/Home.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <ProfileForm />
    <Home />
  </StrictMode>,
)
