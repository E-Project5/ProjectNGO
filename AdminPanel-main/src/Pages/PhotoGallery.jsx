import React from "react";

const PhotoGallery = () => {
  const photoCategories = [
    { id: 1, name: "Day 1" },
    { id: 2, name: "Day 2" },
    { id: 3, name: "Day 3" },
  ];

  const photos = [
    {
      id: 1,
      src: "https://demo.phpscriptpoint.com/eventplus/public/uploads/photo-1.jpg",
      caption: "Photo 1",
      categoryId: 1,
    },
    {
      id: 2,
      src: "https://demo.phpscriptpoint.com/eventplus/public/uploads/photo-2.jpg",
      caption: "Photo 2",
      categoryId: 2,
    },
    {
      id: 3,
      src: "https://demo.phpscriptpoint.com/eventplus/public/uploads/photo-3.jpg",
      caption: "Photo 3",
      categoryId: 3,
    },
  ];

  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Photo Gallery</h1>

              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-1-tab"
                    data-toggle="pill"
                    href="#pills-1"
                    role="tab"
                  >
                    Page Information
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-2-tab"
                    data-toggle="pill"
                    href="#pills-2"
                    role="tab"
                  >
                    Category
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-3-tab"
                    data-toggle="pill"
                    href="#pills-3"
                    role="tab"
                  >
                    Photo
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {/* Page Information Tab */}
                <div
                  className="tab-pane fade show active"
                  id="pills-1"
                  role="tabpanel"
                >
                  {/* Page Information Content */}
                  {/* Your form goes here */}
                </div>

                {/* Category Tab */}
                <div className="tab-pane fade" id="pills-2" role="tabpanel">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 mt-2 font-weight-bold text-primary">
                        View Photo Categories
                      </h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-toggle="modal"
                        data-target="#addPhotoCategoryModal"
                      >
                        <i className="fa fa-plus"></i> Add New
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered" width="100%">
                          <thead>
                            <tr>
                              <th>SL</th>
                              <th>Photo Category Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {photoCategories.map((category) => (
                              <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                  <a
                                    href="#"
                                    className="btn btn-warning btn-sm"
                                    data-toggle="modal"
                                    data-target={`#editPhotoCategoryModal${category.id}`}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => "Are you sure?"}
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo Tab */}
                <div className="tab-pane fade" id="pills-3" role="tabpanel">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 mt-2 font-weight-bold text-primary">
                        View Photo
                      </h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-toggle="modal"
                        data-target="#addPhotoModal"
                      >
                        <i className="fa fa-plus"></i> Add New
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered" width="100%">
                          <thead>
                            <tr>
                              <th>SL</th>
                              <th>Photo</th>
                              <th>Caption</th>
                              <th>Category</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {photos.map((photo) => (
                              <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>
                                  <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w_150"
                                  />
                                </td>
                                <td>{photo.caption}</td>
                                <td>
                                  {
                                    photoCategories.find(
                                      (category) =>
                                        category.id === photo.categoryId
                                    )?.name
                                  }
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    className="btn btn-warning btn-sm"
                                    data-toggle="modal"
                                    data-target={`#editPhotoModal${photo.id}`}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => "Are you sure?"}
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
