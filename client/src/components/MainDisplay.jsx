import React, {useState} from 'react';

import neptune from '../img/planets/neptune.jpg';
import earth from '../img/planets/earth.jpg';
import mercury from '../img/planets/mercury.jpg';
import saturn from '../img/planets/saturn.jpg';

// import * as planet  from '../img/planets';
// source={All[`${imageValue}`]


const MainDisplay = (props) => {

    // DATA shared to and from MAIN
    const { displayData, setDisplayData, displayMode, setDisplayMode} = props;
    

    const selections = () => {
        // 
        console.log(displayData)
        if( displayMode == "planets"){
            if(displayData.name == "Neptune"){
                return(
                    <div>
                        <div>
                            <img src={neptune} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                    </div>)}
            else if(displayData.name == "Earth"){
                return(
                    <div>
                        <img src={earth} style={{height: "auto", width: "100%"}} alt="" />
                    </div>)}
            else if(displayData.name == "Saturn"){
                return(
                    <div>
                        <img src={saturn} style={{height: "auto", width: "100%"}} alt="" />
                    </div>)}
            else if(displayData.name == "Mercury"){
                return(
                    <div>
                        <img src={mercury} style={{height: "auto", width: "100%"}} alt="" />
                    </div>)}          
        }
        else{
            return(
                <h1>NOT PLANETS</h1>)}
    }

    return(
        <div>
            {displayData 
            ? 
                selections()
            : 
                <h1>Loading</h1>
            }
        </div>
    )




}
export default MainDisplay;