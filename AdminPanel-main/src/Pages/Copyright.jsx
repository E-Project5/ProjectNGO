import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Copyright = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Page Content */}
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Copyright</h1>
              <div className="card shadow mb-4">
                <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="copyright_text">Copyright Text *</label>
                      <input
                        type="text"
                        name="copyright_text"
                        className="form-control"
                        defaultValue="Copyright 2022, Company Name. All Rights Reserved."
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </div>
  );
};

export default Copyright;
