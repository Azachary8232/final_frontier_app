import React from 'react'
import '../css/style.css';

import DropDown from '../components/DropDown';
import Carousel from './Carousel';


const Main = (props) => {

    const shuttle = "https://www.nasa.gov/sites/default/files/images/596774main_ED09-0253-02.jpg"
    const neil = "https://m.media-amazon.com/images/M/MV5BNjc2NDI5NzAzMV5BMl5BanBnXkFtZTcwMzM2OTQyOA@@._V1_UY264_CR15,0,178,264_AL_.jpg"
    const fighter = "https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=0%2C196%2C1560%2C780"

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
                    <Carousel shuttle= {shuttle }/>
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
                    <Carousel shuttle={neil}/>
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
                    <Carousel shuttle={fighter}/>
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
                        <Carousel/>
                    </div>
                </div>
            </div>
        </div>
    </div>  

)

}
export default Main;