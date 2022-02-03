import '../css/style.css';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import kayla_barron from '../img/astro_in_space_now/kayla_barron.jpg';
import thomas_marshburn from '../img/astro_in_space_now/thomas_marshburn.jpg';
import wang_yaping from '../img/astro_in_space_now/wang_yaping.jpg';
import ye_guangfu from '../img/astro_in_space_now/ye_guangfu.jpg';




const IssData = (props) => {

    

    // DATA shared to and from MAIN
    const {planet, setPlanet, isChanged, setIsChanged} = props 



    let items = [
        {
            name: "Kayla Barron",
            description: "Probably the most random thing you have ever seen!",
            image : kayla_barron
        },
        {
            name: "Ye Guangfu",
            description: "Hello World!",
            image : ye_guangfu
        },
        {
            name: "Thomas Marshburn",
            description: "Hello Dolly!",
            image : thomas_marshburn
        },
        {
            name: "Wang Yaping",
            description: "Hello Dolly!",
            image : wang_yaping
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
        console.log(planet)

    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleClick(e.target.value)}>
                    <option value="">Select ISS Astronaut</option>
                    <option value="kayla_barron">Kayla Barron</option>
                    <option value="thomas_marshburn">Thomas Marshburn</option>
                    <option value="wang-yaping">Wang Yaping</option>
                    <option value="ye_guangfu">Ye Guangfu</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={3200}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default IssData;