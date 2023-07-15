import React, {useEffect, useState} from "react";
import "../index.css";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import opencv from "../assets/opencv.png";

export default function Skills() {

  const [isAnimated, setIsAnimated] = React.useState(false);

  React.useEffect(() => {
    // Trigger the animation after a delay to allow for rendering
    const timeoutId = setTimeout(() => {
      setIsAnimated(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      level: 80,
    },
    {
      id: 2,
      src: css,
      level: 40,
    },
    {
      id: 3,
      src: javascript,
      level: 50,
    },
    {
      id: 4,
      src: react,
      level: 60,
    },
    {
      id: 5,
      src: bootstrap,
      level: 60,
    },
    {
      id: 6,
      src: tailwind,
      level: 70,
    },
    {
      id: 7,
      src: nodejs,
      level: 30,
    },
    {
      id: 8,
      src: express,
      level: 30,
    },
    {
      id: 9,
      src: mongodb,
      level: 10,
    },
    {
      id: 10,
      src: c,
      level: 70,
    },
    {
      id: 11,
      src: cpp,
      level: 80,
    },
    {
      id: 12,
      src: python,
      level: 40,
    },
    {
      id: 13,
      src: opencv,
      level: 30,
    },
  ];



  return (
    <div name="skills" className="w-full h-full mt-10">
      <div className="max-w-screen-xl mx-auto px-2 flex flex-row justify-center w-full h-full text-white">

        {/* <span className="w-2/5 mr-56">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </span> */}

        <span className="flex flex-col gap-3">
          {techs.map(({ id, src, level }) => (
            <div key={id} className="flex items-center w-full bg-transparent">
              <img src={src} alt="" className="h-8 w-8 mx-4" />
              <div className="w-96 h-5 bg-transparent">
                <div className="h-full bg-cyan-400 skill-bar ${isAnimated ? 'animated' : ''}`}" style={{width: `${level}%`} }>
                <div className="text-black pl-3">{level} %</div>
                  {/* {level} % */}
                </div>
              </div>
              
              
            </div>
          ))}
        </span>

      </div>
    </div>
  );
};