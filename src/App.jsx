import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

function App() {

  return (
    <>
      <main>
        <div className='content'>
          {/* invoke header component */}
          <Header />
          {/* Invoke routes and specific routes from pages */}
          <Routes>
            <Route path='/' element={<AboutMe />} exact activeClassName='active'></Route>
            <Route path='/portfolio' element={<Portfolio/>} activeClassName='active'></Route>
            <Route path='/contact' element={<Contact />} activeClassName='active'></Route>
            <Route path='/resume' element={<Resume />} activeClassName='active'></Route>
          </Routes>
          {/* invoke footer component */}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App;
