import './App.css'

// components 
import Navbar from './components/html/Navbar'
import Footer from './components/html/Footer'

function App() {

  return (
    <div className='bg-(--void)'>
      <Navbar />
      <main className='w-full h-screen'></main>
      <Footer />
    </div>
  )
}

export default App
