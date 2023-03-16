import React from 'react'

const Display = () => {
    return (
        <div>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="d-flex align-items-center justify-content-between welcome-content">
                                <div className="navbar-breadcrumb">
                                    {/* <!-- <h4 className="mb-0 font-weight-700">Welcome To Dashboard</h4> --> */}
                                </div>
                                <div className="">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="9" cy="7" r="4" />
                                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">7</h5>
                                                    <p className="mb-0">Total Driver</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="9" cy="7" r="4" />
                                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                        <line x1="19" y1="7" x2="19" y2="10" />
                                                        <line x1="19" y1="14" x2="19" y2="14.01" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">6</h5>
                                                    <p className="mb-0">Waiting For Approval</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="5" cy="18" r="3" />
                                                        <circle cx="19" cy="18" r="3" />
                                                        <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                                                        <circle cx="17" cy="5" r="1" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">0</h5>
                                                    <p className="mb-0s">Total Rider</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="7" cy="17" r="2" />
                                                        <circle cx="17" cy="17" r="2" />
                                                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">0</h5>
                                                    <p className="mb-0">Total Ride</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">$0.00</h5>
                                                    <p className="mb-0">Today Earning</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">$0.00</h5>
                                                    <p className="mb-0">Monthly Earning</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">$0.00</h5>
                                                    <p className="mb-0">Total Earning</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="mm-cart-image text-primary">
                                                    <svg className="svg-icon svg-danger" width="50" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                        <line x1="9" y1="9" x2="10" y2="9" />
                                                        <line x1="9" y1="13" x2="15" y2="13" />
                                                        <line x1="9" y1="17" x2="15" y2="17" />
                                                    </svg>
                                                </div>
                                                <div className="mm-cart-text">
                                                    <h5 className="font-weight-700">0</h5>
                                                    <p className="mb-0">Complaint</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Recent Request</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                    </div>
                                </div>
                                <div className="card-body align-items-center">
                                    <div className="table-responsive">
                                        <table className="table mb-1 table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th scope='col'>#</th>
                                                    <th scope='col'>Rider</th>
                                                    <th scope='col'>Requested Date</th>
                                                    <th scope='col'>Driver</th>
                                                    <th scope='col'>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="5">No record found</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Income</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                    </div>
                                </div>
                                <div className="card-body align-items-center">
                                    <div id="dash-income-chart" style={{ minHeight: "365px", }}><div id="apexchartswru7km7i" className="apexcharts-canvas apexchartswru7km7i apexcharts-theme-light" style={{ width: "464px", height: "350px", }}>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display