import React from "react";

const Welcome = () => {
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
              <h1 className="h3 mb-3 text-gray-800">Welcome</h1>

              <div className="card shadow mb-4">
                <div className="card-body">
                  <form
                    action="https://demo.phpscriptpoint.com/eventplus/admin/welcome"
                    encType="multipart/form-data"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <input
                      type="hidden"
                      name="current_photo"
                      value="welcome.jpg"
                    />

                    <div className="form-group">
                      <label htmlFor="">Existing Photo</label>
                      <div>
                        <img
                          src="https://demo.phpscriptpoint.com/eventplus/public/uploads/welcome.jpg"
                          alt=""
                          style={{ width: "450px", height: "auto" }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Change Photo</label>
                      <div>
                        <input type="file" name="photo" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Title *</label>
                      <input
                        type="date"
                        name="title"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Subtitle *</label>
                      <input
                        type="text"
                        name="subtitle"
                        className="form-control"
                        defaultValue="Programmar Conference"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Description *</label>
                      <textarea
                        name="description"
                        className="form-control"
                        cols="30"
                        rows="10"
                      >
                        Lorem ipsum dolor sit amet, an labores explicari qui, eu
                        nostrum copiosae argumentum has. Latine propriae quo no,
                        unum ridens expetenda id sit, at usu eius eligendi
                        singulis. Sea ocurreret principes ne. Duo luptatum
                        delicata evertitur ad. Usu te quaerendum definitiones,
                        ne mundi volutpat duo, in dissentias temporibus pri. Duo
                        ferri dicant definitionem te.
                      </textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Button Text</label>
                      <input
                        type="text"
                        name="button_text"
                        className="form-control"
                        defaultValue="Read More"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Button URL</label>
                      <input
                        type="text"
                        name="button_url"
                        className="form-control"
                        defaultValue="#"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Youtube Video Code *</label>
                      <input
                        type="text"
                        name="yt_video_code"
                        className="form-control"
                        defaultValue="IJlPVlqM8sw"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Youtube Video Preview</label>
                      <div>
                        <iframe
                          className="w_500"
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/IJlPVlqM8sw"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-danger"
                      name="form1"
                    >
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
};
export default Welcome;
