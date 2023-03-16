import React from 'react'
import Default from '../../Default'

const ServiceList = () => {
    const { serviceList } = Default()
    return (
        <div>
      <div id="remoteModelData" classname="modal fade" role="dialog">
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title mb-0">Driver List</h4>
                    </div>
                    <a href="https://carpooling.suzukijinnahavenue.com/driver/create" className="float-right btn btn-sm btn-primary"><i className="fa fa-plus-circle" /> Add Driver</a>                  </div>
                  <div className="card-body">
                    <div id="dataTableBuilder_wrapper" className="dataTables_wrapper no-footer">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="dataTables_length" id="dataTableBuilder_length">
                            <label>Show
                              <select name="dataTableBuilder_length" aria-controls="dataTableBuilder" className>
                                <option value={10}>10</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={500}>500</option>
                                <option value={-1}>All</option>
                              </select>
                              entries</label></div></div><div className="col-md-6" /><div className="col-md-4"><div id="dataTableBuilder_filter" className="dataTables_filter"><label><input type="search" className placeholder="Search" aria-controls="dataTableBuilder" /></label></div></div></div><div className="table-responsive my-3"><div id="dataTableBuilder_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                        <table className="table w-100 dataTable no-footer" id="dataTableBuilder" role="grid" aria-describedby="dataTableBuilder_info" style={{ width: 1001 }}>
                          <thead>
                            <tr role="row"><th title="No" width={60} className="sorting_asc" rowSpan={1} colSpan={1} style={{ width: 60 }} aria-label="No">No</th><th title="Name" className="sorting" tabIndex={0} aria-controls="dataTableBuilder" rowSpan={1} colSpan={1} style={{ width: 135 }} aria-label="Name: activate to sort column ascending">Name</th><th title="Contact Number" className="sorting" tabIndex={0} aria-controls="dataTableBuilder" rowSpan={1} colSpan={1} style={{ width: 127 }} aria-label="Contact Number: activate to sort column ascending">Contact Number</th><th title="Address" className="sorting" tabIndex={0} aria-controls="dataTableBuilder" rowSpan={1} colSpan={1} style={{ width: 202 }} aria-label="Address: activate to sort column ascending">Address</th><th title="Status" className="sorting" tabIndex={0} aria-controls="dataTableBuilder" rowSpan={1} colSpan={1} style={{ width: 51 }} aria-label="Status: activate to sort column ascending">Status</th><th title="Verification" className="sorting" tabIndex={0} aria-controls="dataTableBuilder" rowSpan={1} colSpan={1} style={{ width: 90 }} aria-label="Verification: activate to sort column ascending">Verification</th><th title="Action" width={60} className="text-center sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 60 }} aria-label="Action">Action</th></tr></thead>
                          <tbody>
                            {serviceList.map((res) => {
                              return (
                                <tr role="row" className="odd">
                                  <td className="sorting_1">1</td>
                                  <td>{res.name}</td>
                                  <td>{res.ContactNumber}</td>
                                  <td>{res.Address}</td>
                                  <td>
                                    <span className={`text-capitalize badge ${res.Status == 'active' ? 'bg-primary' : 'bg-danger'}`}>{res.Status}</span></td>
                                  <td>
                                    <span className={`badge ${res.Status == 'active' ? 'bg-success' : 'bg-warning'}`}>{res.Verification}</span></td>
                                  <td className=" text-center">
                                    <form method="POST" action="https://carpooling.suzukijinnahavenue.com/driver/5" acceptCharset="UTF-8" data--submit="driver5">
                                      <input name="_method" type="hidden" defaultValue="DELETE" />
                                      <div className="d-flex justify-content-end align-items-center">
                                        <a className="mr-2" href="https://carpooling.suzukijinnahavenue.com/driver/5/edit" title="Update Driver"><i className="fas fa-edit text-primary" /></a>
                                        <a className="mr-2 text-danger" href="javascript:void(0)" data--submit="driver5" data--confirmation="true" data-title="Delete Driver" title="Delete Driver" data-message="Are you sure you want to delete?">
                                          <i className="fas fa-trash-alt" />
                                        </a>
                                      </div>
                                    </form></td>
                                </tr>
                              )
                            })}
                          </tbody></table></div><div className="row align-items-center"><div className="col-md-6"><div className="dataTables_info" id="dataTableBuilder_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div></div><div className="col-md-6"><div className="dataTables_paginate paging_simple_numbers" id="dataTableBuilder_paginate"><a className="paginate_button previous disabled" aria-controls="dataTableBuilder" data-dt-idx={0} tabIndex={0} id="dataTableBuilder_previous">Previous</a><span><a className="paginate_button current" aria-controls="dataTableBuilder" data-dt-idx={1} tabIndex={0}>1</a></span><a className="paginate_button next disabled" aria-controls="dataTableBuilder" data-dt-idx={2} tabIndex={0} id="dataTableBuilder_next">Next</a></div></div></div><div className="clear" /></div>
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

export default ServiceList