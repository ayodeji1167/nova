'use client';
import React, { useRef, useState } from 'react';
import './Navigation.css';
import Image from 'next/image';
import DropDown from './DropDown';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
        })
        .to(
          '.ham-line:nth-of-type(1)',
          { rotation: 45, y: 4.5, duration: 0.5, ease: 'power2.inOut' },
          '<'
        )
        .to(
          '.ham-line:nth-of-type(2)',
          { rotation: -45, y: -4.5, duration: 0.5, ease: 'power2.inOut' },
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
