'use client';
import React, { useRef, useState } from 'react';
import './Navigation.css';
import Image from 'next/image';
import DropDown from './DropDown';
import { useGSAP } from '@gsap/react';
import gsap, { Power1, Power2, Power4 } from 'gsap';

export default function Navigation() {
  const navRef = useRef(null);
  const tl = useRef<any>(null);
  const hamTl = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline();
      hamTl.current = gsap.timeline();
      const dropdownImages = document.querySelectorAll('.dp-itm-img');

      if (!open) {
        return;
      }

      hamTl.current
        .to(
          '.ham-line:nth-of-type(1)',
          { rotation: 45, y: 4, duration: 0.5, ease: 'power2.inOut' },
          '0'
        )
        .to(
          '.ham-line:nth-of-type(2)',
          { rotation: -45, y: -4, duration: 0.5, ease: 'power2.inOut' },
          '0'
        );

      // /================
      tl.current
        .to('.header-dp', {
          top: 0,
          ease: Power4.easeInOut,
          duration: 1.5,
        })

        .fromTo(
          '.header-dp .flex',
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 }
        )
        .fromTo(
          '.header-dp .nav-links .an-link ',
          { opacity: 0, x: '-200px' },
          { opacity: 1, x: '0', stagger: 0.08 },
          '<'
        )
        .fromTo(
          '.dp-item',
          {
            clipPath: 'inset(0px 1000px 0px 0px)',
          },
          {
            clipPath: 'inset(0px 0px 0px 0px)',
            ease: Power1.easeOut,
            duration: 1,
            stagger: '0.06',
          },
          '-=.5'
        )
        .to(dropdownImages, {
          bottom: (index: any) => (index === 1 ? 0 : '1rem'),
          delay: 0,
          ease: Power4.easeOut,
          stagger: '0.06',
          duration: 0.1,
        })
        .to('.dp-item .flex', {
          top: 0,
          ease: Power2.easeInOut,
          duration: 1,
        });
    },
    { scope: navRef, dependencies: [open] }
  );

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
    hamTl.current.reversed(!hamTl.current.reversed());
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
