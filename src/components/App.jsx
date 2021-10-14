import React, { useEffect, useState } from "react";
import Greeter from './Greeter';


const App = () => {
    const [username, setUsername] = useState(' ');
    const [loaded, setLoaded] = useState(false);
useEffect(() => {
    setTimeout(() => {
        setLoaded({loaded: true});
      }, [3000]);
})

function handleClick() {
    setLoaded({loaded: true});
}
if(!loaded){
return (
<><h1>Website Loading...</h1>
<button onClick={handleClick}>Please Click me!</button>
</>
)
}

    return(
        <div>
           <Greeter phrase="Howdy!" name="Brionna" /> 
           <Greeter phrase="Well Hello" name="Brionna" />
           <Greeter phrase="Hi" name = "Brionna" />
           <input value={username} onChange={e => setUsername(e.target.value)}/>
           <p>You are logging in as:{username} </p>
        </div>
    );
}

export default App;