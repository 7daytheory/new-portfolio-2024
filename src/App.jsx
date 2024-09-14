//Import components
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

//Import layout
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
                <Footer />
              </>
            } />
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
