import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import { MDBCardHeader, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit'

import Featured from "./Featured";

export default function Main(){
  

    return (
      <div className="main-m-container">
        <div className="main-item-con">
          
        </div>
        <div style={{backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
          <Featured />
          <div className="main-side-container">
            <div className="main-side-sub-container">
              <center>
                  <label className="main-t-lbl"> <label style={{color:"#FF5631"}}>Quick</label>  Links</label>
                </center>  
                <center>
                <button className="btn l-btn-accepted main-side-button">Register Group</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Register Topic</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Submit Document</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Ask Question</button>
                <button className="btn l-btn-accepted main-side-button2">My Profile</button>
                <label>Have a question? write us to info@sliil.lk</label>
                </center>
            </div>
          </div>
          <div className="main-cd-container">
          <div className="main-color-cards">
          <MDBCard background='primary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>News Admin</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Topic Submission</MDBCardTitle>
              <MDBCardText>
                Research Project Topic Submission deadline has extended to 27th August 2022.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </div>
          <div className="main-color-cards2">
          <MDBCard background='danger' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>Faculty</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>On-Campus Evaluations</MDBCardTitle>
              <MDBCardText>
                All the on-campus evaluations has been canceled until further notice. Check notices regulary
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </div>

          <div className="main-color-cards2">
          <MDBCard background='success' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>Update</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Topic Evaluation</MDBCardTitle>
              <MDBCardText>
                All submitted research topics have been evaluated by the supervisors. Check your topic status.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </div>

          <div className="main-color-cards2">
          <MDBCard background='warning' className='mb-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>News Admin</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Document Templates</MDBCardTitle>
              <MDBCardText>
                Latest Document templates are available for download in the Research Management Tool. (2022 Version)
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </div>

          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          </div>

        </div>  
        <div style={{backgroundColor:"#84809F"}}></div>  
      </div>
      );

} 