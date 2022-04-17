import Navbar from './component/Home/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Series from './component/Home/Series'
import './component/Style/stayle.css'
import Homepage from './component/Home/Homepage'
import './component/pagination.css'
import './component/navigation.css'
import MoviesAll from './component/Home/MoviesAll'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesAll />} />
          <Route path="/series/:id" element={<Series />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
