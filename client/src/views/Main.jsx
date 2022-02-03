import React, { useEffect, useState } from 'react'
import '../css/style.css';

import PlanetData from '../components/PlanetData';
import NasaData from '../components/NasaData';
import IssData from '../components/IssData';
import CraftData from '../components/CraftData';


const Main = (props) => {


    const [planet, setPlanet] = useState("TEST");
    const [isChanged, setIsChanged] = useState(false);

    const [displayData, setDisplayData] = useState({});






    return (
        <div className='container2'>
            <div className='navBar'>
                {/* NavBar Component */}
            </div>
            <div className="mainContainer flex spaceBetween py-3">
                {/* Container */}
                <div className="column">
                    {/* left column */}
                    <div className="box">
                        {/* Upper Box */}
                        <div>
                            {/* Carousel Component */}
                            <PlanetData displayData={displayData}  />
                        </div>
                    </div>
                    <div className="box my-5">
                        {/* Lower Box */}
                        <div>
                            {/* Carousel Component */}
                            <IssData planet={planet} setPlanet={setPlanet} isChanged={isChanged} setIsChanged={setIsChanged}/>
                        </div>
                    </div>
                </div>
                <div className="display">
                    {/* display */}
                </div>
                <div className="column">
                    {/* right column */}
                    <div className="box">
                        {/* Upper Box */}
                        <div>
                            {/* Carousel Component */}
                            <CraftData planet={planet} setPlanet={setPlanet} isChanged={isChanged} setIsChanged={setIsChanged}/>
                        </div>
                    </div>
                    <div className="box my-5">
                        {/* Lower Box */}
                        <div>
                            {/* Carousel Component */}
                            <NasaData planet={planet} setPlanet={setPlanet} isChanged={isChanged} setIsChanged={setIsChanged}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Main;