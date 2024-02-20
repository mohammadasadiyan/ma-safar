import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "./contact.css"
import TeamImg from "../../assets/team.jpg"
import "./contact.css"
export const Contact = ()=> {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem'}}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white custom"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={TeamImg}
                    alt="Avatar" className="my-5 text-center" style={{ width: '125px', borderRadius: "60px"}} fluid />
                  <MDBTypography tag="h5" style={{fontSize: "30px"}}>تیم ماسفر</MDBTypography>
                  <MDBCardText>توسعه وب</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">درباره من</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">ایمیل</MDBTypography>
                        <MDBCardText className="text-muted">mmdbro77@gmail.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">شماره تماس</MDBTypography>
                        <MDBCardText className="text-muted" style={{direction: "ltr", display: "flex", justifyContent: "end"}}>+98 939 261 7796</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">ارتباط</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">ایران مازندران رامسر</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-1">
                        <MDBTypography tag="h6">social media</MDBTypography>
                        <MDBCardText className="text-muted">
                        <button class="Btn" style={{float : "left"}}>
  <span class="svgContainer">
    <svg
      viewBox="0 0 496 512"
      height="1.6em"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <path
        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
        fill="skyblue"
      ></path>
    </svg>
  </span>
  <span class="BG"></span>
</button>
<button class="Btn">
  <span class="svgContainer">
    <svg
      viewBox="0 0 448 512"
      height="1.6em"
      xmlns="http://www.w3.org/2000/svg"
      class="svgIcon"
      fill="skyblue"
    >
      <path
        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
      ></path>
    </svg>
  </span>
  <span class="BG"></span>
</button>

                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}