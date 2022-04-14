import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

const Movie = () => {
  const data = [
    {
      id: 1,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1615',
    },
    {
      id: 2,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1596',
    },
    {
      id: 3,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1599',
    },
    {
      id: 4,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1624',
    },
    {
      id: 5,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1610',
    },
    {
      id: 6,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1611',
    },
    {
      id: 7,
      img: 'https://bqte9svezmi4.merlincdn.net//i/posters/1612',
    },
  ]
  return (
    <div className="movie">
      <div className="movie__title container">
        <h1>Movies</h1>
      </div>
      <div className="movie__slide">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          // autoplay={{ delay: 2000 }}
          centeredSlides
          grabCursor
          loop
          pagination={{ clickable: true }}
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
              width: 708,
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide>
              <Link to="/series" >
                <img src={item.img} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Movie
