import React, { useState } from 'react'
import Header from '../Elements/Header'
import Sidebar from '../Elements/Sidebar'
import TeamCard from '../Elements/TeamCard'
import { BsDribbble } from 'react-icons/bs'
import Leaderboard from './Elements/Leaderboard'
import Trades from './Elements/Trades'

const Home = () => {
    const [a, setA] = useState(1) // init a
   const [b, setB] = useState(2) // init b

   const swap = () => {
      const aTemp = a
      const bTemp = b
      setA(bTemp) // swap a
      setB(aTemp) // swap b
   }
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="d-flex">

                    <Sidebar />
                    <div className='row w-90 mx-0 w-100 align-items-start ' >
                        <div className="col-lg-9 px-0  col-md-12 col-sm-12 col-12 scroll-div ">
                            <div className='row mx-0'>
                                <TeamCard />
                                <TeamCard />
                            </div>
                            <div className='row mx-0 '>
                                <TeamCard />
                                <TeamCard />
                            </div>
                            <div className='mt-4 mx-lg-2 mx-0'>
                                <p class="text-white  mx-lg-2 mx-0  fw-bold fs-5 tex_shadow">
                                    Recent<span class="text-warning fw-bold">Traders</span>
                                </p>
                                <div class="Matchup__box   mx-lg-2 mx-0 position-r ">
                                    <div class=" mx-0 light-row  top-header ">
                                        <div class="row p-3">
                                            <div class="col-4   ">
                                                <p class="mb-0 fs-7 text-white">Team </p>
                                            </div>
                                            <div class="col-2   text-center ">
                                                <p class="mb-0 fs-7 text-white">Sport</p>
                                            </div>
                                            <div class="col-2    text-center">
                                                <p class="mb-0 fs-7 text-white">Token</p>
                                            </div>
                                            <div class="col-2   text-center ">

                                                <p class="mb-0 fs-7 text-white">Amount

                                                </p>
                                            </div>
                                            <div class="col-2   text-center ">

                                                <p class="mb-0 fs-7 text-white ">Action</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="scroll-seprate2">
                                        <div class=" mx-0  radius__17_bottom py-2">
                                           <Trades />
                                           <Trades />
                                           <Trades />
                                           <Trades />
                                           <Trades />
                                           <Trades />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 px-0 scroll-div  ">
                            <div class="">
                                <p class="text-white fw-bold fs-5 tex_shadow">
                                    Recent <span class="text-warning fw-bold">Games</span>
                                </p>
                                <div class="card__iz  mx-0 p-3 ">
                                    <div class="d-flex justify-content-between">
                                        <p class="fw-600  mb-0 text-white">Pay</p>

                                        <p class="fw-600 mb-0  text-white">

                                            Balance: <span class="fw-bold text-warning">
                                                0 Max
                                            </span>

                                        </p>

                                    </div>
                                    <div class="d-flex mt-2 align-items-center justify-content-between">
                                        <div className='d-flex align-items-center'>
                                            <img src="/assets/images/solana.png" className='' alt="" />
                                            <select id="cars">
                                                <option value="volvo" className='text-dark'> Sol</option>
                                                <option value="saab" className='text-dark'>Eth</option>
                                                <option value="vw" className='text-dark'>Btc</option>

                                            </select>
                                        </div>
                                        <div>
                                            <input type="number" value={a} class="my-input" />
                                        </div>

                                    </div>
                                    <div class="text-center">
                                        <img src="assets/images/swap.png" className='pointer' onClick={()=> swap()} alt="" />
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <p class="fw-600  mb-0 text-white">Pay</p>

                                        <p class="fw-600 mb-0  text-white">

                                            Balance: 0<span class="fw-600 text-warning">

                                            </span>

                                        </p>

                                    </div>
                                    <div class="d-flex mt-2 align-items-center justify-content-between">
                                        <div className='d-flex align-items-center'>
                                            <img  src="/assets/images/solana.png"  alt="" />
                                            <select id="cars">
                                                <option value="volvo" className='text-dark'> Sol</option>
                                                <option value="saab" className='text-dark'>Eth</option>
                                                <option value="vw" className='text-dark'>Btc</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="number" value={b} class="my-input" />

                                        </div>

                                    </div>
                                    <div class="text-center mt-3">
                                        <button type="button" onClick={()=> swap()}  class="btn-global">
                                            Swap
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p class="text-white   mx-2  fw-bold fs-5 tex_shadow">
                                    Leader <span class="text-warning fw-bold">board</span>
                                </p>

                                <div class="Matchup__box  position-r ">

                                    <div class=" mx-0 light-row  top-header ">
                                        <div class="row mx-0 p-2">
                                            <div class="col-3 text-center">
                                                <p class="mb-0 fs-7 text-white">User </p>
                                            </div>
                                            <div class="col-2  ">
                                                <p class="mb-0 fs-7 text-white">Ranks</p>
                                            </div>
                                            <div class="col-2 ">
                                                <p class="mb-0 fs-7 text-white">Wins</p>
                                            </div>
                                            <div class="col-2 ">

                                                <p class="mb-0 fs-7 text-white">Avg</p>
                                            </div>
                                            <div class="col-2 ">

                                                <p class="mb-0  fs-7 text-white ">Score</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="scroll-seprate2">
                                        <Leaderboard  />
                                        <Leaderboard  />
                                        <Leaderboard  />
                                        <Leaderboard  />
                                        <Leaderboard  />
                                        <Leaderboard  />
                                   
                                        
                                        
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

export default Home