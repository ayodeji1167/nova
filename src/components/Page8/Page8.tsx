'use client';
import React from 'react';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

import './Page8.css';
import { newsData } from '@/src/data/news';
import Page8Item from './Page8Item';
export default function Page8() {
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
            trigger: '.page8-title',
            start: 'top 80%',
            end: 'bottom 90%',
          },
        }
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText('.page8-title h2');
  });
  return (
    <section className="page8">
      <div className="page8-title">
        <h2>News & Informations</h2>
      </div>

      <div className="p8-btm">
        {newsData.map((item) => (
          <Page8Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
