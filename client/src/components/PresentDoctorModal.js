import React from "react";
import styled from "styled-components";

const NavAppIcon = styled.div`
  height: 60px;
  width: 60px;
  item-align: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const PresentDoctorModal = (props) => {
    return (
        <div>
            {props.doctorData ? (
                <div className={"presenting"}>
                    <img src={props.imageUrl} alt="img" width={150} height={150} />
                    <h2> {props.doctorData.member_name} </h2>
                    <h3> {props.doctorData.department_name} </h3>
                    <h3> {props.doctorData.role} </h3>
                    <h5 dir="rtl"> {props.doctorData.description} </h5>
                    <h5> {props.doctorData.phone_number} </h5>
                    {props.doctorData.clinical_practice?(
                        <div>
                            <h5 style={{"textAlign":"right"}}>תחומי עיסוק קליני</h5>
                            <ul dir="rtl">
                            {props.doctorData.clinical_practice.split(",").map((value, index)=>{
                                return <li style={{"textAlign":"right"}} key={index}> {value} </li>
                            })}
                            </ul>
                        </div>
                    ):null}
                    {props.doctorData.scientific_practice?(
                        <div>
                            <h5 style={{"textAlign":"right"}}>תחומי עיסוק מדעי</h5>
                            <ul dir="rtl">
                                {props.doctorData.scientific_practice.split(",").map((value, index)=>{
                                    return <li style={{"textAlign":"right"}} key={index}> {value} </li>
                                })}
                            </ul>
                            </div>
                    ):null}
                    {props.doctorData.academic_experience?(
                        <div>
                            <h5 style={{"textAlign":"right"}}>נסיון אקדמאי</h5>
                            <ul dir="rtl">
                                {props.doctorData.academic_experience.split(",").map((value, index)=>{
                                    return <li style={{"textAlign":"right"}} key={index}> {value} </li>
                                })}
                            </ul>
                        </div>
                    ):null}
                    {props.doctorData.professional_unions?(
                        <div>
                            <h5 style={{"textAlign":"right"}}>חברות באיגודים מקצועיים</h5>
                            <ul dir="rtl">
                                {props.doctorData.professional_unions.split(",").map((value, index)=>{
                                    return <li style={{"textAlign":"right"}} key={index}> {value} </li>
                                })}
                            </ul>
                        </div>
                    ):null}
                    {props.doctorData.education?(
                        <div>
                            <h5 style={{"textAlign":"right"}}>השכלה</h5>
                            <ul dir="rtl">
                                {props.doctorData.education.split(",").map((value, index)=>{
                                    return <li style={{"textAlign":"right"}}  key={index}> {value} </li>
                                })}
                            </ul>
                        </div>
                    ):null}
                </div>
            ) : (
                <div className={"presenting"}  style={{  "height": "500px",
                    "width": "50%"}}>יש לבחור איש צוות</div>

            )}
        </div>
    );
};

export default PresentDoctorModal;

