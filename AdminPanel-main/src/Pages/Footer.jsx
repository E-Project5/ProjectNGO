import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Favicon = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
              <h1 className="h3 mb-3 text-gray-800">Setting - Favicon</h1>
              <div className="card shadow mb-4">
                <div className="card-body">
                  <form
                    onSubmit={handleFormSubmit}
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="current_photo"
                      value="logo.png"
                    />
                    <div className="form-group">
                      <label>Existing Logo</label>
                      <div>
                        <img
                          src="https://static-00.iconduck.com/assets.00/file-type-favicon-icon-256x256-6l0w7xol.png"
                          alt="Existing Logo"
                          style={{ width: "150px", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Change Logo *</label>
                      <div>
                        <input
                          type="file"
                          name="logo"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-danger">
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
    </div>
  );
};

export default Favicon;



