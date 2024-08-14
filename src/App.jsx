import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Banner />
      </div>
    </>
  )
}

export default App
