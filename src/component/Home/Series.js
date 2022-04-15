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
              <img src={item.img} alt="" />
              <h1>{item.id} {item.title}</h1>
            </div>
          )}
        </div>
      ))}
      <h1>hello world</h1>
    </div>
  )
}

export default Series
