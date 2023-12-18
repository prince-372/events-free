import React from 'react'
import { Button, Container } from 'react-bootstrap' 
import pagelogo from '../assets/image/logo.png'

const Herosec = () => {
  return (
    <header className="bg-img">   
        <Container>
            <nav className="d-flex justify-content-between py-4">
                <div className="pt-17 d-flex align-items-center">
                    <img className='w-logo' src={pagelogo} alt="events free"/>
                    <p className="fs-lg1 fw-bold lh-135 ff-poppins text-skyblue m-0 lh-135">Events </p>
                    <p className="fs-lg1 fw-bold lh-135 ff-poppins text-lightblue m-0 lh-135">Free</p>
                </div>
                <label for="icon" className="icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input type="checkbox" id="icon" hidden/>
               <div className=" d-flex align-item-center mb-0 phone-view gap-5">
                    <ul className="gap-5 d-flex flex-direction-col align-items-center m-0 p-0">
                        <li className="">
                            <a href="" className="fs-md fw-normal ff-poppins text-white font">HOME</a>
                        </li>
                        <li className="">
                            <a href="" className="fs-md fw-normal ff-poppins text-white font">EVENTS</a>
                            </li>
                        <li className="">
                            <a href="" className="fs-md fw-normal ff-poppins text-white font">FEED</a>
                        </li>
                        <li className="">
                            <a href="" className="fs-md fw-normal ff-poppins text-white font">USER NAME</a>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center'>
                    <Button className='fs-md text-white fw-semibold ff-poppins sec-btn lh-150 bg-skyblue'>Log Out</Button>
                    </div>
                </div>
            </nav>
            <div className='pt-5 mt-5'>
            <p className=" fs-md fw-normal text-white lh-150 ff-poppins m-0">Home {">"}  Events </p>
            <p className="fs-xl fw-semibold ff-poppins lh-150 text-white m-0">Events</p>
            </div>
            </Container>
</header>
  )
}

export default Herosec