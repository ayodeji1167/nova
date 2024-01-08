/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import './Page3.css';

function Page3Item({
  icon,
  title,
  content,
}: {
  icon: string;
  content: string;
  title: string;
}) {
  return (
    <div className="p3-it">
      <div className="p3-it-top">
        <div>
          <img width={'100%'} height={'100%'} src={icon} alt="" />
        </div>
        <h3>{title}</h3>
      </div>

      <p className="p3-it-content">{content}</p>
    </div>
  );
}
export default function Page3() {
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
            trigger: '.page3-title',
            start: 'top 80%',
            end: 'bottom 90%',
          },
        }
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText('.page3-title h2');
  });
  return (
    <section className="page3">
      <div className="page3-title flex">
        <h2>Engineered for high-fidelity.</h2>
      </div>

      <div className="p3-center">
        <Page3Item
          title={'WiFi 6'}
          content={
            'Connect easily through WiFi 6 and stream highest-quality audio from anywhere in your home. The platforms you love now. And the ones you’ll love in the future.'
          }
          icon={
            'https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655dac62abc980317ff08a89_icon-wifi.svg'
          }
        />
        <Page3Item
          title={'Stereo pairing'}
          content={
            'Add more detail, depth and scale to your sound. With Stereo Pairing, you can wirelessly connect same speakers together to be more fully immersed in the music.'
          }
          icon={
            'https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655dac63b81334149f400b3e_icon-speaker.svg'
          }
        />
        <Page3Item
          title={'Adjustable sound'}
          content={
            'Use the NOVA app to adjust settings like bass, treble, amplifiers or midwoofers to enjoy rich sound and great detail that’s perfectly adapted for your home.'
          }
          icon={
            'https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655dac62d14f9d6e2cdbf6da_icon-soundwave.svg'
          }
        />
      </div>

      <div className="p3-img-btm">
        <img
          width={'100%'}
          height={'100%'}
          src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655dad3a0837b10d3fd15de9_nova-speaker-xyz-multiple.webp"
          alt=""
        />
      </div>
    </section>
  );
}
