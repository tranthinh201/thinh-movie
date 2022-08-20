import React, { useEffect, useState } from 'react';
import apiConfig from '../../../api/apiConfig';
import{ BsBookmarkCheck, BsFillStarFill} from 'react-icons/bs'
import './Card.scss'
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Card({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                
                modules={[Pagination]}
                className="mySwiper"
          >
            {
              data.map((item, index) => (
                  <SwiperSlide className="card" key={item.id}>
                      <img src={apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)} alt="https://dmitryvolkov.me/demo/flixtv/main/img/home/1.jpg" className='card__image' />
                      <div className="card__icon">
                      <div className="card__iconn">
                              <div className="card__icon-bookmark">
                                  <BsBookmarkCheck/>
                              </div>
                              <div className="card__icon-rate">
                                  <BsFillStarFill/>
                                  <span>{item.vote_average}</span>
                              </div>
                      </div>
                      </div>
                      <div className="card__name">
                          <h2 className="card__name-movie">
                              {item.title}
                          </h2>
                          <ul>
                              <li>Free</li>
                              <li>{item.original_title}</li>
                              <li>{item.release_date.split("-")[0]}</li>
                          </ul>
                      </div>
                  </SwiperSlide>
              ))
             }
          </Swiper>
        </>
    );
}

export default Card;