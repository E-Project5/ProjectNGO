import React, { useState } from "react";

const Organizers = () => {
  const [seoTitle, setSeoTitle] = useState("Organizers");
  const [seoMetaDescription, setSeoMetaDescription] = useState("Organizers");
  const [activeTab, setActiveTab] = useState("home");
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Organizers</h1>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("home")}
                  >
                    Page Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "contact" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Organizers
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {activeTab === "home" && (
                  <div className="tab-pane fade show active" id="pills-home">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          SEO Information
                        </h6>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              className="form-control"
                              value={seoTitle}
                              onChange={(e) => setSeoTitle(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label>Meta Description</label>
                            <textarea
                              className="form-control h_100"
                              rows="10"
                              value={seoMetaDescription}
                              onChange={(e) =>
                                setSeoMetaDescription(e.target.value)
                              }
                            />
                          </div>
                          <button type="submit" className="btn btn-success">
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="tab-pane fade show active" id="pills-contact">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 mt-2 font-weight-bold text-primary">
                          View Organizers
                        </h6>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm float-right"
                          data-toggle="modal"
                          data-target="#addOrganizerModal"
                        >
                          <i className="fa fa-plus"></i> Add New
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>SL</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Photo Placeholder</td>
                                <td>John Doe</td>
                                <td>Manager</td>
                                <td>johndoe@example.com</td>
                                <td>123-456-7890</td>
                                <td>
                                  <button
                                    className="btn btn-warning btn-sm"
                                    data-toggle="modal"
                                    data-target="#updateOrganizerModal"
                                    onClick={() => setSelectedOrganizer(1)}
                                  >
                                    Update
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    data-toggle="modal"
                                    data-target="#deleteOrganizerModal"
                                    onClick={() => setSelectedOrganizer(1)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Organizer Modal */}
      <div
        className="modal fade"
        id="addOrganizerModal"
        tabIndex="-1"
        aria-labelledby="addOrganizerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Organizer</h5>
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
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Designation"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Update Organizer Modal */}
      <div
        className="modal fade"
        id="updateOrganizerModal"
        tabIndex="-1"
        aria-labelledby="updateOrganizerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Organizer</h5>
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
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Update Name"
                  />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Update Designation"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Update Email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Update Phone"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Organizer Modal */}
      <div
        className="modal fade"
        id="deleteOrganizerModal"
        tabIndex="-1"
        aria-labelledby="deleteOrganizerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Organizer</h5>
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
              Are you sure you want to delete this organizer?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
