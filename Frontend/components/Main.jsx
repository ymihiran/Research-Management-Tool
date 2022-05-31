import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import {MDBAccordion, MDBAccordionItem ,MDBIcon ,MDBInput ,MDBBtn, MDBContainer ,MDBFooter ,MDBCardOverlay,  MDBCardHeader, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit'

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

          <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
    </MDBAccordion>
          
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

          
          

          <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
        </div>  
        <div style={{backgroundColor:"#84809F"}}></div>  
      </div>
      );

} 