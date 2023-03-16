import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="mm-top-navbar">
                <div className="mm-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="mm-navbar-logo d-flex align-items-center justify-content-between">
                            <i className="fas fa-bars wrapper-menu"></i>
                            <a href="/" className="header-logo">
                                <img src="/" className="img-fluid mode light-img rounded-normal site_logo_preview " alt="logo" />
                                <img src="/" className="img-fluid mode dark-img rounded-normal darkmode-logo site_dark_logo_preview" alt="dark-logo" />
                                {/* <!-- <h4 className="ml-1"><b>Car Teugmo App</b></h4> --> */}
                            </a>
                        </div>
                        <div className="mm-search-bar device-search m-auto">
                            {/* <!-- <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        <input type="text" className="text search-input" placeholder="Search here..."/>
                    </form> --> */}
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="change-mode">
                                <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> </p>
                                        <input type="checkbox" className="custom-control-input" id="dark-mode" data-active="true" />
                                        <label className="custom-control-label" for="dark-mode" data-mode="toggle">
                                            <span className="switch-icon-left">
                                                <svg className="svg-icon" id="h-moon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                                </svg>
                                            </span>
                                            <span className="switch-icon-right">
                                                <svg className="svg-icon" id="h-sun" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                                <i className="ri-menu-3-line"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                    <li className="nav-item nav-icon dropdown">
                                        <a href="#" className="search-toggle dropdown-toggle notification_list" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            <svg className="svg-icon text-primary feather feather-bell" id="mm-bell-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            <span className="bg-primary "></span>
                                            <span className="badge badge-pill badge-primary badge-up notify_count count-mail d-none"></span>
                                            <span className="bg-primary dots d-none"></span>
                                        </a>
                                        <div className="mm-sub-dropdown dropdown-menu notification-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="card shadow-none m-0 border-0">
                                                <div className="card-body p-0 notification_data">
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item nav-icon dropdown">
                                        <a href="#" className="search-toggle dropdown-toggle" id="languageDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="/" className="img-fluid rounded selected-lang" alt="lang-flag" />
                                            <span className="bg-primary"></span>
                                        </a>
                                        <div className="mm-sub-dropdown dropdown-menu language-menu" aria-labelledby="languageDropdownMenu">
                                            <div className="card shadow-none m-0 border-0">
                                                <div className="p-0 ">
                                                    <ul className="dropdown-menu-1 list-group list-group-flush">
                                                        <li className="dropdown-item-1 list-group-item px-2">
                                                            <a className="p-0" data-lang="ch" href="/">
                                                                <img src="/" alt="img-flag-ch" className="img-fluid mr-2 selected-lang-list" />
                                                                Chamorro
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item-1 list-group-item px-2">
                                                            <a className="p-0" data-lang="en" href="/">
                                                                <img src="/" alt="img-flag-en" className="img-fluid mr-2 selected-lang-list" />
                                                                English
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item nav-icon dropdown full-screen">
                                        <a href="#" className="nav-item nav-icon dropdown" id="btnFullscreen">
                                            <i className="max"><svg className="svg-icon  text-primary feather feather-maximize" id="d-3-max" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></i>
                                            <i className="min d-none"><svg className="svg-icon  text-primary feather feather-minimize" id="d-3-min" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg></i>
                                        </a>
                                    </li>
                                    <li className="nav-item nav-icon dropdown">
                                        <a href="#" className="nav-item nav-icon dropdown-toggle pr-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            <img src="" className="img-fluid avatar-rounded" alt="user" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <li className="dropdown-item d-flex ">
                                                <svg className="svg-icon mr-0 text-primary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <a href="">My Profile</a>
                                            </li>
                                            <li className="dropdown-item d-flex ">
                                                <svg className="svg-icon mr-0 text-primary" id="h-03-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <a href="">Setting</a>
                                            </li>

                                            <li className="dropdown-item d-flex border-top">
                                                <form method="POST" action="">
                                                    <input type="hidden" name="_token" value="7RVsyZIZwADayhzOXp3YXGK9mEKMDySIx0rzYHFO" />                                        <svg className="svg-icon mr-0 text-primary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    <a href="javascript:void(0)" className="pl-1"
                                                        onclick="event.preventDefault();
                                            this.closest('form').submit();">
                                                        Log out
                                                    </a>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar