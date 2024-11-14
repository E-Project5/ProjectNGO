import React from "react";

const Speaker = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1 className="h3 mb-3 text-gray-800">
              Speaker - Title and Subtitle
            </h1>

            <div className="tab-content" id="pills-tabContent">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Title and Subtitle
                  </h6>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={handleSubmit}
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        defaultValue="Speakers"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subtitle">Meta Description</label>
                      <textarea
                        name="subtitle"
                        className="form-control h_100"
                        cols="30"
                        rows="10"
                        defaultValue="The valuable speakers who will speech in this event"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      name="form_speaker_title_subtitle"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
