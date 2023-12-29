"use client";
import React from "react";
import "./Navigation.css";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="hambuger">
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
    </nav>
  );
}
