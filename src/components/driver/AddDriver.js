import React from 'react'

const AddDriver = () => {
    return (
        <div>
            <div className="content-page">
                    <form method="POST" action="https://carpooling.suzukijinnahavenue.com/driver" accept-charset="UTF-8" enctype="multipart/form-data">
                        <input name="_token" type="hidden" value="X7SXD551fpg6cFnD1Ez4SrW9eEgLPBkIc0jTTBJO" />
                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Add Driver</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <div className="crm-profile-img-edit position-relative">
                                                <img src="https://carpooling.suzukijinnahavenue.com/images/user/1.jpg" alt="User-Profile" className="crm-profile-pic rounded-circle avatar-100" />
                                                <div className="crm-p-image bg-primary">
                                                    <svg className="upload-button" width="14" height="14" viewBox="0 0 24 24">
                                                        <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                                    </svg>
                                                    <input className="file-upload" type="file" accept="image/*" name="profile_image" />
                                                </div>
                                            </div>
                                            <div className="img-extension mt-3">
                                                <div className="d-inline-block align-items-center">
                                                    <span>Only</span>

                                                    <a href="javascript:void();">.png</a>
                                                    <a href="javascript:void();">.jpg</a>
                                                    <a href="javascript:void();">.jpeg</a>
                                                    <a href="javascript:void();">.gif</a>
                                                    <span>Allowed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Status</label>
                                            <div className="grid" >
                                                <div className="form-check g-col-6">
                                                    <input className="form-check-input" id="status-active" checked="checked" name="status" type="radio" value="active" />
                                                    <label for="status-active" className="form-check-label">Active</label>
                                                </div>
                                                <div className="form-check g-col-6">
                                                    <input className="form-check-input" id="status-inactive" name="status" type="radio" value="inactive" />
                                                    <label for="status-inactive" className="form-check-label">Inactive</label>
                                                </div>
                                                <div className="form-check g-col-6">
                                                    <input className="form-check-input" id="status-pending" name="status" type="radio" value="pending" />
                                                    <label for="status-pending" className="form-check-label">Pending</label>
                                                </div>
                                                <div className="form-check g-col-6">
                                                    <input className="form-check-input" id="status-banned" name="status" type="radio" value="banned" />
                                                    <label for="status-banned" className="form-check-label">Banned</label>
                                                </div>
                                                <div className="form-check g-col-6">
                                                    <input className="form-check-input" id="status-reject" name="status" type="radio" value="reject" />
                                                    <label for="status-reject" className="form-check-label">Reject</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Add Driver Information</h4>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://carpooling.suzukijinnahavenue.com/driver" className="btn btn-sm btn-primary" role="button">Back</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="new-user-info">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label for="first_name" className="form-control-label">First Name <span className="text-danger">*</span></label>
                                                <input placeholder="First Name" className="form-control" required name="first_name" type="text" id="first_name" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="last_name" className="form-control-label">Last Name <span className="text-danger">*</span></label>
                                                <input placeholder="Last Name" className="form-control" required name="last_name" type="text" id="last_name" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="email" className="form-control-label">Email <span className="text-danger">*</span></label>
                                                <input placeholder="Email" className="form-control" required name="email" type="email" id="email" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="username" className="form-control-label">Username <span className="text-danger">*</span></label>
                                                <input className="form-control" required placeholder="Username" name="username" type="text" id="username" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="password" className="form-control-label">Password <span className="text-danger">*</span></label>
                                                <input className="form-control" placeholder="Password" name="password" type="password" value="" id="password" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="contact_number" className="form-control-label">Contact Number <span className="text-danger">*</span></label>
                                                {/* <ContactSelector /> */}
                                                <input placeholder="Contact Number" class="form-control" id="phone" name="contact_number" type="text"></input>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="gender" className="form-control-label">Gender <span className="text-danger">*</span></label>
                                                <select className="form-control select2js" required id="gender" name="gender"><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>
                                            </div>


                                            {/* <!-- Service List --> */}
                                            {/* <div className="form-group col-md-6">
                                                <label for="service_id" className="form-control-label">Select Service</label>
                                                <select className="select2js form-group service" data-placeholder="Select Service" data-ajax--url="https://carpooling.suzukijinnahavenue.com/ajax-list?type=service" id="service_id" name="service_id"></select>
                                            </div> */}

                                            <div className="form-group col-md-6">
                                                <label for="car_model" className="form-control-label">Car Model <span className="text-danger">*</span></label>
                                                <input className="form-control" placeholder="Car Model" name="userDetail[car_model]" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="car_color" className="form-control-label">Car Color <span className="text-danger">*</span></label>
                                                <input className="form-control" placeholder="Car Color" name="userDetail[car_color]" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="car_plate_number" className="form-control-label">Car Plate Number <span className="text-danger">*</span></label>
                                                <input className="form-control" placeholder="Car Plate Number" name="userDetail[car_plate_number]" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="car_production_year" className="form-control-label">Car Production Year <span className="text-danger">*</span></label>
                                                <input className="form-control" placeholder="Car Production Year" name="userDetail[car_production_year]" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="address" className="form-control-label">Address</label>
                                                <textarea className="form-control textarea" rows="3" placeholder="Address" name="address" cols="50" id="address"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4>Driver license</h4>
                                            </div>


                                            <div className="form-group col-md-6">
                                                <label for="document_id" className="form-control-label">Select Document <span className="text-danger">* </span></label>
                                                <select className="select2js form-group document_id" id="document_id" required data-placeholder="Select Document" data-ajax--url="https://carpooling.suzukijinnahavenue.com/ajax-list?type=document" name="document_id"></select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="expire_date">Expire Date <span className="text-danger" id="has_expiry_date"></span> </label>
                                                <input className="form-control min-datepicker" placeholder="Expire Date" name="expire_date" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="is_verified" className="form-control-label">Verification <span className="text-danger">*</span></label>
                                                <select id="is_verified" className="form-control select2js" required name="is_verified"><option value="0">Pending</option><option value="1">Approved</option><option value="2">Rejected</option></select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="driver_document">Upload Document <span className="text-danger" id="document_required"></span> </label>
                                                <div className="custom-file">
                                                    <input type="file" id="driver_document" name="driver_document" className="custom-file-input" />
                                                    <label className="custom-file-label">Choose Document</label>
                                                </div>
                                                <span className="selected_file"></span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4>National Identity</h4>
                                            </div>


                                            <div className="form-group col-md-6">
                                                <label for="document_id" className="form-control-label">Select Document <span className="text-danger">* </span></label>
                                                <select className="select2js form-group document_id" id="document_id" required data-placeholder="Select Document" data-ajax--url="https://carpooling.suzukijinnahavenue.com/ajax-list?type=document" name="document_id"></select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="expire_date">Expire Date <span className="text-danger" id="has_expiry_date"></span> </label>
                                                <input className="form-control min-datepicker" placeholder="Expire Date" name="expire_date" type="text" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="is_verified" className="form-control-label">Verification <span className="text-danger">*</span></label>
                                                <select id="is_verified" className="form-control select2js" required name="is_verified"><option value="0">Pending</option><option value="1">Approved</option><option value="2">Rejected</option></select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="driver_document">Upload Document <span className="text-danger" id="document_required"></span> </label>
                                                <div className="custom-file">
                                                    <input type="file" id="driver_document" name="driver_document" className="custom-file-input" />
                                                    <label className="custom-file-label">Choose Document</label>
                                                </div>
                                                <span className="selected_file"></span>
                                            </div>

                                        </div>

                                        <hr />
                                        <input className="btn btn-md btn-primary float-right" type="submit" value="Save" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default AddDriver