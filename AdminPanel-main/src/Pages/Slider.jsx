import React, { useEffect, useState } from "react";

const Slider = () => {
  const [MainTitle, setMainTitle] = useState("")
  const [SubTitle, setSubTitle] = useState("")
  const [Image, setImage] = useState(null)
  const [NewImage, setNewImage] = useState(null)
  const [MainImage, setMainImage] = useState("")
  useEffect(() => {
    const getData = async () => {
      try {
        const Response = await fetch("http://localhost:5000/home");
        const fetchData = await Response.json()
        console.log(fetchData)
        if (Response.ok) {
          setMainTitle(fetchData.data[0].MainTitle)
          setSubTitle(fetchData.data[0].SubTitle)
          setImage(fetchData.data[0].MainImage)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  })

  const handleImageChange = (e) => {
    setNewImage(URL.createObjectURL(e.target.files[0]));
    setMainImage(e.target.files[0]);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault()
    // Prepare the formData object
    const formData = new FormData();
    // Append data to FormData object
    formData.append("MainTitle", MainTitle);
    formData.append("SubTitle", SubTitle);
    formData.append("MainImage", MainImage);
    try {
      const Response = await fetch("http://localhost:5000/home", {
        method: "POST", // POST request 
        body: formData, // Send object as body
      });
      if (Response.status === 201) {
        // If the event is created successfully
        alert("Home Updated Successfully!");
      } else {
        alert("An error updating Home.");
      }
    } catch (error) {
      console.log(error)
    }
  }
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
              <h1 className="h3 mb-3 text-gray-800">Slider</h1>

              <div className="card shadow mb-4">
                <div className="card-body">
                  <form onSubmit={HandleSubmit}
                    enctype="multipart/form-data"
                    method="post"
                  >
                    <input
                      onChange={(e) => handleImageChange(e)}
                      type="hidden"
                      name="current_photo"
                      value="slider.jpg"
                    />
                    
                    <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                          <label htmlFor="">Existing Image</label>
                          <div>
                            <img
                              src={Image}
                              alt=""
                              style={{ width: "600px", height: "300px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="">New Image</label>
                          <div>
                            {
                              NewImage == null ?
                                <div style={{
                                  backgroundColor: "#98939378", width: "600px", height: "300px", color: "grey",
                                  fontSize: "18px"
                                }} className='px-3 py-5 text-center'>
                                  No Image selected
                                </div>
                                : <img
                                  src={NewImage}
                                  alt=""
                                  style={{ width: "600px", height: "300px" }}
                                />
                            }

                          </div>
                        </div>
                      </div>
                      
                    </div>


                    <div className="form-group">
                      <label htmlFor="">Change Photo</label>
                      <div>
                        <input className="form-control" type="file" name="photo" onChange={(e) => handleImageChange(e)} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Title *</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={(e) => setMainTitle(e.target.value)}
                        defaultValue={MainTitle}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Subtitle *</label>
                      <input
                        type="text"
                        name="subtitle"
                        className="form-control"
                        onChange={(e) => setSubTitle(e.target.value)}
                        defaultValue={SubTitle}
                      />
                    </div>

                    {/* <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="">Date *</label>
                          <input
                            id="datepicker"
                            type="date"
                            name="event_date"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="">Time *</label>
                          <input
                            id="timepicker"
                            type="text"
                            name="event_time"
                            className="form-control timepicker"
                            defaultValue="16:00:00"
                          />
                        </div>
                      </div>
                    </div> */}
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

export default Slider;
