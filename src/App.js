import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as Money } from './money.svg';
import gsap from 'gsap';

function App() {

  const wrapper = useRef(null);

  useEffect(() => {

    const floor = document.querySelectorAll('.floor');

    const tl = gsap.timeline( { defaults: { ease: 'power3.inOut' } } );

    gsap.set([], { opacity: 0 } );

    tl.fromTo(floor, { opacity: 0 }, { opacity: 1, repeat: -1 })  

  });

  return (
    <div ref={ wrapper }>
    <button className='newsletter'><b>Join to newsletter</b></button>
      <header>
        <div className='nav'>
          <button className='login'><b>Login with Steam </b>it's Free</button>
        </div>
        <div className='money'>
          <div>
            <h1 className='moneyTitle'>Jackpot
            <span className='floor'>_</span></h1>
            <button className='moneyButton'><b>Join now</b></button>
          </div>
          <Money className='moneyPhoto' />
        </div>
      </header>
      <article>
        <h1 className='conatinerTwoTitle'>Lorem ipsum</h1>
        <p className='containerTwoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </article>
      <footer>
        <ul>
          <li>Created by Jackpot company inc.</li>
        </ul>
      </footer>
    </div>
  );
}


export default App;