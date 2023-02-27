import React, { Component } from "react";
import "../App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTextArea,
  MDBInput ,
} from "mdb-react-ui-kit";

class Second extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDBContainer className="">
        <MDBRow className="d-grid gap-6 p-6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                ADVERTISE PROJECT
              </MDBCardTitle>
              <MDBRow className="mt-2">
                <MDBInput label='Title'type='text'/>
              </MDBRow>
              <MDBRow className="mt-2">
                <MDBTextArea label='Description'  rows={10}></MDBTextArea>
                </MDBRow>
              <MDBRow className="mt-2">
                <MDBInput label='Link'type='text'/>
              </MDBRow>
              <MDBRow className="mt-2">
                <MDBRow className="mt-2" >NUMBER OF AD CLICKS:</MDBRow>
                </MDBRow>
              <MDBRow className="mt-2">
                <MDBInput label='TOTAL ETH TO PAY' type='text'/>
              </MDBRow>
              <MDBRow className="mt-2">
                <MDBBtn>DEPLOY ADVERTISMENT</MDBBtn>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Second;
