import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
