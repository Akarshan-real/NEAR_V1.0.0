import { Outlet } from 'react-router-dom';
import { dottedBg } from './styles/Styles'
import { useAuth } from './contexts/Auth/useAuth';
import { useLoader } from './contexts/loader/LoaderContext';

// components 
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NewLoader from './components/ui/newLoader';

const API = {
  "URL": import.meta.env.VITE_API_URL,
  "KEY": import.meta.env.VITE_API_KEY,
  "USER_DETAILS": import.meta.env.VITE_API_USER_DETAILS
} as const;

function App() {
  const { isLoggedIn, userName } = useAuth();
  const { loading } = useLoader();

  return (
    <div className='bg-(--void)'>
      {loading && <NewLoader />}
      <Navbar />
      <main style={dottedBg} className='w-full h-screen'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
