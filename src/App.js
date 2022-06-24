import { useEffect } from "react";
import React from "react";
import car from "../src/assets/car 1.png";
import charkhaqab from './assets/charkh aqab.png';
import charkhjolo from '../src/assets/charkh jolo.png';

const App = () => {
    useEffect(()=>{
        const speed = getComputedStyle(document.documentElement).getPropertyValue('--speed','--speedc')
    },[])

    const setSpeed = (speed)=> {
        document.documentElement.style.setProperty('--speed',speed)
    }

    return(
    <div>
        
        <div className="c">

               <button className="buttonh" onClick={()=> setSpeed('1.5s')}>High Speed</button>
               <button className="buttonm" onClick={()=> setSpeed('3s')}>Medium Speed</button>
               <button className="buttonl" onClick={()=> setSpeed('6s')}>Low Speed</button>

        </div>

    <div class="night">
        <div class="surface"></div>
        <div class="car">
            <img src= {car} alt="car"/>
        </div>
        <div class="charkh1">
            <img src={charkhaqab} alt="charkh aqab"/>
        </div>
        <div class="charkh2">
            <img src={charkhjolo} alt="charkh jolo"/>
        </div>
    </div>
        
    </div>
    )

}

export default App;