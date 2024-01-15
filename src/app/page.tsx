'use client';

import { useEffect } from 'react';
import Page5 from '../components/Page5/Page5';
import Page6 from '../components/Page6/Page6';
import Page7 from '../components/Page7/Page7';
import Page9 from '../components/Page9/Page9';
import Page8 from '../components/Page8/Page8';
import Page1 from '../components/Page1/Page1';
import Page2 from '../components/Page2/Page2';
import Page3 from '../components/Page3/Page3';
import Page4 from '../components/Page4/Page4';
import Preloader from '../components/Preloader/Preloader';
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="main">
      <Preloader />
      <div className="remaining-app">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
      </div>
    </main>
  );
}
