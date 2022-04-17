import { useParams } from 'react-router-dom'
import DB from '../db/db.json'
const Series = () => {
  const { id } = useParams()
  return (
    <div>
      {DB.map((item) => (
        <div>
          {id !== item.id ? (
            ''
          ) : (
            <div>
              <div className="banner__slide">
              <img src={item.banner} alt="" />
              <div className="liner__gradient"></div>
              <div className="liner__gradient"></div>
              <div className="banner__desc">
                <div className="banner__tile">{item.title}</div>
                <div className="banner__trailer">
                  <a href="#">
                    <i className="fas fa-play"></i> Play Movie{' '}
                  </a>
                </div>
              </div>
            </div>
              {/* <img src={item.banner} alt="" />
              <h1>{item.id} {item.title}</h1> */}
            </div>
          )}
        </div>
      ))}
      <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
      </video>
      <h1>hello world</h1>
    </div>
  )
}

export default Series
