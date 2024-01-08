import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

export default function FooterNavItem({ name }: { name: string }) {
  const navRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: navRef });

  const handleHover = contextSafe(() => {
    gsap.to('.nav-itm-btn div', { x: 180, display: 'none' });
  });
  const handleUnhover = contextSafe(() => {
    gsap.fromTo('.nav-itm-btn div', { x: -100 }, { x: 0, display: 'block' });
  });
  return (
    <div
      ref={navRef}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleUnhover()}
      className="nav-itm-btn"
      style={{ cursor: 'pointer' }}
    >
      <p>{name}</p>
      <div></div>
    </div>
  );
}
