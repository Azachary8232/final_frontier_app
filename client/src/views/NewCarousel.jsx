import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';







const NewCarousel = (props) => {

    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image : one
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image : two
        },
        {
            name: "Random Name #3",
            description: "Hello Dolly!",
            image : three
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image}  style={{height: 200, width: "auto"}} alt="" />
            </Paper>
        )
    }
    return (
        <div style= {{width: "auto", height: 200}}>

            <Carousel interval={2000}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}
export default NewCarousel;