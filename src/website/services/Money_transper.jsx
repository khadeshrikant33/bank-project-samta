import React, { Component } from 'react'


export default class Mobile_banking extends Component {
  render() {
    return (
      <>
        <section className='saving ' style={{ "background-color": "#F1F1F1" }}>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 ">

              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-12 col-md-9 ">
                <div className="row">
                  <div>
                    <h3 className='pt-3'>Money Transfer</h3><br></br>
                    <p>The Fastest Way to Receive & Transfer Money with SAMATA PATSANSTHA. Transferring money from your SAMATA account is very simple and convenient.</p>
                    <p>There are various options provided online for transferring money.</p>
                    <br></br>
                    <hr></hr>
                  </div>
                </div>
                <h2 className='text-center'>NEFT/RTGS/IMPS</h2><br></br>
                <div className="row ">
                  <div className=" col-12 col-md-6">
                    <img className='w-100 ' src='https://www.samatapat.com/admin/uploads/moneytransferpage/neft-national-electronic-funds-transfer654dd5efbcd36.jpg'></img>

                  </div>
                  {/* part 2 */}
                  <div className=" col-12 col-md-6">
                    <div>
                      <h3 className='text-primary'>NEFT</h3> <br></br>
                      <h6>NATIONAL ELECTRONIC FUNDS TRANSFER</h6>
                      <p>Important of NEFT transaction</p>
                      <div className="row">
                        <div className="col-1">
                          <i class="fa-solid fa-check-double px-2"></i>
                        </div>
                        <div className="col-md-11">
                          <p>The money can be withdrawn either by cash or electronic transfer.</p>

                        </div>

                      </div>
                      <div className="row">
                        <div className="col-1">
                          <i class="fa-solid fa-check-double px-2"></i>
                        </div>
                        <div className="col-md-11">
                          <p>The money can be withdrawn either by cash or electronic transfer.</p>

                        </div>

                      </div>

                      <div className="row">
                        <div className="col-1">
                          <i class="fa-solid fa-check-double px-2"></i>
                        </div>
                        <div className="col-md-11">
                          <p>The money can be withdrawn either by cash or electronic transfer.</p>

                        </div>

                      </div>

                      <div className="row">
                        <div className="col-1">
                          <i class="fa-solid fa-check-double px-2"></i>
                        </div>
                        <div className="col-md-11">
                          <p>The money can be withdrawn either by cash or electronic transfer.</p>

                        </div>

                      </div>

                      <div className="row">
                        <div className="col-1">
                          <i class="fa-solid fa-check-double px-2"></i>
                        </div>
                        <div className="col-md-11">
                          <p>The money can be withdrawn either by cash or electronic transfer.</p>

                        </div>

                      </div>




                    </div>
                   

                  </div>
                  <br></br>
                  <hr className='dotted'></hr>




                </div>
                {/* row no 2 second image  */}
                <div className="row ">
                  <div className=" col-12 col-md-6">
                    <img className='w-100 ' src='https://www.samatapat.com/admin/uploads/moneytransferpage/rtgs654dd5efbcfbe.jpg'></img>

                  </div>
                  {/* part 2 */}
                  <div className=" col-12 col-md-6">
                    <div>
                      <h3 className='text-primary'>RTGS</h3> <br></br>
                      <h6>REAL TIME GROSS SETTELEMENT</h6>
                      <p>Importance of RTGS transaction</p>
                      <p>RTGS transfer time is extremely fast when compared to NEFT. Given that transactions happen in real-time and on an individual basis, it takes less than 30 minutes for the funds to be transferred from your account to the beneficiary's account.</p>
                      <p>An electronic payment system in which payment instructions between banks are processed and settled individually and continuously, on a real time basis, throughout the day. Available for transaction value of Rs.2.00 lac and above. Customer can send and received money on his/her account.</p>

                   
                    </div>
                   

                  </div>
                  <br></br>
                  <hr className='dotted'></hr>




                </div>

                 {/* row no 2 second image  */}
                 <div className="row ">
                  <div className=" col-12 col-md-6">
                    <img className='w-100 ' src='https://www.samatapat.com/admin/uploads/moneytransferpage/imps654dd5efbd230.png'></img>

                  </div>
                  {/* part 2 */}
                  <div className=" col-12 col-md-6">
                    <div>
                      <h3 className='text-primary'>IMPS</h3> <br></br>
                      <h6>IMMEDIATE PAYMENT SERVICE</h6>
                      <p>Important of IMPS transaction</p>
                     <p>SAMATA offers IMPS an inter-bank electronic fund transfer service through mobile phones. The service is available 24x7 throughout the year including bank holidays.Funds are transferred on real time basis without any delay.</p>
                      <p>It is being extended by Samata Patsanstha through various channels such as ATM, Internet Banking, and Mobile Banking etc. All the Public sector & major Private Banks are participating in IMPS.Available for transaction value of up to Rs.5.00 lac</p>

                    </div>

                  </div>
                  <br></br>
                  <hr className='dotted'></hr>


                </div>
         
                
              </div>
              <div className=" col-12 col-md-3 border bg-white ourservices">
                <h2 className='text-primary pt-3'>Our Services</h2><br></br>
                <hr></hr>
                <h6 className='py-2 px-1'>Mobile Banking</h6>
                <h6 className='py-2 px-1'>Money Transfer</h6>
                <h6 className='py-2 px-1'>Locker</h6>
                <h6 className='py-2 px-1'>Micro ATM</h6>
                <h6 className='py-2 px-1'>Paper Less Banking</h6>

              </div>
            </div>

          </div>

        </section><br></br>

      </>
    )
  }
}
 