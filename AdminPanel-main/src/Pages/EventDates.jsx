import React from "react";

const EventDates = () => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1 className="h3 mb-3 text-gray-800">Event Dates</h1>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 mt-2 font-weight-bold text-primary">
                  View Event Dates
                </h6>
                <div className="float-right d-inline">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="modal"
                    data-target="#addEventDateModal"
                  >
                    <i className="fa fa-plus"></i> Add New
                  </button>
                  <div
                    className="modal fade"
                    id="addEventDateModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Add Event Date
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form
                            action="https://demo.phpscriptpoint.com/eventplus/admin/event-date"
                            method="post"
                            acceptCharset="utf-8"
                          >
                            <div className="form-group">
                              <label>Name *</label>
                              <input
                                type="text"
                                className="form-control"
                                name="ed_name"
                              />
                            </div>
                            <div className="form-group">
                              <label>Month *</label>
                              <select name="ed_month" className="form-control">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Day *</label>
                              <select name="ed_day" className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-success"
                              name="form_event_date_add"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Day</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, name: "Day 1", month: "November", day: 17 },
                        { id: 2, name: "Day 2", month: "November", day: 18 },
                        { id: 3, name: "Day 3", month: "November", day: 20 },
                      ].map((event) => (
                        <tr key={event.id}>
                          <td>{event.id}</td>
                          <td>{event.name}</td>
                          <td>{event.month}</td>
                          <td>{event.day}</td>
                          <td>
                            <a
                              href="#"
                              className="btn btn-warning btn-sm"
                              data-toggle="modal"
                              data-target={`#editEventDateModal${event.id}`}
                            >
                              <i className="fas fa-edit"></i>
                            </a>
                            <a
                              href={`https://demo.phpscriptpoint.com/eventplus/admin/event-date/delete-event-date/${
                                event.id + 3
                              }`}
                              className="btn btn-danger btn-sm"
                              onClick={() => "Are you sure?"}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </td>

                          {/* Modal for Editing Event Date */}
                          <div
                            className="modal fade"
                            id={`editEventDateModal${event.id}`}
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Edit Event Date
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form
                                    action="https://demo.phpscriptpoint.com/eventplus/admin/event-date"
                                    method="post"
                                    acceptCharset="utf-8"
                                  >
                                    <input
                                      type="hidden"
                                      name="ed_id"
                                      value={event.id + 3}
                                    />
                                    <div className="form-group">
                                      <label>Name *</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="ed_name"
                                        defaultValue={event.name}
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Month *</label>
                                      <select
                                        name="ed_month"
                                        className="form-control"
                                      >
                                        <option value="January">January</option>
                                        <option value="February">
                                          February
                                        </option>
                                        <option value="March">March</option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label>Day *</label>
                                      <select
                                        name="ed_day"
                                        className="form-control"
                                      >
                                        {Array.from({ length: 31 }, (_, i) => (
                                          <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-success"
                                      name="form_event_date_update"
                                    >
                                      Update
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDates;