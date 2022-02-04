import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {

    return(
        <div className="flex spaceAround">
            <div>
                <Link>Space Info</Link>
            </div>
            <div>
                <h1>The Final Frontier</h1>
            </div>
            <div>
                <Link>Solar System</Link>
            </div>

        </div>
    )


}

export default NavBar;