import React from 'react'
import { BsDribbble, BsFileEarmarkBarGraph, BsWallet2 } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiBarChartAlt2, BiLogOut } from 'react-icons/bi';
import { FiAlertOctagon } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const host = window.location.origin
    const path = window.location.pathname
    return (
        <>
            <div className="side-bar d-lg-flex d-md-none d-sm-none d-none align-items-center flex-column justify-content-between">
                <div className="tabs">
                    <Link to="/">
                    <div  className={ path == "/" ? " tab tab-active" : " tab"}>
                        <BsDribbble className='fs-4 text-light' />
                    </div>
                    </Link>
                    <Link to="/chart">
                    <div className={ path == "/chart" ? " tab tab-active" : " tab"}>
                        <AiOutlinePieChart className='fs-4 text-light' />
                    </div>
                    </Link>
                    <Link to="/filter">
                    <div className={ path == "/filter" ? " tab tab-active" : " tab"}>
                        <BsWallet2 className='fs-4 text-light' />
                    </div>
                    </Link>
                    <div className="tab pointer">
                        <BiBarChartAlt2 className='fs-4 text-light' />
                    </div>
                    <div className="tab pointer">
                        <BsFileEarmarkBarGraph className='fs-4 text-light' />
                    </div>
                    <span className='line'></span>
                    <div className='pointer'>
                        <FiAlertOctagon className='fs-4 text-light' />
                    </div>
                    <div className='pointer'>
                        <FiSettings className='fs-4 text-light' />
                    </div>
                </div>
                <div>
                    <div className="tabs pointer">
                        <BiLogOut className='fs-4 text-light' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
