//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview

import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const PresentDoctor = ({doctor}) => {
    return(
    <div>
        <h2> hey, I am {doctor} </h2>
    </div>

    )

}
export default PresentDoctor;