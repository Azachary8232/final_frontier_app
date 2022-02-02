import React, {useState} from 'react'
import '../css/style.css';

import DropDown from '../components/DropDown';
import NewCarousel from './NewCarousel';
import PlanetData from '../components/PlanetData';


const Main = (props) => {
    
    const [planets, setPlanets]= useState([]);
    console.log(planets);
    
    
    
    return(
        <div className='container2'>
        <div className='border2 navBar my-3'>
        {/* NavBar Component */}
        </div>
        <div className="mainContainer flex spaceBetween py-3">
        {/* Container */}
            <div className="column">
            {/* left column */}
                <div className="box">
                {/* Upper Box */}
                    <div className="drop">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    <NewCarousel planet= {planets}/>
                    </div>
                </div>
                <div className="box my-5">
                {/* Lower Box */}
                <div className="drop">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    <NewCarousel/>
                    </div>
                </div>
            </div>
            <div className="display border2">
            {/* display */}
            </div>
            <div className="column">
            {/* right column */}
                <div className="box">
                {/* Upper Box */}
                <div className="drop">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    <NewCarousel/>
                    </div>
                </div>
                <div className="box my-5">
                {/* Lower Box */}
                <div className="drop">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                        <NewCarousel/>
                    </div>
                </div>
            </div>
        </div>
    </div>  

)

}
export default Main;