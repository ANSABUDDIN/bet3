import React from 'react'
import { BsDribbble } from 'react-icons/bs'


const TeamCard = () => {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 px-lg-2 my-2 px-0 col-12">
                <div href="" className=" card-box radius__20 p-2   d-flex flex-column  text-decoration-none">
                    <div className="d-flex justify-content-between align-items-center w-100  p-xl-3 p-1 flex-wrap">
                        <div className="d-flex align-items-center gap-3">
                            <BsDribbble className='fs-4 text-light' />
                            <span className="text-white"> CL</span>
                        </div>
                        <div>
                            <p className="text-muted mb-0">Thursday,15th Sep <span className='text-white'>|</span> 12:30 AM</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <div className="text-center">
                                <img src="/assets/images/team-01.png" alt="" className="img-fluid mx-auto" />

                            </div>
                            <p className="text-white fs-6 mb-0 text-center mt-2">Manchester City</p>
                            <p className="text-warning text-center fs-8 mb-0">0.70% to win $1.00</p>
                        </div>
                        <div>
                            <h2 className="text-white mb-0">VS</h2>
                            <p className="text-warning fs-8 mb-0">13.17%</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <div className="d-flex justify-content-around align-items-center flex-column">
                                <div className="text-center">
                                    <img src="/assets/images/team-01.png" alt="" className="img-fluid mx-auto" />

                                </div>
                                <p className="text-white fs-6 mb-0 mt-2 text-center">Borussia Dortmund</p>
                                <p className="text-warning mb-0 fs-8 text-center">0.70% to win $1.00</p>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex  justify-content-between  my-3">
                        <button className="btn-global mt-lg-0 mt-3"> Bet $MCI</button>
                        <button className="btn-global mt-lg-0 mt-3"> Bet $MCI</button>
                        <button className="btn-global mt-lg-0 mt-3"> Bet $MCI</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard
