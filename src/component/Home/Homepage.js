import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const data = [
  {
    id: 1,
    title: ' Movie Name 1',
    img:
      'https://tejedd76pluu.merlincdn.net//files/slides/banner-image-f61193cf-08fe-4bef-92a4-ba5b6b826828.jpg',
  },
  {
    id: 2,
    title: ' Movie Name 2',
    img:
      'https://tejedd76pluu.merlincdn.net//files/slides/banner-image-ce4c404f-36c5-4387-abc7-79b155fd8f1d.jpg',
  },
]

const Homepage = () => {
  return (
    <div className="home">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="banner__slide">
              <img src={item.img} alt="" />
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
