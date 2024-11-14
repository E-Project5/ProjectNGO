import React, { useState } from "react";

const Attendees = () => {
  const [attendees, setAttendees] = useState([
    {
      id: 1,
      ticketNo: "1604465734",
      firstName: "James",
      lastName: "Smith",
      email: "beau@automattic.com",
      phone: "419-553-7748",
      // Additional fields for modal
      country: "USA",
      address: "2637 Stonecoal Road",
      state: "OH",
      city: "Toledo",
      zip: "43604",
      website: "https://www.aaa.com",
      wantToBeListed: "Yes",
      ticketName: "STANDARD PASS",
      ticketPrice: "19",
      ticketDetailAvailable:
        "For 1 Day\nFull Conference\nLive Videos\nMeet Speakers\n",
      ticketDetailNotAvailable:
        "Get Certificates\nEvent Photos Via Email\nEvent Videos Via Email\n",
      bookingDate: "2020-11-04",
      bookingTime: "04:55:34 AM",
      paymentMethod: "PayPal",
      paymentStatus: "Completed",
      transactionId: "PAYID-L6RDIKQ42B43364UY858672T",
    },
    // Add more attendees as needed
  ]);

  const [selectedAttendee, setSelectedAttendee] = useState(null);

  const handleViewAttendee = (attendee) => {
    setSelectedAttendee(attendee);
  };

  const handleCloseModal = () => {
    setSelectedAttendee(null);
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      {/* Tab 2 Content */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 mt-2 font-weight-bold text-primary">
            View Attendees
          </h6>
          <div className="float-right d-inline">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#addAttendeeModal"
            >
              <i className="fa fa-plus"></i> Add New
            </button>
            {/* Modal for Adding Attendee */}
            <div
              className="modal fade"
              id="addAttendeeModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Attendee
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
                      action="https://demo.phpscriptpoint.com/eventplus/admin/attendee"
                      enctype="multipart/form-data"
                      method="post"
                      acceptCharset="utf-8"
                    >
                      {/* Add input fields for new attendee */}
                      {/* ... */}
                      <button
                        type="submit"
                        className="btn btn-success"
                        name="form_attendee_add"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal */}
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
                  <th>Ticket No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {attendees.map((attendee, index) => (
                  <tr key={attendee.id}>
                    <td>{index + 1}</td>
                    <td>{attendee.ticketNo}</td>
                    <td>{attendee.firstName}</td>
                    <td>{attendee.lastName}</td>
                    <td>{attendee.email}</td>
                    <td>{attendee.phone}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        data-toggle="modal"
                        onClick={() => handleViewAttendee(attendee)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <a
                        href={`https://demo.phpscriptpoint.com/eventplus/admin/attendee/delete-attendee/${attendee.id}`}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End of Tab 2 Content */}

      {/* Modal for Viewing Attendee Details */}
      {selectedAttendee && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Details about Attendee
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Ticket No</label>
                  <div>{selectedAttendee.ticketNo}</div>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <div>{selectedAttendee.firstName}</div>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <div>{selectedAttendee.lastName}</div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div>{selectedAttendee.email}</div>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <div>{selectedAttendee.phone}</div>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <div>{selectedAttendee.country}</div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <div>{selectedAttendee.address}</div>
                </div>
                <div className="form-group">
                  <label>State</label>
                  <div>{selectedAttendee.state}</div>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <div>{selectedAttendee.city}</div>
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <div>{selectedAttendee.zip}</div>
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <div>{selectedAttendee.website}</div>
                </div>
                <div className="form-group">
                  <label>Want to be listed?</label>
                  <div>{selectedAttendee.wantToBeListed}</div>
                </div>
                <div className="form-group">
                  <label>Ticket Name</label>
                  <div>{selectedAttendee.ticketName}</div>
                </div>
                <div className="form-group">
                  <label>Ticket Price</label>
                  <div>{selectedAttendee.ticketPrice}</div>
                </div>
                <div className="form-group">
                  <label>Ticket Detail (What is available)</label>
                  <div>{selectedAttendee.ticketDetailAvailable}</div>
                </div>
                <div className="form-group">
                  <label>Ticket Detail (What is not available)</label>
                  <div>{selectedAttendee.ticketDetailNotAvailable}</div>
                </div>
                <div className="form-group">
                  <label>Booking Date</label>
                  <div>{selectedAttendee.bookingDate}</div>
                </div>
                <div className="form-group">
                  <label>Booking Time</label>
                  <div>{selectedAttendee.bookingTime}</div>
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <div>{selectedAttendee.paymentMethod}</div>
                </div>
                <div className="form-group">
                  <label>Payment Status</label>
                  <div>{selectedAttendee.paymentStatus}</div>
                </div>
                <div className="form-group">
                  <label>Transaction ID</label>
                  <div>{selectedAttendee.transactionId}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendees;
