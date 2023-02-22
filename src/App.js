
import Header from './Component/Header/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Register from './Component/Sign/Register'
import Sign from './Component/Sign/Sign'




const App = () => {
  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={< Home/>} />
              <Route path='/register' element={< Register/>} />
              <Route path='/sign' element={< Sign/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
