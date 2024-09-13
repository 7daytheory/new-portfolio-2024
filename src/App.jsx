import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={
              <>
                <Banner />
                <Experience />
                <Resume />
                <Projects />
                <Contact />
              </>
            } />
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
