
import '../css/style.css';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import axios from 'axios';

import neptune from '../img/planets/neptune.jpg';
import earth from '../img/planets/earth.jpg';
import mercury from '../img/planets/mercury.jpg';
import saturn from '../img/planets/saturn.jpg';




const PlanetData = (props) => {

    // DATA shared to and from MAIN
    // const {planet, setPlanet, isChanged, setIsChanged} = props 

    const [name, setName] = useState();
    const [moons, setMoons] = useState([]);
    const [milesAround, setMilesAround] = useState();
    const [mostMilesFromSun, setMostMilesFromSun] = useState();
    const [leastMilesFromSun, setLeastMilesFromSun] = useState();
    
    

    let items = [
        {
            name: "Earth",
            image : earth
        },
        {
            name: "Neptune",
            image : neptune
        },
        {
            name: "Mercury",
            image : mercury
        },
        {
            name: "Saturn",
            image : saturn
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

    const handleOption = (planet) => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then(res => {
            setName(res.data.englishName);
            setMoons(res.data.moons);
            setMilesAround(res.data.equaRadius);
            setMostMilesFromSun(res.data.aphelion);
            setLeastMilesFromSun(res.data.perihelion)
        })
    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleOption(e.target.value)}>
                    <option className="carouselDescription" value="">Select Planet</option>
                    <option className="carouselDescription" value="earth">Earth</option>
                    <option className="carouselDescription" value="mercury">Mercury</option>
                    <option className="carouselDescription" value="neptune">Neptune</option>
                    <option className="carouselDescription" value="saturn">Saturn</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={2700}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default PlanetData;