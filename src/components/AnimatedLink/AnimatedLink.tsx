import React, { useRef } from 'react';
import './AnimatedLink.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function AnimatedLink({ name }: { name: string }) {
  const navRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: navRef });

  const handleHover = contextSafe(() => {
    gsap.fromTo(
      '.an-link div',
      { x: -180, display: 'block' },
      { x: 0, display: 'block' }
    );
  });
  const handleUnhover = contextSafe(() => {
    gsap.to('.an-link div', { x: 180, display: 'none' });
  });
  return (
    <div
      ref={navRef}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleUnhover()}
      className="an-link"
      style={{ cursor: 'pointer' }}
    >
      <p>{name}</p>
      <div></div>
    </div>
  );
}
