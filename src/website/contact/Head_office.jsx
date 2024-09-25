import React, { Component } from 'react'
import './Head_office.css';
export default class Head_office extends Component {
  render() {
    return (
      <>

        <div className='h-100 w-100'>
          <section style={{ "background-color": "#F1F1F1" }}>
            <div className="container-fluid saving">
              <div className="row">
                <div className="col-12 ">

                </div>
              </div>
            </div>
            <div className="container section_icon py-3 ">
              <div className="row">
                <div className="col-md-1">
                  <i class="fa-solid fa-mobile-screen-button fs-1 ps-5 me-3 text-primary"></i>
                </div>
                <div className="col-md-3">
                  <h3>TOLL-FREE NUMBER</h3>
                  <a>7722010222</a>
                </div>

                {/* part 2 */}
                <div className="col-md-1">
                  <i class="fa-regular fa-envelope-open fs-1 ps-5 me-3 text-primary"></i>
                </div>
                <div className="col-md-3">
                  <h3>EMAIL US</h3>
                  <a>info@samatapat.net</a>
                </div>

                {/* part 3 */}
                <div className="col-md-1">
                  <i class="fa-solid fa-location-dot fs-1 ps-5 me-3 text-primary"></i>
                </div>
                <div className="col-md-3">
                  <h3>REACH US</h3>
                  <a>Samata Marg, kopargaon<br></br>
                    Dist-AhmedNagar 423601</a>
                </div>


              </div>
            </div>
            {/* form section  */}
            <hr className=''></hr>
            
              <div className="container">
              <div className="row">
                  <div className="col-12 col-md-7">
                   <div className="row">
                    <div className="col-6">
                    <input type='text'className='py-3 px-2 w-100 ' placeholder='Full Name' border />
                    </div>
                    <div className="col-6">
                    <input type='number'className='py-3 px-2 ms-2 w-100' placeholder='Mobile No' border />
                    </div>
                   </div>
                  <div className="row py-2">
                  <input type='email' placeholder='Email Address' className='p-3 w-100'/>

                  </div>
                  <div className="row">
                    <textarea 
                    className='' placeholder='Write Message'></textarea>
                  </div>
                  <div className="row button1">
                    <div className="col-4 p-2">
                    <button className='p-3 ms-0 rounded-2 btn btn-primary'> Send Message <i class="fa-solid fa-arrow-right"></i></button>

                    </div>
                  </div>
                 
                  </div>
                  <div className="col-12 col-md-5 ">
                    
                      <iframe className='h-100 w-100 ' style={{"height":"400px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.087488636763!2d144.9630576!3d-37.8142179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c5f4d61c6110!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1649906565709!5m2!1sen!2sau"></iframe>

                     
                  </div>
              </div>
            </div>



          </section>
        </div>
      </>

    )
  }
}

