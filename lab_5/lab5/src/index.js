import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import parrot from './img/img1.jpg';
import User from './comment';
// import img
import avatar1 from './img/avatar3.png'
import avatar2 from './img/avatar2.webp'
import avatar3 from './img/avatar1.png'

// create constant in app using function component
const App = function(){
  // we can add variables from outside the return
  let fullname = "Giorgia Beavers";
  function greetings(){
    return "Welcome "
  }
  return(
    // I will always need an element as container we will use div for this
    <div>
      <h1 style={{color:"magenta" , textAlign:"center"}}>{greetings()} {fullname} to React JS</h1>
      {/* in this case we can have inline style */}
      <p style={{textAlign:'center'}}>Now let's get familiar with JSX elements</p>
      <figure>
        <img src={parrot} alt='' className='introimg'/>
      </figure>
      {/* card */}
      <section className="cardcontainer">
        <User image={avatar1} name="Maria" date="07/08/2023" comments="Great job!" />
        <User image={avatar2} name="Herbie" date="03/08/2024" comments="Everyone should know about them!" />
        <User image={avatar3} name="Jason" date="07/03/2024" comments="Can't believe it!" />
      </section>
    </div>

  )
}

//  the root will be rendered in the doc that has the id = 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

