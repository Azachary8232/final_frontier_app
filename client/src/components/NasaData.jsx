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
    const {planet, setPlanet, isChanged, setIsChanged} = props 



    let items = [
        {
            name: "Alan Shepard",
            description: "Probably the most random thing you have ever seen!",
            image : alanShepard
        },
        {
            name: "Buzz Aldrin",
            description: "Hello World!",
            image : buzzAldrin
        },
        {
            name: "Neil Armstrong",
            description: "Hello Dolly!",
            image : neilArmstrong
        },
        {
            name: "Sally Ride",
            description: "Hello Dolly!",
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

    const handleClick = (id) => {
        setPlanet(id);
        setIsChanged(!isChanged);

    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleClick(e.target.value)}>
                    <option value="">Select NASA Astronaut</option>
                    <option value="alan_shepard">Alan Shepard</option>
                    <option value="buzz_aldrin">Buzz Aldrin</option>
                    <option value="sally_ride">Sally Ride</option>
                    <option value="neil_armstrong">Neil Armstrong</option>
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