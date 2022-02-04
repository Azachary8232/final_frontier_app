import React, {useState} from 'react';

import { Atlantis, Columbia, ISS, SpaceX, Neptune, Earth, Mercury, Saturn, AlanShepard, BuzzAldrin, NeilArmstrong, SallyRide, KaylaBarron, ThomasMarshburn, WangYaping, YeGuangfu, SpaceCat } from '../img/importImgs';



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
                        <div className="mt-3">
                            <img src={Neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Earth"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Earth} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Saturn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Saturn} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Mercury"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Mercury} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)} 
        }
        else if( displayMode == "issAstro"){
            if(displayData.name == "Kayla Barron"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={KaylaBarron} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Ye Guangfu"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={YeGuangfu} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Thomas Marshburn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={ThomasMarshburn} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Wang Yaping"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={WangYaping} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
        }
        else if( displayMode == "craft"){
            if(displayData.name == "NASA Shuttle Columbia"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Columbia} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "International Space Station"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={ISS} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "NASA Shuttle Atlantis"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Atlantis} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "SpaceX Dragon"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={SpaceX} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
        }
        else if( displayMode == "nasaAstro"){
            if(displayData.name == "Alan Shepard"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={AlanShepard} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Buzz Aldrin"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={BuzzAldrin} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Neil Armstrong"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={NeilArmstrong} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Sally Ride"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={SallyRide} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
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
            <img src={SpaceCat} style={{height: "auto", width: "100%"}} alt="" />
        }
        </div>
    )




}
export default MainDisplay;