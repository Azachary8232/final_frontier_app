import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import neptune from '../img_planets/neptune.jpg';
import earth from '../img_planets/earth.jpg';
import mercury from '../img_planets/mercury.jpg';
import saturn from '../img_planets/saturn.jpg';







const NewCarousel = (props) => {

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
    function Item(planets) {
        return (
            <Paper>
                <img src={planets.item.image}  style={{height: 200, width: "100%"}} alt="" />
            </Paper>
        )
    }
    return (
        <div style= {{width: "auto", height: 200}}>
            <Carousel interval={3000}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}
export default NewCarousel;