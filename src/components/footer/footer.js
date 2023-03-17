import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import  './style.css'
export default function footer() {
  return ( 
    <section className="contact-me" id="connect">
    <h2 className="section-title mt-5 text-center">
        Connect with Us!
    </h2>
    <hr />
    <div id="contact-details" className="text-center pt-3 pb-4">
        <a href="#home" className="d-block bg-accent h4">Trade Wars</a>
        <h3 className="mb-3">Follow us on GitHub and LinkedIn</h3>
        <div id="social-icons" className="justify-content-center">
        <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
          <MDBIcon fab icon='github' />
         </MDBBtn>
            
            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
           <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <p class="text-center mb-0">Copyright &copy; 2023</p>
        </div>
    </div>
</section>
  );
}