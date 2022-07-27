import './App.scss';
import LifeBubbles from './LifeBubbles';
import React, {useState} from 'react'

function App() {

  const [focusBubble, setBubble] = useState(null);

  let displayWelcomeClass = "welcome"
  if (focusBubble){

    displayWelcomeClass = "welcome-hide"
  }


  return (
    <div className="App">
      <header className="App-header">
        Bradford Condon, PhD
      </header>
      <div id="welcome-container">
        <div id="welome-card" className={displayWelcomeClass}>
          
      <div id="welcome-text"><p>{"Hi there.  My name is Bradford.  I'm a fullstack developer, team lead, manager, product owner, scientist, father, gamer, cryptid enthusiast."}</p>
      <p>{"This website used to be a blog and host my CV.  I've drifted far enough from academia that I don't think I need any of that any more."}</p>
      <p>{"Instead, I'll take a break from my usual management, infrastructure, and backend tasks to mess around with front-end development."}</p>


      </div>

      </div>

      <LifeBubbles 
        focusBubble={focusBubble}
        setBubble={setBubble}
      />
      </div>
    </div>
  );
}

export default App;
