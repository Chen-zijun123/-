import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Videos from './components/Videos'
import Life from './components/Life'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Navbar />
      <Hero />
      <Works />
      <Videos />
      <Life />
      <Footer />
    </div>
  )
}

export default App
