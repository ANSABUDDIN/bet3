import React, { useState } from 'react'
import Header from '../Elements/Header'
import Sidebar from '../Elements/Sidebar'
import ChartOne from './Elements/ChartOne'
import ChartTwo from './Elements/ChartTwo'
import MatchRow from './Elements/MatchRow'
import Progressbar from './Elements/Progressbar'

const Chart = () => {
    const [tooglebtn, settooglebtn] = useState(1)
    const [mood, setmood] = useState(false)
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="d-flex">

                    <Sidebar />
                    <div className='row w-90 mx-0 w-100 align-items-start ' >
                        <div className="col-lg-9 px-0  col-md-12 col-sm-12 col-12 scroll-div ">
                            <div className='row mx-0 '>
                                <div className="d-flex align-items-center  ">
                                    <div>
                                        <img src="/assets/images/cheetah.png" draggable={false} className="img-fluid" alt="" />
                                    </div>
                                    <div>
                                        <p className="fw-600 text-uppercase mb-0 fs-4 text-white">Jacksonville Jaguars
                                        </p>
                                        <div className="d-flex gap-4">
                                            <p className="text-uppercase fs-7 text-muted">@ LA Chargers </p>
                                            <p className="text-uppercase  fs-7 text-muted"> 4:05 PM EST
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="row  mt-2 mx-0">
                                    <hr />
                                    <div onClick={() => mood == 0 ? setmood(1) : setmood(0)} className='pointer d-lg-none d-flex text-light align-items-center justify-content-between'>
                                        Match box <img src={mood == 0 ? "/assets/images/down-arrow.svg" : "/assets/images/up-arrow.svg"} alt="" />
                                    </div>
                                    <div className=" mb-3 mt-lg-0 mt-3 col-lg-3 col-12 ">
                                        <div className={mood == 0 ? "cla mini-none Matchup__box scroll-seprate2" : "cla  Matchup__box scroll-seprate2"}>
                                            {/* <div className="cla mini-none Matchup__box scroll-seprate2 "> */}
                                            <Progressbar />
                                            <Progressbar />
                                            <Progressbar />
                                            <Progressbar />
                                            <Progressbar />
                                            <Progressbar />
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                    <div className="col-lg-9">
                                        <p className='fs-3 tex_shadow mb-0 fw-600 text-light'>
                                            JAX VS LAC
                                        </p>
                                        <div>
                                            <p className="text-muted fw-600">
                                                Point Totals
                                            </p>

                                        </div>
                                        <div className="d-flex flex-wrap gap-lg-0 gap-2 justify-content-lg-between justify-content-center">
                                            <div className="align-items-center d-flex  gap-2">

                                                <select id="mydrop">
                                                    <option value="volvo">As Home Team</option>
                                                    <option value="saab">As Away Team</option>
                                                    <option value="saab">As Favorite</option>
                                                    <option value="vw">As Underdog</option>
                                                    <option value="audi" selected>As Home Favorite</option>
                                                    <option value="audi" selected>As Home Underdog
                                                    </option>
                                                    <option value="audi" selected>As Away Favorite</option>
                                                    <option value="audi" selected>As Away Favorite</option>
                                                    <option value="audi" selected>As Away Underdog
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="d-flex cart__card align-items-center  text-light ">
                                                <span className="button-mini">
                                                    Moneyline
                                                </span>
                                                <span className="button-mini">
                                                    ATS
                                                </span>
                                                <span className="button-mini">
                                                    Point Totals
                                                </span>


                                            </div>
                                            <div className="d-flex mt-lg-0  btn-global-toogle  align-items-center">
                                                <button id="btn-1" onClick={() => settooglebtn(1)} className={tooglebtn == 1 ? "btn-active" : "btn-nonactive"}>
                                                    JAX
                                                    {/* btn-nonactive */}
                                                </button>
                                                <button id="btn-2" onClick={() => settooglebtn(0)} className={tooglebtn == 0 ? "btn-active" : "btn-nonactive"}>
                                                    LAC
                                                </button>
                                            </div>

                                        </div>
                                        <div className='cart__card mt-lg-4 mt-3'>
                                            {
                                                tooglebtn == 1 ? <ChartOne /> : <ChartTwo />
                                            }

                                            <div className='d-flex justify-content-center align-items-center gap-3'>

                                                <div onClick={() => settooglebtn(1)} className=' d-flex align-items-center gap-2 pointer'>
                                                    <span className='c-purple'></span>
                                                    <p className='text-light mb-0'>LAC</p>
                                                </div>
                                                <div onClick={() => settooglebtn(0)}
                                                    className='d-flex align-items-center gap-2 pointer'>
                                                    <span className='c-yellow'></span>
                                                    <p className='text-light mb-0'>JAX</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 px-0 scroll-div  ">

                            <div className='mt-4'>
                                <p className="text-white   mx-2  fw-bold fs-5 tex_shadow">
                                    Previous <span className="text-warning fw-bold">Matchups</span>
                                </p>

                                <div className="Matchup__box  position-r ">

                                    <div className=" mx-0 light-row  top-header ">
                                        <div class="row mx-0 bg__dpurple  fs-8 py-2">
                                            <div class="col-2">
                                                <p class="mb-0 text-white fs-8">Date</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-0 text-white fs-8">Opp</p>
                                            </div>
                                            <div class="col-4">
                                                <p class="mb-0 fs-8 text-white text-center">Final Score</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-0 text-white fs-8">Spd</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-0 text-white fs-8">O | U</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scroll-seprate2">
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />
                                        <MatchRow />



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart
