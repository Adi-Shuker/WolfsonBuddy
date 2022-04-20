//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview

import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

//maybe instead of doing import it will be better
//to ask the DB for picture and pragraph
import myImage from '../images/doctorsImages/doc1.png'

const PresentDoctor = ({doctor}) => {
    return(
    <div>
        <h2> hey, I am {doctor} </h2>
        <img src={myImage}></img>
    </div>

    )

}
export default PresentDoctor;