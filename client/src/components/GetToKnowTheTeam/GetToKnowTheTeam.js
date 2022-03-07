//import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import React,{useState} from 'react';


//need to get the list in that form
//let departmentsList = ["dep1","dep2","dep3"]
//let doctorsList = [{name: "doc1", department: "dep1"}, {name: "doc2", department: "dep1"}, {name: "doc3", department: "dep2"},]
//
const GetToKnowTheTeam = ({departmentsList, doctorsList}) => {

    const [value,setValue]=useState(doctorsList);
    const handleSelect=(e)=>{
        setValue(doctorsList.filter(
            (doctor) => doctor.department === e
        ))
    }

    return(
        <div className="GetToKnowTheTeam">
            <h2>Get To Know The Team</h2>
            <DropdownButton id="dropdown-departments" onSelect={handleSelect} title="בחר מחלקה">
                {departmentsList.map(function(name, index){
                    return <Dropdown.Item key = {index} eventKey={name}>{name}</Dropdown.Item>;
                })}
            </DropdownButton>
            <DropdownButton id="dropdown-doctores" title="בחר רופא">
                {value.map(function(anObjectMapped, index){
                    return (
                        <Dropdown.Item key = {index} href={anObjectMapped.name}>{anObjectMapped.name}</Dropdown.Item>
                    )})}
            </DropdownButton>

        </div>
    )
}
export default GetToKnowTheTeam;