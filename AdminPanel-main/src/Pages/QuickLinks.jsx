import React from 'react'

const QuickLinks = () => {
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
              <h1 className="h3 mb-3 text-gray-800">Quick Links</h1>

              <div className="row">
                <div className="col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Icon 1
                      </h6>
                    </div>
                    <div className="card-body">
                      <form
                        action="https://demo.phpscriptpoint.com/eventplus/admin/quick-link"
                        enctype="multipart/form-data"
                        method="post"
                        acceptCharset="utf-8"
                      >
                        <input
                          type="hidden"
                          name="current_photo"
                          value="icon1.png"
                        />
                        <div className="form-group">
                          <label htmlFor="">Title</label>
                          <input
                            type="text"
                            name="title1"
                            className="form-control"
                            defaultValue="Tickets"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Existing Icon</label>
                          <div className="bg_f3f3f3 p_15">
                            <img
                              src="https://demo.phpscriptpoint.com/eventplus/public/uploads/icon1.png"
                              alt=""
                              className="w_100"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Change Icon *</label>
                          <div>
                            <input type="file" name="icon1" />
                          </div>
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
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Icon 2
                      </h6>
                    </div>
                    <div className="card-body">
                      <form
                        action="https://demo.phpscriptpoint.com/eventplus/admin/quick-link"
                        enctype="multipart/form-data"
                        method="post"
                        acceptCharset="utf-8"
                      >
                        <input
                          type="hidden"
                          name="current_photo"
                          value="icon2.png"
                        />
                        <div className="form-group">
                          <label htmlFor="">Title</label>
                          <input
                            type="text"
                            name="title2"
                            className="form-control"
                            defaultValue="Speakers"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Existing Icon</label>
                          <div className="bg_f3f3f3 p_15">
                            <img
                              src="https://demo.phpscriptpoint.com/eventplus/public/uploads/icon2.png"
                              alt=""
                              className="w_100"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Change Icon *</label>
                          <div>
                            <input type="file" name="icon2" />
                          </div>
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
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Icon 3
                      </h6>
                    </div>
                    <div className="card-body">
                      <form
                        action="https://demo.phpscriptpoint.com/eventplus/admin/quick-link"
                        enctype="multipart/form-data"
                        method="post"
                        acceptCharset="utf-8"
                      >
                        <input
                          type="hidden"
                          name="current_photo"
                          value="icon3.png"
                        />
                        <div className="form-group">
                          <label htmlFor="">Title</label>
                          <input
                            type="text"
                            name="title3"
                            className="form-control"
                            defaultValue="Sponsors"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Existing Icon</label>
                          <div className="bg_f3f3f3 p_15">
                            <img
                              src="https://demo.phpscriptpoint.com/eventplus/public/uploads/icon3.png"
                              alt=""
                              className="w_100"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Change Icon *</label>
                          <div>
                            <input type="file" name="icon3" />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          name="form3"
                        >
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
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

export default QuickLinks