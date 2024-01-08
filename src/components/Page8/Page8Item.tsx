/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
interface Page7ItemProps {
  image: any;
  title: string;
  date: string;
}
export default function Page8Item({ image, title, date }: Page7ItemProps) {
  const readMoreRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: readMoreRef });

  const handleHover = contextSafe(() => {
    gsap.to('.pt-itm-btn div', { x: 180, display: 'none' });
  });
  const handleUnhover = contextSafe(() => {
    gsap.fromTo('.pt-itm-btn div', { x: -100 }, { x: 0, display: 'block' });
  });
  return (
    <div className="p8-it">
      <div className="p8-it-img-cont">
        <img width={'100%'} height={'100%'} src={image} alt="img" />
      </div>
      <div className="p8-it-btm">
        <p>{date}</p>
        <h3>{title}</h3>

        <div
          ref={readMoreRef}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleUnhover()}
          className="pt-itm-btn"
        >
          <p>Read more</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
