import React, { Component } from 'react'
import './Footer1.css'

export default class Footer1 extends Component {
    render() {
        return (
            <>

                <section>
                    <div className="container-fluid the_footer bg-black text-white">
                        <div className="row responsive py-5">
                            <div className="col-12 col-md-3">
                                <div>
                                    <h2>Quick Links</h2>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2 "></i> About Us </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Our Vitures </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> News And Updates </a> <br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Contact Us </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Carrer </a><br></br>
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div>
                                    <h2>Products </h2>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2 "></i> Saving Deposite</a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Fixed Deposite</a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i>Daily Deposite Scheme </a> <br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Cecuring Deposite </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Gold Loan </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Personal Loan </a><br></br>
                                    <a><i class="fa-solid fa-greater-than &nbsp p-3 px-2"></i> Vehical Loan </a><br></br>
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div>
                                    <h2>Head Office </h2>
                                    <a><i class="fa-solid fa-location-dot text-info p-2 px-2"></i>Samata Marg, kopargaon <br></br> &nbsp; &nbsp; &nbsp;Dist-AhmedNagar 423601</a><br></br>
                                    <a><i class="fa-solid fa-mobile-screen-button text-info p-4 px-2"></i> (02423) 225555.</a><br></br>

                                    <a><i class="fa-solid fa-mobile-screen-button text-info &nbsp p-3 px-2"></i> Call Center No :7722010222.  </a><br></br>
                                    </div>

                            </div>

                            <div className="col-12 col-md-3 icon">
                                <div>
                                    <h2 className='ps-4'>Newsletter </h2>
                                    <div className='py-4 px-3'>
                                        <input type='email' placeholder='Email' className='bg-black p-2 border border-2 border-white'></input>
                                    </div>
                                    <ul>
                                        <a> <li> <i class="fa-brands fa-twitter "/></li></a>
                                        <a> <li> <i class="fa-brands fa-facebook-f"/> </li></a>
                                        <a> <li> <i class="fa-brands fa-instagram "/></li></a>
                                    </ul>
                                    </div>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className='bg-primary p-2 text-center'>© Copyright - Samatapat 2024 All rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
