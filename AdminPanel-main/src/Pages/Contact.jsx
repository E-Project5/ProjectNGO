import React from "react";

// Basic styles for the component
const containerStyle = {
  padding: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const cardHeaderStyle = {
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderBottom: "1px solid #ddd",
};

const cardBodyStyle = {
  padding: "20px",
};

const titleStyle = {
  color: "#333",
};

const formGroupStyle = {
  marginBottom: "15px",
};

const formLabelStyle = {
  display: "block",
  marginBottom: "5px",
};

const formInputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ced4da",
  borderRadius: "4px",
};

const formTextareaStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ced4da",
  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const Contact = () => {
  return (
    <div style={containerStyle} id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 style={titleStyle} className="h3 mb-3 text-gray-800">
                Contact
              </h1>
              <form
                action="https://demo.phpscriptpoint.com/eventplus/admin/contact"
                method="post"
                acceptCharset="utf-8"
              >
                <div style={cardStyle} className="shadow mb-4">
                  <div style={cardBodyStyle}>
                    <div style={formGroupStyle}>
                      <label style={formLabelStyle}>Address *</label>
                      <textarea
                        name="address"
                        style={formTextareaStyle}
                        className="h_80"
                        cols="30"
                        rows="10"
                      >
                        3153 Foley Street, Miami, FL 33176, USA
                      </textarea>
                    </div>
                    <div style={formGroupStyle}>
                      <label style={formLabelStyle}>Phone *</label>
                      <textarea
                        name="phone"
                        style={formTextareaStyle}
                        className="h_80"
                        cols="30"
                        rows="10"
                      >
                        Office 1: 167-972-3334 Office 2: 112-344-3685
                      </textarea>
                    </div>
                    <div style={formGroupStyle}>
                      <label style={formLabelStyle}>Email *</label>
                      <textarea
                        name="email"
                        style={formTextareaStyle}
                        className="h_80"
                        cols="30"
                        rows="10"
                      >
                        Contact: info@yourwebsite.com Support:
                        support@yourwebsite.com
                      </textarea>
                    </div>
                  </div>
                  <div style={cardHeaderStyle}>
                    <h6 className="m-0 font-weight-bold text-primary">
                      SEO Information
                    </h6>
                  </div>
                  <div style={cardBodyStyle}>
                    <div style={formGroupStyle}>
                      <label style={formLabelStyle}>Title</label>
                      <input
                        type="text"
                        name="seo_title"
                        style={formInputStyle}
                        defaultValue="Contact"
                      />
                    </div>
                    <div style={formGroupStyle}>
                      <label style={formLabelStyle}>Meta Description</label>
                      <textarea
                        name="seo_meta_description"
                        style={formTextareaStyle}
                        className="h_100"
                        cols="30"
                        rows="10"
                      >
                        Contact
                      </textarea>
                    </div>
                    <hr
                      style={{
                        height: "2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "20px 0",
                      }}
                    />
                    <button type="submit" style={buttonStyle} name="form1">
                      Update
                    </button>
                  </div>
                </div>
              </form>
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

export default Contact;
