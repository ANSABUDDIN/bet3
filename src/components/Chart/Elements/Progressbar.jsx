import React from 'react'

const Progressbar = () => {
    return (
        <>
            <div className="my-2  p-2 ps-2">
                <div className="d-flex justify-content-between  ">
                    <p className="mb-0 text-light fw-400 fs-4">JAX VS LAC </p>
                </div>
                <div className="bar_img mt-2">
                    <div className="purple_progress_bar">
                        <p className="mb-0 text-warning">JAX</p>

                    </div>
                </div>
                <div className=" mt-2">
                    <div className="yellow_progress_bar">
                        <p className="mb-0 ">LAC</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Progressbar
