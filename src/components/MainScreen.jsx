import React from 'react';
import confetti from '../lib/confetti.js';
import pic from '../assets/profile_pic.jpg';
import './MainScreen.scss';

import { BdayInfo } from './BdayInfo';

export const MainScreen = () => {
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  // const startConfetti = () => {
  //   // https://github.com/catdad/canvas-confetti
  //   const myCanvas = document.getElementById('myCanvas');
  //   const myConfetti = confetti.create(myCanvas, {
  //     resize: true,
  //   });

  //   const resizeCanvas = () => {
  //     myCanvas.width = window.innerWidth;
  //     myCanvas.height = window.innerHeight;
  //   };

  //   const throwConfetti = () => {
  //     myConfetti({
  //       particleCount: 1,
  //       startVelocity: 0,
  //       angle: 270,
  //       ticks: 60,
  //       origin: {
  //         x: Math.random(),
  //         y: 0,
  //       },
  //       colors: ['#666666'],
  //       shapes: ['circle'],
  //       // gravity: randomInRange(0.4, 0.6),
  //       gravity: 0.95,
  //       drift: randomInRange(-0.4, 0.4),
  //     });

  //     setTimeout(() => {
  //       window.requestAnimationFrame(throwConfetti);
  //     }, 250);
  //   };

  //   window.addEventListener('resize', resizeCanvas, false);

  //   resizeCanvas();
  //   throwConfetti();
  // };

  React.useEffect(() => {
    // console.log('START CONFETTI');
    // startConfetti();
    // https://github.com/catdad/canvas-confetti
    const myCanvas = document.getElementById('myCanvas');
    const myConfetti = confetti.create(myCanvas, {
      resize: true,
    });

    const resizeCanvas = () => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
    };

    const throwConfetti = () => {
      myConfetti({
        particleCount: 1,
        startVelocity: 0,
        angle: 270,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: 0,
        },
        colors: ['#666666'],
        shapes: ['circle'],
        // gravity: randomInRange(0.4, 0.6),
        gravity: 0.95,
        drift: randomInRange(-0.4, 0.4),
      });

      setTimeout(() => {
        window.requestAnimationFrame(throwConfetti);
      }, 250);
    };

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
    throwConfetti();
  }, []);

  return (
    <div className="MainScreen">
      <canvas id="myCanvas"></canvas>
      <h3>You're invited to a birthday party for</h3>
      <h1>LISA</h1>
      <img src={pic} alt="LISA" />
      <BdayInfo />
    </div>
  );
};
