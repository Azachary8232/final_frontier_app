import '../css/style.css';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import atlantis from '../img/craft/atlantis.jpg';
import columbia from '../img/craft/columbia.jpg';
import iss from '../img/craft/iss.jpg';
import spaceX from '../img/craft/spaceX.jpg';




const CraftData = (props) => {

    // DATA shared to and from MAIN
    const {planet, setPlanet, isChanged, setIsChanged} = props 



    let items = [
        {
            name: "NASA Shuttle Columbia",
            description: "Probably the most random thing you have ever seen!",
            image : columbia
        },
        {
            name: "International Space Station",
            description: "Hello Dolly!",
            image : iss
        },
        {
            name: "NASA Shuttle Atlantis",
            description: "Hello World!",
            image : atlantis
        },
        {
            name: "SpaceX",
            description: "Hello Dolly!",
            image : spaceX
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image} style={{height: 200, width: "100%"}} alt="" />
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
                    <option value="">Select Space Craft</option>
                    <option value="spaceX">SpaceX</option>
                    <option value="atlantis">Atlantis</option>
                    <option value="columbia">Columbia</option>
                    <option value="iss">International Space Station</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={2850}>
                    {
                        items.map((item, i) => <Item key={i} item={item}/>)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default CraftData;