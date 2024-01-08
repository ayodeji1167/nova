/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Page5.css';
import P5Item from './P5Item';
import {
  audio,
  connectivity,
  design,
  dimension,
} from '@/src/data/specification';

export default function Page5() {
  return (
    <section className="page5">
      <div className="p5-title">
        <div className="flex">
          <div className="sub-circle"></div>
          <h6> XYZ</h6>
        </div>
        <div>
          <div className="p5-top-img">
            <img
              src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/654f5f9fc2ebf709d9283c33_speaker-front.jpg"
              alt=""
              width={'100%'}
              height={'100%'}
            />
          </div>
          <h2>Specifications</h2>
        </div>
      </div>

      <div className="p5-content">
        <P5Item title="Audio" content={audio} />
        <P5Item title="Connectivity" content={connectivity} />
        <P5Item title="Dimension & weight" content={dimension} />
        <P5Item title="Design" content={design} />
      </div>
    </section>
  );
}
