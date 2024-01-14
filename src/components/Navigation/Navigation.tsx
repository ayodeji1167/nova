'use client';
import React, { useRef, useState } from 'react';
import './Navigation.css';
import Image from 'next/image';
import DropDown from './DropDown';
import { useGSAP } from '@gsap/react';
import gsap, { Power1, Power4 } from 'gsap';

export default function Navigation() {
  const navRef = useRef(null);
  const tl = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline();

      if (!open) {
        return;
      }
      tl.current
        .to('.header-dp', {
          top: 0,
          ease: Power4.easeInOut,
          duration: 1.5,
        })
        .to(
          '.ham-line:nth-of-type(1)',
          { rotation: 45, y: 4, duration: 0.5, ease: 'power2.inOut' },
          '<'
        )
        .to(
          '.ham-line:nth-of-type(2)',
          { rotation: -45, y: -4, duration: 0.5, ease: 'power2.inOut' },
          '<'
        )
        .fromTo('.header-dp .flex', { opacity: 0 }, { opacity: 1 })
        .fromTo(
          '.header-dp .nav-links .an-link ',
          { opacity: 0, x: '-200px' },
          { opacity: 1, x: '0', stagger: 0.08 },
          '<'
        )
        .fromTo(
          '.dp-item',
          {
            clipPath: 'inset(0px 1000px 0px 0px)', // Initial clip (fully visible on the right)
          },
          {
            clipPath: 'inset(0px 0px 0px 0px)', // Final clip (fully visible on the left)
            ease: Power1.easeOut,
            duration: 1,
            stagger: '0.06',
          },
          '-=.5'
        )
        .to('.dp-itm-img', {
          bottom: '0',
          delay: 0,
          ease: Power4.easeOut,
          stagger: '0.06',
          duration: 0.1,
        })
        .to(
          '.dp-item .flex',
          {
            y: 0,
          },
          '<'
        );
    },
    { scope: navRef, dependencies: [open] }
  );

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <nav ref={navRef}>
      <div className="nav-wrapper">
        <div
          className="hambuger"
          onClick={() => {
            setOpen(true);
            toggleTimeline();
          }}
        >
          <div className="ham-line"></div>
          <div className="ham-line"></div>
        </div>

        <div>
          <Image
            width={150}
            height={40}
            src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/6561cd7055711beeeed6eff6_nova-speaker-logo.svg"
            alt=""
          />
        </div>
        <button>Reserve now</button>
      </div>
      <DropDown />
    </nav>
  );
}
