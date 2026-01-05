import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SignUp from './components/html/SignUp.tsx'
import LogIn from './components/html/LogIn.tsx'

createRoot(document.getElementById('root')!).render(
    // <App />
    // <SignUp />
    <LogIn />
)
