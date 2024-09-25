import React, { Component } from 'react'
import './Team_deposite.css';

export default class Team_deposite extends Component {
  render() {
    return (
      <>
        {/* start */}



        <div className='h-100 w-100'>
          <section style={{ "background-color": "#F1F1F1" }}>
            <div className="container-fluid saving">
              <div className="row">
                <div className="col-12 ">

                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <h2 className='py-3 text-primary'>Team Deposite</h2><br></br>
                    <p className='fw bold'>Terms deposits are an extremely safe investment and are therefore very appealing to conservative, low-risk investors. In Monthly Income Scheme Deposit, we all require certain amount for our day to day expenses and for that by investing certain lump sum amount for specific period of time.</p>
                  </div>
                  <div className="row">
                    <div className="col-12 list">
                      <ul className='listul'>
                        <li className='py-2'><i class="fa-sharp fa-solid fa-heart"></i> <br></br> Feature  </li>
                        <li className='py-2'> <i class="fa-solid fa-circle-info"></i> <br></br> Information</li>
                        <li className='py-2'> <br></br> % Interest  rate</li>
                        <li className='py-2'><i class="fa-regular fa-file"></i><br></br>  Documents</li>
                        <li className='py-2'><i class="fa-solid fa-calculator"></i><br></br>  Calculator</li>
                      </ul>
                    </div>
                  </div>

                  <div>


                  </div>

                </div>
              </div>
            </div>

            <div className="container ">
              <div className="row">
                <div className="col-md-9">
                  <div className='border border-1'>
                    <h5 className='p-2'>Depositing amount for fixed period</h5> 
                   <div className="d-flex d-block gap-4 p-2 text-center">
                   <i class="fa-solid fa-check-double"></i>
                   <p>Period of deposit is minimum 1 Month to 36 Months</p>
                   </div>

                   <div className="d-flex d-block gap-4 p-2 text-center">
                   <i class="fa-solid fa-check-double"></i>
                   <p>Repayment with interest on maturity date</p>
                   </div>

                  </div>
                 
                </div>

                <div className="col-md-3  px-4 bg-white" >
                  <div>
                    <h2 className='py-3 text-center text-primary'>Enquiry Now</h2>
                    <input type='text' className='py-3  w-100  my-1' placeholder='Name' /> <br />
                    <input type='Email' className='py-3  w-100  my-1' placeholder='Email' /> <br />
                    <input type='number' className='py-3  w-100  my-1' placeholder='Phone' /> <br />
                    <input type='text' className='py-3  w-100  my-1' placeholder='City' /> <br />
                    <textarea
                      id="message"

                      rows={6}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      placeholder="Message"

                    /><br></br>
                    <button className='btn btn-lg text-center my-2 ms-3 ps-3 btn-primary'> Submit</button>


                  </div>

                </div>
              </div>






              {/* part no 2  */}


            </div>




          </section>
        </div>




      </>

    )
  }
}
