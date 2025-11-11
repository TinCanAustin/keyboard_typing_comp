'use client';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import './style.css';

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(0);

  useEffect(()=>{
    setWidth(window.innerWidth/3);
    setHeight(window.innerHeight/4);
    setMounted(true);
  }, []);

  if(!mounted){
    return null;
  }

  return (
    <>
      <div id="home-page" className="full-page-element">
        <Image
          src={resolvedTheme == "dark" ? "/placementLogo-Dark.png" : "/placementLogo-Light.png"}
          alt="Logo"
          width={width}
          height={height}
          priority={true}
        />
        <div id="select-hold">
          <button id="local-btn" className="select-btn">Local Comp</button>
          <button id="online-btn" className="select-btn">Online Comp</button>
        </div>
      </div>
    </>
  );
}
