/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import './Page4.css';
export default function Page4() {
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
            trigger: '.p4-title',
            start: 'top 80%',
            end: 'bottom 90%',
          },
        }
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText('.p4-title h2');
  });
  return (
    <section className="page4">
      <div className="p4-title">
        <h2>Exceptional design meets best-in-class sound.</h2>
      </div>

      <div className="top-text">
        <div className="flex">
          <div className="sub-circle"></div>
          <h6> DESIGN</h6>
        </div>
        <p>
          Crafted using premium materials, such as precision cut, refined
          aluminum & carbon fiber reinforced polymer. Each element is chosen for
          its performance properties, aesthetics and special textural qualities.
          Drawing inspiration from Scandinavian minimalism, NOVA Speaker are the
          perfect balance between elegance and minimal design.
        </p>
      </div>

      <div className="p4-img-btm">
        <img
          width={'100%'}
          height={'100%'}
          src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655da90763f0529b22d25014_nova-speaker-xyz-sideview.webp"
          alt=""
        />
      </div>
    </section>
  );
}
