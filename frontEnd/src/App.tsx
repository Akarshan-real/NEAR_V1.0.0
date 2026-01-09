import { useState, useEffect } from 'react';
import { dottedBg } from './Styles'
import type { FormField } from './Types';
import { useAuth } from './contexts/Auth/useAuth';

// components 
import Navbar from './components/html/Header/Navbar'
import Footer from './components/html/Footer/Footer'

const API = {
  "URL": import.meta.env.VITE_API_URL,
  "KEY": import.meta.env.VITE_API_KEY,
  "USER_DETAILS": import.meta.env.VITE_API_USER_DETAILS
} as const;

function App() {
  const { isLoggedIn,userName } = useAuth();

  return (
    <div className='bg-(--void)'>
      <Navbar />
      <main style={dottedBg} className='w-full h-screen'></main>
      <Footer />
    </div>
  )
}

export default App
