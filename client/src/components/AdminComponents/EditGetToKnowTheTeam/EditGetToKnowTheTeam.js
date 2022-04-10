import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import DoctorsByDepartment from "../../DoctorsByDepartment";
import PresentDoctor from "../../PresentDoctor";
const EditGetToKnowTheTeam = ({departmentsList, doctorsList}) => {
    const [data, setData] = useState('');
    const renderDoctor = () => {
        if (data) {
            return <PresentDoctor doctor={data} />
        }
    }
    console.log('EditGetToKnowTheTeam render')
    return(
    <div>
        <h1>EditGetToKnowTheTeam</h1>
        <DoctorsByDepartment id="something" setData={setData} departmentsList={departmentsList} doctorsList={doctorsList}/>
        {renderDoctor()}
        <h2>end</h2>
    </div>

    )

}
export default EditGetToKnowTheTeam;