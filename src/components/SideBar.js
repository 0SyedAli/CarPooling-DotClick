import React from 'react'
const SideBar = () => {
    return (
        <div className="mm-sidebar sidebar-default">
            <div className="mm-sidebar-logo d-flex align-items-center justify-content-between">
                <a href="/" className="header-logo">
                    <img src="/" className="img-fluid mode light-img rounded-normal light-logo site_logo_preview" alt="logo" />
                    <img src="https://carpooling.suzukijinnahavenue.com/images/dark_logo.png" className="img-fluid mode dark-img rounded-normal darkmode-logo site_dark_logo_preview" alt="dark-logo" />
                </a>
                <div className="side-menu-bt-sidebar">
                    <i className="fas fa-bars wrapper-menu"></i>
                </div>
            </div>
            <div className="data-scrollbar" data-scroll="1">
                <nav className="mm-sidebar-menu">
                    <ul id="mm-sidebar-toggle" className="side-menu">
                        <li className="active">
                            <a className="nav-link" href="/">
                                <i className="fas fa-home"></i><span>Dashboard</span>
                            </a>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#rider">
                                <i className="fas fa-user"></i><span>Rider</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="rider">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Rider List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Rider</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#region">
                                <i className="fas fa-globe"></i><span>Region</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="region">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Region List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Region</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#service">
                                <i className="fas fa-taxi"></i><span>Service</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="service">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Service List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Service</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#driver">
                                <i className="fas fa-id-card"></i><span>Driver</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="driver">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Driver List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Driver</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Manage Driver Document</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="/">
                                <i className="fas fa-file"></i><span>Document</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="document">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Document List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Document</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#coupon">
                                <i className="fas fa-gift"></i><span>Coupon</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="coupon">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Coupon List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Coupon</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#riderequest">
                                <i className="fas fa-car-side"></i><span>Ride Request</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="riderequest">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Ride Request List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/">
                                <i className="fas fa-file-alt"></i><span>Complaint</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/">
                                <i className="fas fa-money-check"></i><span>Withdraw Request</span>
                            </a>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#account_setting">
                                <i className="fas fa-users-cog"></i><span>Account Setting</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="account_setting">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Role List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Permission List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#additionalfees">
                                <i className="fas fa-address-book"></i><span>Additional Fees</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="additionalfees">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>Additional Fees List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add Additional Fees</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#sos">
                                <i className="fas fa-address-book"></i><span>SOS</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="sos">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-list"></i><span>SOS List</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-plus-square"></i><span>Add SOS</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="" href="#pages">
                                <i className="fas fa-file"></i><span>Pages</span>
                                <i className="fas fa-angle-right mm-arrow-right arrow-active"></i>
                                <i className="fas fa-angle-down mm-arrow-right arrow-hover"></i>
                            </a>
                            <ul className="submenu collapse  " id="pages">
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-file-contract"></i><span>Terms and Condition</span>
                                    </a>
                                </li>
                                <li className="sidebar-layout">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-user-shield"></i><span>Privacy Policy</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <a className="nav-link" href="/">
                                <i className="fas fa-cog"></i><span>Setting</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="pt-5 pb-2"></div>
            </div>
        </div>
    )
}
export default SideBar