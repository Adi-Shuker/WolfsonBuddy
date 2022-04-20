import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import "./style"

const GetToKnowTheTeam = ({departmentsList, doctorsList}) => {
    const [data, setData] = useState('');
    const renderDoctor = () => {
        if (data) {
            return <PresentDoctor doctor={data} />
        }
    }
    console.log('GetToKnowTheTeam render')
    return(
    <div>
        <DoctorsByDepartment id="something" setData={setData} departmentsList={departmentsList} doctorsList={doctorsList}/>
        {renderDoctor()}
        <h2>end</h2>
    </div>

    )

}
export default GetToKnowTheTeam;