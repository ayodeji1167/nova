'use client';
// import Image from 'next/image';
// import Navigation from './components/Navigation/Navigation';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
// import { gsap, Power1 } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import { useEffect } from 'react';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';
import Page6 from './components/Page6/Page6';
import Page7 from './components/Page7/Page7';
import Preloader from './components/Preloader/Preloader';
export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll({
  //       el: document.querySelector('.main') as any,
  //       smooth:true
  //     });
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="main">
      {/* <SmoothScroll /> */}
      <Preloader />
      <div className="remaining-app">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </div>
    </main>
  );
}
