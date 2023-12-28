/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Page1.css';
import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
export default function Page1() {
  useGSAP(() => {
    const text = new SplitType('.big-nova p', { types: 'chars' });
    let tl = gsap.timeline({});
    tl.to('.img-wrapper', {
      width: '56vw',
      ease: Power1.easeIn,
    },"+=2.5");
    tl.to('.big-nova .char', { y: 0, stagger: 0.06,duration:1 },'<' );
  });
  return (
    <div className="page1">
      <div className="img-wrapper">
        <img
          src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/6554d831b606819d4b4b8c6a_nova-speaker-xyz-front-p-1600.webp"
          alt=""
        />
      </div>
      <div>
        <Navigation />
      </div>
      <div className="content">
        <div>
          <h1>Experience immersive sound at your home.</h1>
          <button className="learn-more-button">
            <div className="baba">
              <div className="button-wrapper">
                <img
                  src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655080c8308e88ddc854003e_arrow-right.svg"
                  alt=""
                />
                <div>
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="big-nova">
          <p>NOVA</p>
        </div>
      </div>
    </div>
  );
}
