import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<AboutMe />} exact activeClassName='active'></Route>
          <Route path='/portfolio' element={<Portfolio/>} activeClassName='active'></Route>
          <Route path='/contact' element={<Contact />} activeClassName='active'></Route>
          <Route path='/resume' element={<Resume />} activeClassName='active'></Route>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
