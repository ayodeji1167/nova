/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Navigation.css';
import AnimatedLink from '../AnimatedLink/AnimatedLink';
import { LiaArrowRightSolid } from 'react-icons/lia';

function DPItem({ name, image }: { name: string; image: string }) {
  return (
    <div className="dp-item">
      <div className="dp-item-f-wr">
        <div className="flex">
          <h2>{name}</h2>
          <LiaArrowRightSolid size="30px" />
        </div>
      </div>

      <div className="dp-itm-img">
        <img width={'100%'} height={'100%'} src={image} alt={name} />
      </div>
    </div>
  );
}
export default function DropDown() {
  return (
    <div className="header-dp">
      <div className="left-dp">
        <div className="flex">
          <div className="sub-circle"></div>
          <p>MENU</p>
        </div>

        <div className="nav-links">
          <AnimatedLink name="Home" />
          <AnimatedLink name="App" />
          <AnimatedLink name="About" />
          <AnimatedLink name="NOVA XYZ" />
          <AnimatedLink name="NOVA LITE" />
        </div>
      </div>
      <div></div>
      <div className="dp-item-wrp">
        <DPItem
          name={'NOVA XYZ'}
          image={
            'https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655f57a36420e55c82611f05_nova-speaker-xyz-teaser.webp'
          }
        />
        <DPItem
          name={'NOVA XYZ'}
          image={
            'https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/655f57a41893cf173f41a662_nova-speaker-lite-teaser.webp'
          }
        />
      </div>
    </div>
  );
}
