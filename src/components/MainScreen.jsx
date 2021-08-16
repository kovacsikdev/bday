// import React from 'react';
import { createSignal, onMount, onCleanup } from "solid-js";
import pic from "../assets/profile_pic.png";
import "./MainScreen.scss";

import { BdayInfo } from "./BdayInfo";

export const MainScreen = () => {
  onMount(() => {
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");

    const resizeCanvas = () => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
    };
    resizeCanvas();

    let newPos = 0;
    const height = 200;

    function AgeNum(xPos, yPos) {
      this.xPos = xPos;
      this.yPos = yPos;
    }

    AgeNum.prototype.update = function () {
      if (this.yPos >= height) {
        this.yPos = newPos;
      } else {
        this.yPos += 1;
      }

      if (this.yPos > 0 && this.yPos < height) {
        ctx.fillStyle = `rgba(183,110,121,${(height - this.yPos) * 0.01})`;
      } else {
        ctx.fillStyle = `rgba(0,0,0,0)`;
      }

      ctx.font = "48px sans-serif";

      ctx.fillText(
        "60!",
        myCanvas.width - myCanvas.width * this.xPos,
        this.yPos
      );
      // ctx.fillText(
      //   "60!",
      //   myCanvas.width - myCanvas.width * this.xPos + 40,
      //   this.yPos + 40
      // );
    };

    const numbers = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      numbers.push(
        new AgeNum(i / count + 0.1, Math.floor(Math.random() * -height - 150))
      );
    }

    const draw = () => {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].update();
      }
      window.requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas, false);

    draw();
  });

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
