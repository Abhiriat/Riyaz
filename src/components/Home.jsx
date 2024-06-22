import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="container1">
      <h1>Welcome to the Quiz Challenge!</h1>
      <p>Are you ready to test your knowledge? Step up to the challenge and see how much you really know with our exciting quiz. From trivia buffs to enthusiasts, there's something for everyone!</p>
      <h2>How it works:</h2>
      <ul>
        <li>You will be presented with a series of questions covering various topics.</li>
<li> Choose the correct answer from the options provided.</li>
<li>Each correct answer earns you points, and your progress will be tracked.</li>
<li>At the end of the quiz, see how well you've performed</li>
      </ul>
      <p>Click the button below to begin the quiz adventure. Good luck!</p>
      <Link to="/question" className='get'>Get Started</Link>
    </div>
    </>  )
}

export default Home