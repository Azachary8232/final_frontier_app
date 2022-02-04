import '../css/style.css';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import alanShepard from '../img/nasa_astro/alan_shepard.jpg';
import buzzAldrin from '../img/nasa_astro/buzz_aldrin.jpg';
import neilArmstrong from '../img/nasa_astro/neil_armstrong.jpg';
import sallyRide from '../img/nasa_astro/sally_ride.jpg';




const NasaData = (props) => {

    // DATA shared to and from MAIN
    const { setDisplayData, displayData, displayMode, setDisplayMode} = props;



    let items = [
        {
            id: "alan_shepard",
            name: "Alan Shepard",
            born : "November 18th, 1923 Age:(74)",
            from: "Pebble Beach, CA",
            spaceMissions : "Apollo 14, Mercury-Redstone 3",
            image : alanShepard
        },
        {
            id: "buzz_aldrin",
            name: "Buzz Aldrin",
            born : "January 20th, 1930",
            from: "Montclair, NJ",
            spaceMissions : "Apollo 11, Gemini 12",
            image : buzzAldrin
        },
        {
            id: "neil_armstrong",
            name: "Neil Armstrong",
            born : "August 5th, 1930 Age:(82)",
            from: "Cincinnati, OH",
            spaceMissions : "Apollo 11, Gemini8",
            image : neilArmstrong
        },
        {
            id: "sally_ride",
            name: "Sally Ride",
            born : "May 26th, 1951 Age:(61)",
            from: "La Jolla, CA",
            spaceMissions : "STS-7, STS-41-G",
            image : sallyRide
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image}  style={{height: 200, width: "100%"}} alt="" />
                <p className="carouselDescription">{props.item.name}</p>
            </Paper>
        )
    }

    const handleOption = (nasaAstro) => {
        const newData = items.filter((item) => item.id == nasaAstro);
        console.log(newData);
        setDisplayData(newData[0]);
        setDisplayMode("nasaAstro")

    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown mt-4" onChange={(e) => handleOption(e.target.value)}>
                    <option className="carouselDescription" value="">Select NASA Astronaut</option>
                    <option className="carouselDescription" value="alan_shepard">Alan Shepard</option>
                    <option className="carouselDescription" value="buzz_aldrin">Buzz Aldrin</option>
                    <option className="carouselDescription" value="sally_ride">Sally Ride</option>
                    <option className="carouselDescription" value="neil_armstrong">Neil Armstrong</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={3000}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default NasaData;