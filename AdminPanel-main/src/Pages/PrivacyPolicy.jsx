import React from "react";

const PrivacyPolicy = () => {
  return (
    <body id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Begin Page Content */}
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Privacy Policy</h1>

              <form
                action="https://demo.phpscriptpoint.com/eventplus/admin/privacy"
                method="post"
                acceptCharset="utf-8"
              >
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="">Title *</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        defaultValue="Privacy Policy"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Content *</label>
                      <textarea
                        name="content"
                        className="form-control editor"
                        cols="30"
                        rows="10"
                        defaultValue={`Lorem ipsum dolor sit amet, id saperet suavitate signiferumque sea. Eu tantas invenire signiferumque per, at affert eloquentiam eos, duo no sale utroque. His ad homero verterem, ut paulo neglegentur contentiones per. Ex cum unum vocent commodo. Ut ridens principes rationibus ius, ex mea saepe docendi, cu eum unum assum accumsan.

                                                Ne quo possim consectetuer, splendide voluptatibus ut mea. Summo mucius regione qui et, sea soleat everti indoctum no. Brute postea ut vel, oblique propriae pertinacia et sed. No nominati adipiscing nam, accusata interpretaris no est, no tota conceptam nam. Id posidonium dissentiunt mea, an nibh menandri eum. Meis nominati cum cu.

                                                Eum ad delicatissimi signiferumque, mea causae delenit perfecto et. Sit primis nostrum id, an postea numquam per, id quo diceret deleniti consectetuer. Eum eu salutatus mediocritatem. Blandit ocurreret dissentiet ne quo, ex mazim numquam delenit his.

                                                Ea mel elit placerat. Ius nobis delicata gloriatur at. Nam fabulas salutandi at, in per officiis omittantur contentiones, omnes insolens suscipiantur sed cu. Ei modus persequeris vix. Persius legimus has an, mea dicit maiestatis adipiscing eu.`}
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
                      <label htmlFor="">Title</label>
                      <input
                        type="text"
                        name="seo_title"
                        className="form-control"
                        defaultValue="Privacy Policy"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Meta Description</label>
                      <textarea
                        name="seo_meta_description"
                        className="form-control h_100"
                        cols="30"
                        rows="10"
                        defaultValue="Privacy Policy"
                      ></textarea>
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
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </body>
  );
};

export default PrivacyPolicy;
