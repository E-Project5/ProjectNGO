import React, { useState } from "react";

const About = () => {
  const [title, setTitle] = useState("About Us");
  const [content, setContent] = useState(
    `<p>Lorem ipsum dolor sit amet, ea his utroque maluisset...</p>`
  );
  const [seoTitle, setSeoTitle] = useState("About Us");
  const [seoMetaDescription, setSeoMetaDescription] = useState("About Us");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, for example using fetch or axios to send data to the server.
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">About</h1>
              <form onSubmit={handleSubmit}>
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Title *</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Content *</label>
                      <textarea
                        name="content"
                        className="form-control editor"
                        cols="30"
                        rows="10"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      SEO Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name="seo_title"
                        className="form-control"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Meta Description</label>
                      <textarea
                        name="seo_meta_description"
                        className="form-control h_100"
                        cols="30"
                        rows="10"
                        value={seoMetaDescription}
                        onChange={(e) => setSeoMetaDescription(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="form1"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
