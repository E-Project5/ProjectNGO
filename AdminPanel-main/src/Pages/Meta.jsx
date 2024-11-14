import React from "react";

function HomePageMetaInfo() {
  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Begin Page Content */}
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">
                Home Page - Meta Information
              </h1>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    SEO Section
                  </h6>
                </div>
                <div className="card-body">
                  <form
                    action="https://demo.phpscriptpoint.com/eventplus/admin/home-meta"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <label htmlFor="seo_title">Title *</label>
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        defaultValue="NGO System in React"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="seo_meta_description">
                        Meta Description *
                      </label>
                      <textarea
                        name="seo_meta_description"
                        className="form-control h_100"
                        cols="30"
                        rows="10"
                        defaultValue="NGO System in React"
                      />
                    </div>
                    <button type="submit" className="btn btn-danger">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </div>
  );
}

export default HomePageMetaInfo;
