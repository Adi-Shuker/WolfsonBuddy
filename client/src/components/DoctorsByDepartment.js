//import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import React,{useState} from 'react';


//need to get the list in that form
//let departmentsList = ["dep1","dep2","dep3"]
//let doctorsList = [{name: "doc1", department: "dep1"}, {name: "doc2", department: "dep1"}, {name: "doc3", department: "dep2"},]
//
const DoctorsByDepartment = ({setData, departmentsList, doctorsList}) => {
    let defaultDoctorsTitle = "בחר רופא"
    const [departmentsTitle,setDepartmentsTitle]=useState("בחר מחלקה");
    const [doctorsTitle,setDoctorsTitle]=useState(defaultDoctorsTitle);
    const [value,setValue] = useState(doctorsList)
    const [selectedDoctor, setSelectedDoctor] =useState(null)
    const departmentSelect=(e)=>{
        console.log(e)
        setDepartmentsTitle(e)
        setValue(doctorsList.filter(
            (doctor) => doctor.department === e
        ))
        setDoctorsTitle(defaultDoctorsTitle)
        setSelectedDoctor(null)
        setData(null)
    }
    const doctorSelect=(e)=>{
            console.log(e)
            setDoctorsTitle(e)
            setSelectedDoctor(e)
            setData(e)
    }

    console.log('DoctorsByDepartment render')
    return(
        <div className="DoctorsByDepartment">
            <h2>Doctors By Department</h2>
            <DropdownButton id="dropdown-departments" onSelect={departmentSelect} title={departmentsTitle}>
                {
                    departmentsList.map(function(name, index){
                    return <Dropdown.Item key = {index} eventKey={name}>{name}</Dropdown.Item>;
                })}
            </DropdownButton>
            <DropdownButton id="dropdown-doctores"  onSelect={doctorSelect} title={doctorsTitle}>
                {value.map(function(anObjectMapped, index){
                    return (
                        <Dropdown.Item key = {index} eventKey={anObjectMapped.name}>{anObjectMapped.name}</Dropdown.Item>
                    )})}
            </DropdownButton>
        </div>
    )
}
export default DoctorsByDepartment;