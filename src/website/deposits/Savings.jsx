import React, { Component } from "react";
import "./Saving1.css";
export default class Savings extends Component {
  render() {
    return (
      <>
        <div className="h-100 w-100">
          <section style={{ "background-color": "#F1F1F1" }}>
            <div className="container-fluid saving">
              <div className="row">
                <div className="col-12 "></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <h2 className="py-3 text-primary">Saving</h2>
                    <br></br>
                    <p className="fw bold">
                      Saving money habit improves the quality of life and helps
                      you one to feel better and secured. One will be happier
                      knowing he/she has some money aside for unexpected
                      expenses and look forward to achieve some of their dreams.
                      Here Samata Patsanstha has introduced uniquely designed
                      "Saving Account" to inbuilt the habit of saving among
                      people.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12 list">
                      <ul className="listul">
                        <li className="py-2">
                          <i class="fa-sharp fa-solid fa-heart"></i> <br></br>{" "}
                          Feature{" "}
                        </li>
                        <li className="py-2">
                          {" "}
                          <i class="fa-solid fa-circle-info"></i> <br></br>{" "}
                          Information
                        </li>
                        <li className="py-2">
                          {" "}
                          <br></br> % Interest rate
                        </li>
                        <li className="py-2">
                          <i class="fa-regular fa-file"></i>
                          <br></br> Documents
                        </li>
                        <li className="py-2">
                          <i class="fa-solid fa-calculator"></i>
                          <br></br> Calculator
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="row ">
                <div className="col-md-9   py-3 border border-2">
                  <div className="row ">
                    <div className="col-1">
                      <i class="fa-solid fa-check-double px-2"></i>
                    </div>
                    <div className="col-md-11">
                      <p>
                        There is no restriction on the number of transactions
                        for depositor and withdrawals and amount of deposits.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i class="fa-solid fa-check-double px-2"></i>
                    </div>
                    <div className="col-md-11">
                      <p>
                        The money can be withdrawn either by cash or electronic
                        transfer.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i class="fa-solid fa-check-double px-2"></i>
                    </div>
                    <div className="col-md-11">
                      <p>
                        For every transaction Samata gives the SMS to customer.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i class="fa-solid fa-check-double px-2 "></i>
                    </div>
                    <div className="col-md-11">
                      <p>
                        Interest is credited on monthly compounded interest.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* part no 2  */}
                <div className="col-md-3  px-4 bg-white">
                  <div>
                    <h2 className="py-3  text-primary">Enquiry Now</h2>
                    <input
                      type="text"
                      className="py-3  w-100  my-1"
                      placeholder="Name"
                    />{" "}
                    <br />
                    <input
                      type="Email"
                      className="py-3  w-100  my-1"
                      placeholder="Email"
                    />{" "}
                    <br />
                    <input
                      type="number"
                      className="py-3  w-100  my-1"
                      placeholder="Phone"
                    />{" "}
                    <br />
                    <input
                      type="text"
                      className="py-3  w-100  my-1"
                      placeholder="City"
                    />{" "}
                    <br />
                    <textarea
                      id="message"
                      rows={6}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      placeholder="Message"
                    />
                    <br></br>
                    <button className="btn btn-lg text-center my-2 ms-3 ps-3 btn-primary">
                      {" "}
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
