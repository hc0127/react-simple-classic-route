import React, { Component } from "react";
import "../App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

class First extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDBContainer className="">
        <MDBRow className="mt-2">
          <MDBCol className="d-grid gap-2">
            <MDBBtn>Register</MDBBtn>
          </MDBCol>
          <MDBCol></MDBCol>
          <MDBCol className="d-grid gap-2">
            <MDBBtn >Available Earning</MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-2">
          <MDBCol className="d-grid gap-2">
            <MDBBtn>Upgrade Membership</MDBBtn>
          </MDBCol>
          <MDBCol></MDBCol>
          <MDBCol className="d-grid gap-2">
            <MDBBtn >Claim Earnings</MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-2 d-grid col-4 mx-auto">
            <MDBBtn>Total Earnings</MDBBtn>
        </MDBRow>
        <MDBRow className="mt-2 d-grid col-4 mx-auto">
            <MDBBtn>User Clicks Today:</MDBBtn>
        </MDBRow>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              LIST OF AVAIAlABLE ADS
            </MDBCardTitle>
            <MDBCardText className="text-center">
              CLICK THE ADS TO EARN
            </MDBCardText>
            <MDBRow className="mt-2">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody>
                    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                      <MDBListGroupItem>1.</MDBListGroupItem>
                      <MDBListGroupItem>2.</MDBListGroupItem>
                      <MDBListGroupItem>3.</MDBListGroupItem>
                      <MDBListGroupItem>4.</MDBListGroupItem>
                      <MDBListGroupItem>5.</MDBListGroupItem>
                      <MDBListGroupItem>6.</MDBListGroupItem>
                      <MDBListGroupItem>7.</MDBListGroupItem>
                      <MDBListGroupItem>8.</MDBListGroupItem>
                      <MDBListGroupItem>9.</MDBListGroupItem>
                      <MDBListGroupItem>10.</MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardBody>
                    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                      <MDBListGroupItem>1.</MDBListGroupItem>
                      <MDBListGroupItem>2.</MDBListGroupItem>
                      <MDBListGroupItem>3.</MDBListGroupItem>
                      <MDBListGroupItem>4.</MDBListGroupItem>
                      <MDBListGroupItem>5.</MDBListGroupItem>
                      <MDBListGroupItem>6.</MDBListGroupItem>
                      <MDBListGroupItem>7.</MDBListGroupItem>
                      <MDBListGroupItem>8.</MDBListGroupItem>
                      <MDBListGroupItem>9.</MDBListGroupItem>
                      <MDBListGroupItem>10.</MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>

        </MDBCard>
        
      </MDBContainer>
    );
  }
}

export default First;
