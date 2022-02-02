import React, {useState} from 'react';

import Main from '../views/Main';

import neptune from '../img_planets/neptune.jpg';
import earth from '../img_planets/earth.jpg';
import mercury from '../img_planets/mercury.jpg';
import saturn from '../img_planets/saturn.jpg';




const PlanetData = (props) => {

    const [planets, setPlanets] = useState()
    console.log(planets);

    const newPlanets = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image : earth
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image : neptune
        },
        {
            name: "Random Name #3",
            description: "Hello Dolly!",
            image : mercury
        },
        {
            name: "Random Name #3",
            description: "Hello Dolly!",
            image : saturn
        }
    ]

    setPlanets(newPlanets);





    return  

    <>{planets}</>

} 
export default PlanetData;