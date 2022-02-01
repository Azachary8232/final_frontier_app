import React from 'react'
import '../css/style.css';

import DropDown from '../components/DropDown';


const Main = (props) => {


return(
    <div className='container2'>
        <div className='lego navBar my-3'>
        {/* NavBar Component */}
        </div>
        <div className="mainContainer flex spaceBetween py-3">
        {/* Container */}
            <div className="column">
            {/* left column */}
                <div className="box border2">
                {/* Upper Box */}
                    <div className="drop lego">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    </div>
                </div>
                <div className="box border2 my-5">
                {/* Lower Box */}
                    <div className="drop lego">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    </div>
                </div>
            </div>
            <div className="display lego">
            {/* display */}
            </div>
            <div className="lego column">
            {/* right column */}
                <div className="box border2">
                {/* Upper Box */}
                    <div className="drop lego">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component */}
                    </div>
                </div>
                <div className="box border2 my-5">
                {/* Lower Box */}
                    <div className="drop lego">
                    {/* Drop Down Component */}
                        <DropDown/>
                    </div>
                    <div>
                    {/* Carousel Component*/}
                    </div>
                </div>
            </div>
        </div>
    </div>  

)

}
export default Main;