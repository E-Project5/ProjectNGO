


import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const UpdateProfile = () => {
  return (
    <Container>
      <h1 className="h3 mb-3 text-gray-800">Update Profile</h1>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Change Information
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Change Password
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Change Photo
          </a>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <Card>
                <div className="card-body">
                  <form
                    action="https://demo.phpscriptpoint.com/eventplus/admin/profile"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <label htmlFor="">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        className="form-control"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        defaultValue="admin@gmail.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="form1"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <Card>
                <div className="card-body">
                  <form
                    action="https://demo.phpscriptpoint.com/eventplus/admin/profile"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <label htmlFor="">New Password *</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Retype New Password *</label>
                      <input
                        type="password"
                        name="re_password"
                        className="form-control"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="form2"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <Card>
                <div className="card-body">
                  <form
                    action="https://demo.phpscriptpoint.com/eventplus/admin/profile"
                    enctype="multipart/form-data"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <label htmlFor="">Existing Photo </label>
                      <div>
                        <img
                          src="https://demo.phpscriptpoint.com/eventplus/public/uploads/user-1.jpg"
                          className="w_150"
                          alt="Existing"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Change Photo *</label>
                      <div>
                        <input type="file" name="photo" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="form3"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpdateProfile;

