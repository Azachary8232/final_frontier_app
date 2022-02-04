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
    const { setDisplayData, displayData, displayMode, setDisplayMode} = props;




    let items = [
        {
            id: "kayla_barron",
            name: "Kayla Barron",
            age: 34,
            from: "Pocatello, ID",
            spaceMissions : "SpaceX Crew-3",
            image : kayla_barron
        },
        {
            id: "ye_guangfu",
            name: "Ye Guangfu",
            age : 41,
            from : "Chengdu, China", 
            spaceMissions : "Shenzhou 13",
            image : ye_guangfu
        },
        {
            id: "thomas_marshburn",
            name: "Thomas Marshburn",
            age : 61,
            from : "Statesville, NC", 
            spaceMissions : "SpaceX Crew-3, STS-127, Expedition 34, Expedition 35, Soyuz TMA-07M",
            image : thomas_marshburn
        },
        {
            id: "wang_yaping",
            name: "Wang Yaping",
            age : 42,
            from : "Yanti, China", 
            spaceMissions : "Shenzhou 13, Shenzhou 10",
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

    const handleOption = (issAstro) => {
        const newData = items.filter((item) => item.id == issAstro);
        console.log(newData);
        setDisplayData(newData[0]);
        setDisplayMode("issAstro")
        

    }





    return (

        <div className="box mt-3">
            {/* Lower Left Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown mt-4" onChange={(e) => handleOption(e.target.value)}>
                    <option value="">Select ISS Astronaut</option>
                    <option value="kayla_barron">Kayla Barron</option>
                    <option value="thomas_marshburn">Thomas Marshburn</option>
                    <option value="wang_yaping">Wang Yaping</option>
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