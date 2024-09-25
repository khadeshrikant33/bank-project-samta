import React, { Component } from 'react'
import './Our_vision.css'

export default class Our_vision extends Component {
  render() {
    return (
      <>
        <section className='vision' style={{"background-color":"#F1F1F1"}}>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12">
                        <div className='home'>
                        <h1 className='text-white'>Our Vision</h1>
                       {/* <a><span>Home</span></a>
                       <a><span>About</span></a>
                       <a><span>Vision</span></a> */}
                        </div>
                      

                    </div>
                </div>
            </div>
        </section>
        <section>
        <div className="container bg-white">
              <div className="row">
                <div className="col-6 p-4 ">
                  <img className='w-100  ' src='https://www.samatapat.com/admin/uploads/ourvisionpage/vision654a1eb0cfa62.png'></img>
                 
                </div>
                <div className="col-6 p-4 ">
                     <img className='w-100 ' src='https://www.samatapat.com/admin/uploads/ourvisionpage/vision-banner654a1eb0cfe65.jpg'></img>

                </div>
              </div>
            </div>
        </section>
       
      </>
    )
  }
}
