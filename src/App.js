import React, { useRef, useEffect } from "react";
import "./App.css";
import { ReactComponent as Money } from "./money.svg";
import { ReactComponent as Tracker } from "./tracker.svg";
import gsap from "gsap";

function App() {

  const randomInt = Math.floor(Math.random() * 100) + 1;
  console.log(randomInt);

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
          <ul className="navList">
            <li className="navListItem">
              <button>Products</button>
            </li>
            <li className="navListItem">
              <button>Designers</button>
            </li>
            <li className="navListItem">
              <button>Company</button>
            </li>
            <li className="navListItem">
              <button>Pricing</button>
            </li>
            <li className="navListItem">
              <button>Support</button>
            </li>
          </ul>
          <button className="title">
            Jackpot<span className="osw"> osw</span>
          </button>
        </div>
      </header>
        <div>
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
      </footer>
    </div>
  );
}

export default App;
