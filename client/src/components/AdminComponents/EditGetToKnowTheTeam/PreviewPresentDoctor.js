
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import PresentDoctorModal from "../../PresentDoctorModal";
import {StaffMembersContext} from "../../../App";

const PresentDoctorDiv = styled.div`
  margin-bottom: 10px;
  overflow-y: auto;
  margin-top: 5px;
  img {
    border-radius: 5px;
  }
  :not(&.inModal-true) {
    .presenting {
      border: 1px solid #2e388d;
      width: 450px;
    }
  }
  .presenting {
    border-radius: 5px;
    padding-top: 20px;

    height: 450px;
  }
`;

const PreviewPresentDoctor = ({ doctor }) => {
    const [showPresentDoctorModal, setShowPresentDoctorModal] = useState(false)
    const [doctorData, setDoctorData] = useState({})
    const [src, setSrc] = useState(
        "http://localhost:3001/images/teamMembersImages/default_profile.png"
    );
    return (
        <>
            <PresentDoctorDiv>
                {doctor ? (
                    <div className={"presenting"}>
                        <img src={src} alt="img" width={150} height={150} onClick={()=>{setShowPresentDoctorModal(true)}}/>
                        <h5> {doctor.member_name} </h5>
                        <h5> {doctor.department_name} </h5>
                        <h5> {doctor.role} </h5>

                        <Modal
                            className="navModal"
                            show={showPresentDoctorModal}
                            onHide={() => setShowPresentDoctorModal(false)}
                            centered
                        >
                            <Modal.Header className="border-0" closeButton></Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <PresentDoctorModal setTrigger={setShowPresentDoctorModal} doctorData={doctor} imageUrl={src}/>
                                </Container>
                            </Modal.Body>
                        </Modal>

                    </div>
                ) : (
                    <div className={"presenting"} >יש לבחור איש צוות</div>
                )}
            </PresentDoctorDiv>
        </>
    );
};

export default PreviewPresentDoctor;
