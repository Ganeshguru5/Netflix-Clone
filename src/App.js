import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Portfolio from './Pages/Portfolio'
import LoginScreen from './Pages/LoginScreen'
import Nav from './components/Nav'
import HomeScreen from './Pages/HomeScreen'
import Tvshows from './Pages/Tvshows'
import Accounts from './Pages/Accounts'
import Searchscreen from './Pages/Searchscreen'
import Selectedmovie from './Pages/Selectedmovie'
import SelectTvshow from './Pages/SelectTvshow'

export default function App() {
  return (
    <div className='main'>
      <Router>
      <Routes>
        <Route>
          <Route exact path='/' element={<Portfolio />} />
          <Route exact path='/Login' element={<LoginScreen />}/>
          <Route exact path='/Accounts' element={<Accounts/>} />
          <Route exact path='/Home' element={[<Nav/>,<HomeScreen />]}/>
          <Route exact path='/Tvshows' element={[<Nav/>,<Tvshows />]}/>
          <Route exact path='/Search' element={[<Nav/>,<Searchscreen/>]}/>
          <Route exact path='/movie/:id' element={[<Nav/>,<Selectedmovie/>]}/>
          <Route exact path='/tv/:id' element={[<Nav/>,<SelectTvshow/>]}/>
        </Route>
        
      </Routes>
      </Router>
    </div>
  )
}
