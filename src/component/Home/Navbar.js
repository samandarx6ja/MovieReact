import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar__link">
            <Link to="/">  Home</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/series">Series</Link>
          </div>
          <div className="navbar__form">
            <input className='active' type="text" placeholder=" Search for movie..." />
            <button className="btn__search ">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
