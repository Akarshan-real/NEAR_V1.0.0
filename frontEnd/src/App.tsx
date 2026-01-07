import { dottedBg } from './Styles'

// components 
import Navbar from './components/html/Navbar'
import Footer from './components/html/Footer'

function App() {

  return (
    <div className='bg-(--void)'>
      <Navbar />
      <main style={dottedBg} className='w-full h-screen'></main>
      <Footer />
    </div>
  )
}

export default App
