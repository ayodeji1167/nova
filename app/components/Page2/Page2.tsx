/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import "./Page2.css";
export default function Page2() {
  useGSAP(() => {
    const animateText = (target: any, staggerValue = 0.02) => {
      new SplitType(target, { types: "lines,words" });

      gsap.fromTo(
        `${target} .word`,
        { y: 100, ease: Expo.easeOut, skewX: "-6" },
        {
          y: 0,
          skewX: "0",
          stagger: staggerValue,
          scrollTrigger: {
            trigger: target.includes("top-text") ? ".top-text" : ".bottom-text",
            start: "top 90%",
            end: "bottom 90%",
          },
        },
      );
    };
    gsap.registerPlugin(ScrollTrigger);
    animateText(".top-text p");
    animateText(".page2 .bottom-text div > p");
    const box = document.querySelector(".floating-img") as any;

    gsap.fromTo(
      box,
      { y: 220 },
      {
        y: 0,
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "bottom 100%",
          scrub: 2,
        },
      },
    );
  });

  return (
    <section className="page2">
      <div className="top-text">
        <div className="flex">
          <div className="sub-circle"></div>
          <h6>EXCELLENCE EVOLVED</h6>
        </div>
        <p>
          At NOVA we deliver the True Sound experience by infusing top-notch
          audio technology into our products. This ensures you hear music with
          the utmost accuracy and realism of the original recording — just pure,
          authentic sound.
        </p>
      </div>

      <div className="center-content">
        <div className="xyz flex">
          <p>X</p>
          <p>Y</p>
          <p>Z</p>
        </div>
      </div>

      <div className="floating-img">
        <img
          width={"33%"}
          height={"100%"}
          src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/6554d9e7d21d8d6f7be931c0_nova-speaker-xyz-frontview-p-800.webp"
          alt=""
        />
      </div>
      <div className="bottom-text">
        <div>
          <p>NOVA XYZ</p>
        </div>

        <p>
          The XYZ is a smart speaker reimagined for the streaming age. Its
          minimal form combines high-resolution stereo sound with a
          comprehensive range of smart, connected features.
        </p>
      </div>
    </section>
  );
}
