import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const data = [
  {
    id:1,
    title: "Movie Name 1",
    img:""
  },
  {
    id:2,
    title: "Movie Name 2"
  }
]

const Homepage = () => {
  return (
    <div className="home">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map( item => (
          <SwiperSlide key={item.id}>
            <div>
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <h1>HomePage</h1>
      </div>
    </div>
  )
}

export default Homepage
