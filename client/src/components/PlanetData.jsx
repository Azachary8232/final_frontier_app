
import '../css/style.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import neptune from '../img_planets/neptune.jpg';
import earth from '../img_planets/earth.jpg';
import mercury from '../img_planets/mercury.jpg';
import saturn from '../img_planets/saturn.jpg';




const PlanetData = (props) => {



    let items = [
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
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image}  style={{height: 200, width: "100%"}} alt="" />
            </Paper>
        )
    }

    const handleClick = (id) => {
        
        console.log(id)
    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleClick(e.target.value)}>
                    <option value="">Select Planet</option>
                    <option value="earth">Earth</option>
                    <option value="mercury">Mercury</option>
                    <option value="neptune">Neptune</option>
                    <option value="saturn">saturn</option>
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
export default PlanetData;