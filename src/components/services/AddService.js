import React from 'react'

const AddService = () => {
    return (
        <div>
            <div>
                <div id="remoteModelData" className="modal fade" role="dialog" />
                <div className="content-page">
                    <div>
                        <form method="POST" action="https://carpooling.suzukijinnahavenue.com/service" acceptCharset="UTF-8" encType="multipart/form-data"><input name="_token" type="hidden" defaultValue="GyZlaiTKmtL9EMzxCj1ifnt0BaROGAPNPWrB5f28" />
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <div className="header-title">
                                                <h4 className="card-title">Add Service</h4>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="new-user-info">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="name" className="form-control-label">Name <span className="text-danger">*</span></label>
                                                        <input placeholder="Name" className="form-control" required name="name" type="text" id="name" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="form-control-label" htmlFor="region_id">Region <span className="text-danger" id="distance_unit">* </span></label>
                                                        <select data-ajax--url="https://carpooling.suzukijinnahavenue.com/ajax-list?type=region" data-placeholder="Select Region" className="form-control select2js" required data-distance-unit id="region_id" name="region_id" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="capacity" className="form-control-label">Capacity <span className="text-danger">*</span></label>
                                                        <input min={1} placeholder="Capacity" className="form-control" required name="capacity" type="number" id="capacity" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="base_fare" className="form-control-label">Base Fare <span className="text-danger">*</span></label>
                                                        <input className="form-control" min={0} step="any" required placeholder="Base Fare" name="base_fare" type="number" id="base_fare" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="minimum_fare" className="form-control-label">Minimum Fare <span className="text-danger">*</span></label>
                                                        <input className="form-control" min={0} step="any" required placeholder="Minimum Fare" name="minimum_fare" type="number" id="minimum_fare" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="minimum_distance" className="form-control-label">Minimum Distance <span className="text-danger">*</span></label>
                                                        <input className="form-control" min={0} step="any" placeholder="Minimum Distance" name="minimum_distance" type="number" id="minimum_distance" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="per_distance" className="form-control-label">Per Distance <span className="text-danger">*</span></label>
                                                        <input min={0} step="any" placeholder="Per Distance" className="form-control" name="per_distance" type="number" id="per_distance" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="per_minute_drive" className="form-control-label">Per Minute Drive <span className="text-danger">*</span></label>
                                                        <input min={0} step="any" placeholder="Per Minute Drive" className="form-control" name="per_minute_drive" type="number" id="per_minute_drive" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="waiting_time_limit" className="form-control-label">Waiting Time Limit(in minutes)<span className="text-danger">*</span></label>
                                                        <input min={0} step="any" placeholder="Waiting Time Limit" className="form-control" name="waiting_time_limit" type="number" id="waiting_time_limit" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="per_minute_wait" className="form-control-label">Per Minute Wait <span className="text-danger">*</span></label>
                                                        <input min={0} step="any" placeholder="Per Minute Wait" className="form-control" name="per_minute_wait" type="number" id="per_minute_wait" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="cancellation_fee" className="form-control-label">Cancellation Fee <span className="text-danger">*</span></label>
                                                        <input className="form-control" min={0} step="any" required placeholder="Cancellation Fee" name="cancellation_fee" type="number" id="cancellation_fee" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="payment_method" className="form-control-label">Payment Method <span className="text-danger">*</span></label>
                                                        <select className="form-control select2js" required id="payment_method" name="payment_method"><option value="cash">Cash</option><option value="wallet">Wallet</option><option value="cash_wallet">Cash &amp; Wallet</option></select>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="commission_type" className="form-control-label">Commission Type</label>
                                                        <select className="form-control select2js" required id="commission_type" name="commission_type"><option value="fixed">Fixed</option><option value="percentage">Percentage</option></select>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="admin_commission" className="form-control-label">Admin Commission <span className="text-danger">*</span></label>
                                                        <input min={0} step="any" placeholder="Admin Commission" className="form-control" name="admin_commission" type="number" id="admin_commission" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="status" className="form-control-label">Status <span className="text-danger">*</span></label>
                                                        <select className="form-control select2js" required id="status" name="status"><option value={1}>Active</option><option value={0}>Inactive</option></select>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="form-control-label" htmlFor="image">Image </label>
                                                        <div className="custom-file">
                                                            <input type="file" name="service_image" className="custom-file-input" accept="image/*" />
                                                            <label className="custom-file-label">Choose Image</label>
                                                        </div>
                                                        <span className="selected_file" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <input className="btn btn-md btn-primary float-right" type="submit" defaultValue="Save" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddService