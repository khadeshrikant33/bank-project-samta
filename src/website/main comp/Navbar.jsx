import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav_head'>
                <div className='row'>
                    <div className='col-12 p-0'>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className=" navbar-brand" >
                                    <img src='https://www.samatapat.com/images/logo.png' />
                                    <img src='https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png' />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className=" nav-link active" to="/" aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                        <NavLink className=" nav-link dropdown-toggle" to="about_home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                               About Us 
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/our_vision" > Our Vision</NavLink>
                                                <NavLink className=" dropdown-item" to="/our_teams" > Our Teams</NavLink>
                                                
                                            </div>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Deposits
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/saving">Saving </NavLink>
                                                <NavLink className=" dropdown-item" to="/team_deposite">Daily Deposit</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                LOANS
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="personal_loan" >Personal Lone</NavLink>
                                                <NavLink className=" dropdown-item" to="vahicle_lone" >Vehicle Lone</NavLink>
                                                
                                               
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/mobile_banking">Mobile Banking</NavLink>
                                                <NavLink className=" dropdown-item" to="/money_transfer" > Money Transfer</NavLink>
                                                
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                        <NavLink className=" nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                               Contact
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/head_office" > Head Office</NavLink>
                                                
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/notice">Notice</NavLink>
                                        </li>
                                       
                                        <li className="nav-item dropdown">
                                        <NavLink className=" nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              Gallery
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/news" >News</NavLink>
                                                
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/carrer">Career</NavLink>
                                        </li>
                                      
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar