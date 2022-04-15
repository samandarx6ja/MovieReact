import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import DB from '../db/db.json'

const Movie = () => {
  return (
    <div className="movie">
      <div className="movie__title container">
        <h1>Movies</h1>
      </div>
      <div className="movie__slide">
        <div className='slide__overleft'></div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          centeredSlides
          grabCursor
          loop
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: {
              width: 208,
              slidesPerView: 1,
              spaceBetween: 15
            },
            // when window width is >= 640px
            640: {
              width: 508,
              spaceBetween: 20,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 708,
              slidesPerView: 3,
              spaceBetween: 130,
            },
          }}
        >
          {DB.map((item) => (
            <SwiperSlide>
              <Link to={`/series/${item.id}`} key={item.id}>
                <div className='poster'>
                  <img src={item.img} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='slide__overight'></div>
      </div>
    </div>
  )
}

export default Movie
