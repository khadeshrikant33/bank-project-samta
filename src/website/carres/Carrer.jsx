import React, { Component } from "react";
import "./Carrer.css";

export default class Notice extends Component {
  render() {
    return (
      <>
        <section>
          <div
            className="container-fluid section1  "
            style={{ "background-color": "#F1F1F1" }}
          >
            <div className="row">
              <div className="col-md-12">{/* <h3>hello</h3> */}</div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="d-flex item-inline gap-3 justify-content-center align-items-center">
                  {" "}
                  <h3 className="text-center fw-bold">Current Opening:</h3>{" "}
                  <h6 className="">
                    <a className="">Click here</a> &nbsp; For More Detail
                  </h6>
                </span>
                <br></br>
                <div className="row">
                  <hr></hr>
                  <div class="col-md-4">
                    <div
                      className="rounded-circle border-1 text-center"
                      style={{
                        height: "30px",
                        width: "30px",
                        "background-color": "yellow",
                      }}
                    >
                      1
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div
                      className="rounded-circle border-1 text-center"
                      style={{
                        height: "30px",
                        width: "30px",
                        "background-color": "yellow",
                      }}
                    >
                      1
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div
                      className="rounded-circle border-1 text-center"
                      style={{
                        height: "30px",
                        width: "30px",
                        "background-color": "yellow",
                      }}
                    >
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
