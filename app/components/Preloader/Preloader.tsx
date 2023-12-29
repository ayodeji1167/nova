"use client";
import React from "react";
import Image from "next/image";
import { gsap, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";

import "./Preloader.css";
export default function Preloader() {
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(".line", {
      height: "30px",
      duration: 0.8,
      ease: Power1.easeIn,
    });
    tl.fromTo(".logo img", { x: 300 }, { x: 0, duration: 0.8 });
    tl.fromTo(".speaker img", { x: -300 }, { x: 0, duration: 0.8 }, "-=.3");
    tl.to(".logo img", { y: 300, ease: Power1.easeIn, duration: 0.9 }, "+=.2");
    tl.to(".speaker img", { y: 300, ease: Power1.easeIn, duration: 0.9 }, "<");
    tl.to(
      ".line",
      {
        height: "0",
        ease: Power1.easeIn,
      },
      "<",
    );
    tl.fromTo(
      ".preloader",
      {
        clipPath: "inset(0 0 0px 0)",
      },
      {
        clipPath: "inset(0 0 1000px 0)",
        duration: 1,
        ease: Power1.easeInOut,
      },
      "<",
    );
  });
  return (
    <div className="preloader">
      <div className="wrapper">
        <div className="logo">
          <Image
            width={90}
            height={100}
            src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/654dfd2687af46540eb910ef_nova-brand-dark.svg"
            alt=""
          />
        </div>

        <div className="line"></div>
        <div className="speaker">
          <Image
            width={100}
            height={100}
            src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/654dfd267d02688b1ccaeb8e_nova-speaker-dark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
