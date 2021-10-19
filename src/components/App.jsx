import React, { useState } from "react";
import './chirp.css';
import Tweet from './Tweet';

let myChirp = [];
const App = () => {
const [username, setUsername] = useState('');
const [someText, setsomeText] = useState(' ');


function handleClick(e) {
    e.preventDefault();
    myChirp.push({ 'myName': username, 'myChirp': someText });
    setUsername('');
    setsomeText('');
}

function List() {
    const itemList = myChirp.map((item, index) => (
      <li key={index}>
          <div className="card"  id="beDone">
          <div className="card-header">
          {item.myName}
        </div>
        <div className="card-body">
          <p className="card-text">{item.myChirp}</p>
          </div>
          </div>
      </li>
    ));
    return (
      <div>
        <ol style={{ listStyleType: "none" }}>{itemList}</ol>
      </div>
    );
  }
  

    return (
        <>
        <h1 id="title">What's up my peoples!!!</h1>
        <form>
        <div id="superDome">
            
            
            <label>
                Username
            <input value={username} onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                whatUSay
            <input value={someText} onChange={e => setsomeText(e.target.value)}/>
            </label>
            
            <button id="instaChirp" onClick={handleClick}>Submit</button>
        </div>
        </form>
 
    <Tweet />
    <List />
    </>
    );

}

export default App;