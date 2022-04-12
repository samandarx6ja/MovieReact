import Navbar from './component/Home/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movie from './component/Home/Movie'
import Series from './component/Home/Series'
import './component/Style/stayle.css'
import Homepage from './component/Home/Homepage'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
