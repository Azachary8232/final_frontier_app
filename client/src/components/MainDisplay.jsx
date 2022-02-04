import React, {useState} from 'react';

import neptune from '../img/planets/neptune.jpg';
import earth from '../img/planets/earth.jpg';
import mercury from '../img/planets/mercury.jpg';
import saturn from '../img/planets/saturn.jpg';

// import * as planet  from '../img/planets';
// source={All[`${imageValue}`]


const MainDisplay = (props) => {

    // DATA shared to and from MAIN
    const { displayData, setDisplayData, displayMode, setDisplayMode} = props;
    

    const selections = () => {  
        console.log(displayData.name)
        if( displayMode == "planets"){
            if(displayData.name == "Neptune"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">{displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            Distance around equator: {displayData.milesAround}(km)<br/>
                            Furthest distance from the Sun: {displayData.mostMileFromSun} (km)<br/>
                            Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Earth"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={earth} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">{displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            Distance around equator: {displayData.milesAround}(km)<br/>
                            Furthest distance from the Sun: {displayData.mostMileFromSun} (km)<br/>
                            Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Saturn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={saturn} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">{displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            Distance around equator: {displayData.milesAround}(km)<br/>
                            Furthest distance from the Sun: {displayData.mostMileFromSun} (km)<br/>
                            Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Mercury"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={mercury} style={{height: "auto", width: "100%"}} alt="" />
                        </div> 
                        <div>
                            <h6 className="displayName mt-5">{displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            Distance around equator: {displayData.milesAround}(km)<br/>
                            Furthest distance from the Sun: {displayData.mostMileFromSun} (km)<br/>
                            Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>       
                    </div>)} 
        }
        else if( displayMode == "issAstro"){
            if(displayData.name == "Kayla Barron"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Age: {displayData.age}<br/>
                            From: {displayData.from}<br/>
                            Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Ye Guangfu"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Age: {displayData.age}<br/>
                            From: {displayData.from}<br/>
                            Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Thomas Marshburn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Age: {displayData.age}<br/>
                            From: {displayData.from}<br/>
                            Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Wang Yaping"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Age: {displayData.age}<br/>
                            From: {displayData.from}<br/>
                            Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
        }
        else if( displayMode == "craft"){
            if(displayData.name == "NASA Shuttle Columbia"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Description: {displayData.description}<br/>
                            First Flight: {displayData.firstFlight}<br/>
                            Last Flight: {displayData.lastFlight}<br/>
                            Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "International Space Station"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Description: {displayData.description}<br/>
                            First Flight: {displayData.firstFlight}<br/>
                            Last Flight: {displayData.lastFlight}<br/>
                            Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "NASA Shuttle Atlantis"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Description: {displayData.description}<br/>
                            First Flight: {displayData.firstFlight}<br/>
                            Last Flight: {displayData.lastFlight}<br/>
                            Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "SpaceX Dragon"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div>
                            <h6 className="displayName mt-5">Description: {displayData.description}<br/>
                            First Flight: {displayData.firstFlight}<br/>
                            Last Flight: {displayData.lastFlight}<br/>
                            Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
        }


        else{
            return(
                <h1>NOT PLANETS</h1>)}
    }

    return(
        <div>
            {displayData 
            ? 
                selections()
            : 
                <h1>Loading</h1>
            }
        </div>
    )




}
export default MainDisplay;