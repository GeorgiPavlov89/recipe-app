import Home from './Home'
import Cuisine from './Cuisine'
import {Route, Routes} from 'react-router-dom'


export default function Pages() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
   
  )
}
