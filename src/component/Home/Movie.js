import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Movie = () => {
  const data = [
    {
      id: 1,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 2,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 3,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 4,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 5,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 6,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 7,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
  ]
  return (
    <div className="movie">
      <div className="container">
        <div className="movie__title">
          <h1>Movies</h1>
          <Swiper
            // install Swiper modules

            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={8}
            autoplay={{ delay: 2000}}
            centeredSlides
            grabCursor
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide>
                <img
                  src="https://bqte9svezmi4.merlincdn.net//i/posters/1615"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Movie
