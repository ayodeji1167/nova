'use client';
import React from 'react';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import AnimatedLink from '../AnimatedLink/AnimatedLink';
import './Page9.css';

export default function Page9() {
  useGSAP(() => {
    const animateText = (target: any, staggerValue = 0.04) => {
      new SplitType(target, { types: 'chars' });

      gsap.fromTo(
        `${target} .char`,
        { y: -350, ease: Expo.easeOut },
        {
          y: 0,
          stagger: staggerValue,
          scrollTrigger: {
            trigger: '.ft-logo',
            start: 'top 80%',
            end: 'bottom 90%',
          },
        }
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText('.ft-logo h1');
  });
  return (
    <footer className="page9">
      <div className="ft-top">
        <div className="ft-logo">
          <h1>NOVA</h1>
        </div>
        <div className="ft-navs">
          <AnimatedLink name="Home" />
          <AnimatedLink name="NOVA XYZ" />
          <AnimatedLink name="NOVA Lite" />
          <AnimatedLink name="App" />
          <AnimatedLink name="About" />
        </div>

        <div className="btt">
          <AnimatedLink name="Back to Top" />
        </div>
      </div>

      <div className="ft-btm">
        <div className="ft-line"></div>
        <div className="ft-small">
          <p>2024 Nova Speaker.</p>
          <p>Design: Lukas Rudrof</p>
        </div>
      </div>
    </footer>
  );
}
