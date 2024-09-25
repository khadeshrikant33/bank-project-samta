import React, { Component } from 'react'
import './Home.css'

export default class Home1 extends Component {
  render() {
    return (
      <>
      
        {/* //card  */}
        <div className="container-fluid">
          <div className="row  ">
            <div className="card_div col-md-3   rounded-3 ">
              <div className=' card-head 
            '>
                <img className="w-100 h-100 rounded-4  p-3" src='https://samatapat.com/admin/uploads/service/saving654f08f67348a.jpg'></img>
              </div>
              <div className="card-footer text-center p-3 ">
                <h4 className='text-center p-2'>Mobile Banking</h4>
                <button className=' bg-success px-2 p-1 rounded-2 text-white ' >Read More</button>
              </div>
            </div>


            <div className="card_div col-md-3  ">
              <div className=' card-head 
            '>
                <img className="w-100 h-100 rounded-3  p-3" src='https://www.samatapat.com/admin/uploads/service/mobile-banking654f0886432fa.jpg'></img>
              </div>
              <div className="card-footer text-center p-3 ">
                <h4 className='text-center p-2'>Mobile Banking</h4>
                <button className=' bg-success px-2 p-1 rounded-2 text-white ' >Read More</button>
              </div>
            </div>


            <div className="card_div col-md-3  ">
              <div className=' card-head3 
            '>
                <img className="w-100 h-100 rounded-2 p-3" src='https://www.samatapat.com/admin/uploads/service/neft654f08c589a86.jpg'></img>
              </div>
              <div className="card-footer text-center p-3 ">
                <h4 className='text-center p-2'>Mobile Banking</h4>
                <button className=' bg-success px-2 p-1 rounded-2 text-white ' >Read More</button>
              </div>
            </div>

            <div className="card_div col-md-3  ">
              <div className=' card-head 
            '>
                <img className="w-100 h-100 rounded-2  p-3" src='https://www.samatapat.com/admin/uploads/service/elocaker654f0850f0e13.jpg'></img>
              </div>
              <div className="card-footer text-center p-3 ">
                <h4 className='text-center p-2'>Mobile Banking</h4>
                <button className='bg-success px-2 p-1 rounded-2 text-white ' >Read More</button>
              </div>
            </div>

          </div>
        </div>
        <section className='bg-light'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className=" text-center mt-5">
                  <h1>Gold Loan</h1>
                  <p>Avail Gold loan at a truly unparalleled rate of interest to overcome financial exigenies.</p>
                  <div className=" row mt-5 mb-5 demo">
                    <div className="col-md-3 ">
                      <img src="https://www.samatapat.com/admin/uploads/gold_loan_benefit/deal654f0ee26d389.png"
                        alt="" />
                      <p className='fs-5 p-3'>Hassle free documentation</p>
                    </div>
                    <div className="col-md-3 loan_feature">
                      <img src="https://www.samatapat.com/admin/uploads/gold_loan_benefit/loan654f0ed05e778.png" alt="" />
                      <p className='fs-5 p-3'>Speedy sanction & Disbursal of loans</p>
                    </div>
                    <div className="col-md-3 loan_feature">
                      <img src="https://www.samatapat.com/admin/uploads/gold_loan_benefit/safe-box654f0ebfbdd8c.png" alt="" />
                      <p className='fs-5 p-3'>Safety of Gold ornaments</p>
                    </div>
                    <div className="col-md-3 loan_feature">
                      <img src="https://www.samatapat.com/admin/uploads/gold_loan_benefit/prepayment654f0e96ddfbc.png" alt="" />
                      <p className='fs-5 p-3'>Zero prepayment charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* the section 2 */}
        <section>
          <div className="container sec_3 mb-3">
            <div className="row">

              <div className="  col-md-5">
                <img className='w-100' src="https://www.samatapat.com/admin/uploads/homepage/aboutimg6548b80ce9135.jpg" alt="" />
              </div>
              <div className="col-md-7">
                <h1>ABOUT</h1><br></br>
                <h5 className='' style={{ "color": "light" }}>All-round progress of Samata Civil Co-operative Credit Instit</h5><br></br>
                <p className='text-justify'>With a view to meet the financial needs of the small traders in Kopargaon town, Samata was established on 11 May 1986 in a premises of 10 by 15 feet on Shivaji Road with a share capital of Rs 1 lakh, deposits of Rs 3 lakh and 700 members to bring equality among the small traders of the taluka Civic Cooperative Credit Institution was established. Since the inception of Samata, maintaining the principles of co-operation on the basis of co-operative principles, in the initial four years till 1991, the institution had attained the deposits of Rs.1 crore. After that, under the guidance of Chairman Omprakash Dadappaalias Kaka Koyate and Board of Directors of Samata Credit Union, Samata is taking the graph of financial progress higher without looking back. Today, Samata Credit Union has 21 extended gold loan counters with 13 branches and has a network of Samata Credit Union all over Maharashtra. Samata Patsanstha has 67,982 members through 16 branches and 23 gold loan extensions counter,extended cells as on 24 May 2022. While disbursing Rs. 665 crore 81 lakh .</p>
                <div className='demo_1'>
                  <h6 className='text-primary'>Read More <i class="fa-solid fa-arrow-right"></i></h6>

                </div>
                <br></br>
              </div>
            </div>
          </div>

        </section>

        {/* section -3 */}
        <section >
          <div className="container-fluid bg-light sec_3 w-100">
            <div className="row">
              <div className="col-12">
                <h2 className='p-5'>All you need to know</h2>

              </div>

              <div className="row  py-2">
                <div className="col-12">
                  <div className='demo'>
                    <span><i class="fa-solid fa-thumbs-up"></i> Feacture</span>
                    <span> <i class="fa-solid fa-check"></i> Eligibility</span>
                    <span> <i class="fa-regular fa-file"></i>Document</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-5 py-2">
              <div className="col-md-6 py-3 border bg-white">
                <span> <i class="fa-solid fa-check-double py-2"></i> hassle free documentation</span> <br></br>
                <span> <i class="fa-solid fa-check-double"></i> Speedy sanction & Disbursal of loans</span> <br></br>
                <span> <i class="fa-solid fa-check-double  py-2"></i> Safety of Gold Ornaments</span> <br></br>

              </div>
            </div>
          </div>


        </section>



        <section className='py-4 '>
          <div className="container-fluid video">
            <div className="row py-2">
              <div className="col-md-12">
                <h1 className='text-center'>Videos</h1>
              </div>
            </div>
            <div className="row">
              <div className="card_div col-md-3   rounded-3 ">
                <div className=' card-head  '>
                  <video controls class="styled-video py-2">
                    <source src="example.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>              </div>
                <div className="card-footer text-center p-3 ">
                  <h6>Don't be tempted by high interest rates, insist on</h6>
                </div>
              </div>

              <div className="card_div col-md-3   rounded-3 ">
                <div className=' card-head  '>
                  <video controls class="styled-video py-2">
                    <source src="example.mp4" type="video/mp4" />
                    virctual Presentation and Meaning
                  </video>              </div>
                <div className="card-footer text-center p-3 ">
                <h6>virctual Presentation and Meaning</h6>
                </div>
              </div>

              <div className="card_div col-md-3   rounded-3 ">
                <div className=' card-head  '>
                  <video controls class="styled-video py-2">
                    <source src="example.mp4" type="video/mp4" />
                   
                  </video>              </div>
                <div className="card-footer text-center p-3 ">
                  <h6>Covid 19</h6>
                </div>
              </div>

              <div className="card_div col-md-3   rounded-3 ">
                <div className=' card-head  '>
                  <video controls class="styled-video py-2">
                    <source src="example.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>              </div>
                <div className="card-footer text-center p-3 ">
                  <h6> Samta Pasanta</h6>
                </div>
              </div>

            </div>
            <div className="row py-4">
              <div className="col-md-12 text-center">
                <button className='btn btn-lg btn-primary text-center'>Read More</button>
              </div>
            </div>
          </div>


        </section >
        



      </>
    )
  }
}
