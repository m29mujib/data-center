import './App.css'
import About from '../src/components/About/About'
import Navbar from '../src/components/Navbar/Navbar'
import Iklan from './components/Iklan/Iklan'
import Home from './components/Home/Home'
import Komunik from './components/Komunik/Komunik'
import Kolaborate from './components/Kolaborate/Kolaborate'
import Search from './components/Pencarian/Search'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
     <About/>
     <Navbar/>
     <Iklan/>
     <Home/>
     <Komunik/>
     <Kolaborate/>
     <Search/>
     <Footer/>
    </>
  )
}

export default App
