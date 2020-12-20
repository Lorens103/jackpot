import React, { useRef, useEffect } from "react";
import "./App.css";
import { ReactComponent as Money } from "./money.svg";
import gsap from "gsap";

function App() {

  const randomInt = Math.floor(Math.random() * 100) + 1;
  console.log(randomInt);

function Snake() {
  window.addEventListener("load", () => {
    let snake, move, nextMove, points, apple, running;
    const ctx = document.getElementById("snake-canvas").getContext("2d");

    setDefault();
    addKeyDownEventListener();
    setInterval(renderFrame, 150);

    function renderFrame() {
      if (running) {
        if (nextMove.x !== -move.x || nextMove.y !== -move.y) {
          move = nextMove;
        }
        snake.push({
          x: processBound(getHead().x + move.x),
          y: processBound(getHead().y + move.y),
        });
        if (
          snake.filter(
            (square) => square.x === getHead().x && square.y === getHead().y
          ).length >= 2
        ) {
          setDefault();
        } else {
          console.log(getHead());
          if (getHead().x === apple.x && getHead().y === apple.y) {
            points++;
            apple = generateAppleLocation();
          }
          points <= 0 ? snake.shift() : points--;
        }
      }
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "green";
      snake.forEach((square) =>
        ctx.fillRect(square.x * 45, square.y * 45, 45, 45)
      );
      ctx.fillStyle = "red";
      ctx.fillRect(apple.x * 45, apple.y * 45, 45, 45);
    }
    function getHead() {
      return snake[snake.length - 1];
    }
    function processBound(xOrY) {
      if (xOrY > 19) {
        return 0;
      } else if (xOrY < 0) {
        return 19;
      }
      return xOrY;
    }
    function setDefault() {
      snake = [{ x: 10, y: 10 }];
      [move, nextMove] = Array(2).fill({ x: 0, y: 0 });
      points = 2;
      running = false;
      apple = generateAppleLocation();
    }
    function generateAppleLocation() {
      let location;
      do {
        location = { x: generateRandomNumber(19), y: generateRandomNumber(19) };
      } while (
        snake.filter(
          (square) => square.x === location.x && square.y === location.y
        ).length > 0
      );
      return location;
    }
    function generateRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    function addKeyDownEventListener() {
      window.addEventListener("keydown", (e) => {
        if (e.code.startsWith("Arrow")) {
          e.preventDefault();
          running = true;
        }
        switch (e.code) {
          case "ArrowLeft":
            nextMove = { x: -1, y: 0 };
            break;
          case "ArrowRight":
            nextMove = { x: 1, y: 0 };
            break;
          case "ArrowDown":
            nextMove = { x: 0, y: 1 };
            break;
          case "ArrowUp":
            nextMove = { x: 0, y: -1 };
        }
      });
    }
  });
}

Snake();

  const wrapper = useRef(null);

  useEffect(() => {
    const floor = document.querySelectorAll(".floor");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.set(
      [
        /* gsap animations elements in "" */
      ],
      { opacity: 0 }
    );

    tl.fromTo(floor, { opacity: 0 }, { opacity: 1, repeat: -1 });
  });

  return (
    <div ref={wrapper}>
      <button className="newsletter">
        <b>Join to newsletter</b>
      </button>
      <header>
        <div className="nav">
          <button className="title">
            Jackpot<span className="osw"> osw</span>
          </button>
          <button className="login">
            <b>Login with Steam </b>it's Free
          </button>
        </div>
        <div className="headerText">
          <h1 className="headerTitle">What is Jackpot?!</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="money">
          <div>
            <h1 className="moneyTitle">
              Play
              <span className="floor">_</span>
              now
            </h1>
            <button className="moneyButton">
              <b>Join now</b>
            </button>
          </div>
          <Money className="moneyPhoto" />
        </div>
      </header>
      <article>
        <h1 className="conatinerTwoTitle">Lorem ipsum</h1>
        <p className="containerTwoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <canvas id="snake-canvas" width="900" height="900"></canvas>
      </article>
      <footer>
        <ul>
          <li>Created by Jackpot OSW. company inc.</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
