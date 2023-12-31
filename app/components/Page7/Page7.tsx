/* eslint-disable no-prototype-builtins */

'use client';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { swiperData } from '@/app/data/swiper';
import Page7Item from './Page7Item';
import { useRef, useState } from 'react';

import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import './Page7.css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export default function Page7() {
  useGSAP(() => {
    const animateText = (target: any, staggerValue = 0.04) => {
      new SplitType(target, { types: 'lines,words' });

      gsap.fromTo(
        `${target} .word`,
        { y: 150, ease: Expo.easeOut, skewX: '-6' },
        {
          y: 0,
          skewX: '0',
          stagger: staggerValue,
          scrollTrigger: {
            trigger: '.page7-title',
            start: 'top 80%',
            end: 'bottom 90%',
          },
        }
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText('.page7-title h2');
  });

  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const swipperBullet = useRef(null);
  const swiperRef = useRef<any>(null);
  const [slidePosition, setSlidePosition] = useState({
    isBegining: true,
    isEnd: false,
  });

  const setSwiperRef = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  const updatePosition = (swiper: SwiperClass) => {
    if (!swiper) return;
    if (swiper.hasOwnProperty('activeIndex')) {
      setSlidePosition({
        isBegining: !swiper.activeIndex,
        isEnd: swiperData.length - 3 === swiper.activeIndex,
      });
    }
  };

  return (
    <section className="page7">
      <div className="page7-title">
        <h2>Outstanding speaker with powerful features.</h2>
      </div>

      <div className="p7-btm">
        <div>
          <div className="p7-btn-wrap">
            <button
              style={{ opacity: `${slidePosition.isBegining ? '0.3' : '1'}` }}
              ref={prevButton}
            >
              <LiaArrowLeftSolid color="white" size="20px" />
            </button>
            <button
              style={{ opacity: `${slidePosition.isEnd ? '0.3' : '1'}` }}
              ref={nextButton}
            >
              <LiaArrowRightSolid color="white" size="20px" />
            </button>
          </div>

          <div ref={swipperBullet} className="scroll-bar">
            <div className="bullet-ele"></div>
          </div>
        </div>
      </div>

      <div className="custom-swiper">
        <Swiper
          cssMode={true}
          speed={300}
          slidesPerView={3}
          navigation={{
            prevEl: prevButton.current,
            nextEl: nextButton.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper!.params!.navigation!.prevEl! = prevButton.current;
            swiper!.params!.navigation!.nextEl = nextButton.current;
          }}
          onSwiper={setSwiperRef} // Set the swiper reference when Swiper instance is available
          onSlideChange={updatePosition}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          mousewheel={true}
          keyboard={true}
          pagination={{
            el: '.page7 .scroll-bar',
            bulletActiveClass: 'bullet-active',
            bulletClass: 'bullet',
            bulletElement: 'bullet-ele',
            clickable: false,
          }}
          style={{ background: 'yelflow', overflowX: 'hidden' }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: '4%',
            },
            768: {
              slidesPerView: 2,
              spaceBetween: '4%',
            },
            992: {
              slidesPerView: 3,
              spaceBetween: '2%',
            },
          }}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={item.index + '' + index}>
              <Page7Item {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
