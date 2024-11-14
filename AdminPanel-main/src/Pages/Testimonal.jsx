import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "David Scott",
      designation: "Chairman, AA Company",
      comment: "Lorem ipsum dolor sit amet.",
      photo:
        "https://demo.phpscriptpoint.com/eventplus/public/uploads/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Pat Henderson",
      designation: "CEO, BB Company",
      comment: "Lorem ipsum dolor sit amet.",
      photo:
        "https://demo.phpscriptpoint.com/eventplus/public/uploads/testimonial-2.jpg",
    },
  ]);

  const handleAddTestimonial = (event) => {
    event.preventDefault();
    // Handle adding new testimonial
  };

  const handleUpdateTestimonial = (id, updatedTestimonial) => {
    // Handle updating a testimonial
  };

  const handleDeleteTestimonial = (id) => {
    setTestimonials(
      testimonials.filter((testimonial) => testimonial.id !== id)
    );
  };

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1 className="h3 mb-3 text-gray-800">Testimonials</h1>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-1-tab"
                  data-toggle="pill"
                  href="#pills-1"
                  role="tab"
                  aria-controls="pills-1"
                  aria-selected="true"
                >
                  Title and Subtitle
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-2-tab"
                  data-toggle="pill"
                  href="#pills-2"
                  role="tab"
                  aria-controls="pills-2"
                  aria-selected="false"
                >
                  Background
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-3-tab"
                  data-toggle="pill"
                  href="#pills-3"
                  role="tab"
                  aria-controls="pills-3"
                  aria-selected="false"
                >
                  Testimonials
                </a>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-1"
                role="tabpanel"
                aria-labelledby="pills-1-tab"
              >
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Title and Subtitle
                    </h6>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleAddTestimonial}>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          defaultValue="Testimonial"
                        />
                      </div>
                      <div className="form-group">
                        <label>Meta Description</label>
                        <textarea
                          name="subtitle"
                          className="form-control h_100"
                          cols="30"
                          rows="10"
                          defaultValue="See what our clients tell about us"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        name="form_testimonial_title_subtitle"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-2"
                role="tabpanel"
                aria-labelledby="pills-2-tab"
              >
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Testimonial Background
                    </h6>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleAddTestimonial}>
                      <div className="form-group">
                        <label>Existing Photo</label>
                        <div>
                          <img
                            src="https://demo.phpscriptpoint.com/eventplus/public/uploads/testimonial_background.jpg"
                            alt=""
                            className="w_300"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Change Photo *</label>
                        <input type="file" name="testimonial_background" />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        name="form_testimonial_background"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-3"
                role="tabpanel"
                aria-labelledby="pills-3-tab"
              >
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 mt-2 font-weight-bold text-primary">
                      View Testimonials
                    </h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-toggle="modal"
                      data-target="#addTestimonialModal"
                    >
                      <i className="fa fa-plus"></i> Add New
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {testimonials.map((testimonial, index) => (
                            <tr key={testimonial.id}>
                              <td>{index + 1}</td>
                              <td>
                                <img
                                  src={testimonial.photo}
                                  alt=""
                                  className="w_150"
                                />
                              </td>
                              <td>{testimonial.name}</td>
                              <td>{testimonial.designation}</td>
                              <td>
                                <button
                                  className="btn btn-warning btn-sm"
                                  data-toggle="modal"
                                  data-target={`#editTestimonialModal${testimonial.id}`}
                                >
                                  <i className="fas fa-edit"></i>
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleDeleteTestimonial(testimonial.id)
                                  }
                                >
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                              </td>
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
      </div>
    </div>
  );
};

export default Testimonials;
