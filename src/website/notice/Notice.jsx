import React, { Component } from 'react'
import './Notice.css';

export default class Notice extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container-fluid section1  " style={{"background-color":"#F1F1F1"}}>
            <div className="row">
              <div className="col-md-12">
                {/* <h3>hello</h3> */}

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img className='h-100 w-100' src='https://www.samatapat.com/admin/uploads/noticepage/sp669bba5cdb97f.jpg'></img>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
