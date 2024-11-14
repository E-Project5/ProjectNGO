import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Modal } from "bootstrap";
const EventManagement = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //---fetching events
    const fetchEvents = async () => {
      try {

        const Response = await fetch("http://localhost:5000/events")
        const fetchData = await Response.json()
        if (Response.ok) {
          setEvents(fetchData.data)
        }

      } catch (error) {
        console.log({ "Error": error })
      }
    }

    fetchEvents()
  })




  //---MODALS
  const addmodalRef = useRef(null);
  const editmodalRef = useRef(null);





  //-------Create Event
  const [Title, setTitle] = useState('')
  const [Date, setDate] = useState('')
  const [StartTime, setStartTime] = useState('')
  const [EndTime, setEndTime] = useState('')
  const [Location, setLocation] = useState('')
  const [Image, setImage] = useState('')
  const [IMG, setIMG] = useState("")
  const OpenAddModal = () => {
    const modalInstance = new Modal(addmodalRef.current);
    modalInstance.show();
  }

  const handleImageChange = (e) => {
    setIMG(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if
    if (
      Title === "" ||
      Date === "" ||
      StartTime === "" ||
      EndTime === "" ||
      Location === ""
    ) {
      alert("Please fill first!!!!");
    } else {
      const modalInstance = Modal.getInstance(addmodalRef.current);
      modalInstance.hide();
      // Prepare the formData object
      const formData = new FormData();

      // Append data to FormData object
      formData.append("Title", Title);
      formData.append("Date", Date);
      formData.append("startTime", StartTime);
      formData.append("endTime", EndTime);
      formData.append("Location", Location);
      formData.append("Image", Image);

      try {
        // Send the FormData to the server via POST request
        const response = await fetch("http://localhost:5000/events", {
          method: "POST", // POST request 
          body: formData, // Send object as body
        });

        const result = await response.json();

        if (response.status === 201) {
          // If the event is created successfully
          alert("Event Created Successfully!");
        } else {
          alert("An error creating the event.");
        }
      } catch (errror) {
        // Handle any errors during the fetch request
        alert("Error: ", errror.message);
      }
    }
  };




  //-Delete Event
  const handleDelete = async (ID, title, ImageID) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the user ${title}?`
    );
    if (isConfirmed) {
      // setEvents(events.filter((event) => event.id !== id));
      try {
        // const formData = new FormData();
        // formData.append('imageID', imageID);
        const Data = {
          OLDimageID: ImageID

        }
        const Response = await fetch(`http://localhost:5000/events/${ID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Data)
        })
        if (Response.status === 201) {
          alert(`Event ${title} deleted`)
          // toast.success(`Role Deleted`);
        } else {
          const checkerror = await Response.json() //-----Response.status===500
          alert(`Error ${Response.status} : ${checkerror.error} `)

          // toast.error(`Error :${Response.status} ${checkerror.error}`);
        }
      } catch (error) {
        console.log({ "Error": error })
      }
    }
  };



  // ------Update Event
  const [EditID, setEditID] = useState('')
  const [EditTitle, setEditTitle] = useState('')
  const [EditDate, setEditDate] = useState('')
  const [EditStartTime, setEditStartTime] = useState('')
  const [EditEndTime, setEditEndTime] = useState('')
  const [EditLocation, setEditLocation] = useState('')
  const [EditfileID, setEditfileID] = useState('')
  const [EditImage, setEditImage] = useState('')
  const [EditOLDImage, setEditOLDImage] = useState('')
  const [EditIMG, setEditIMG] = useState("")
  const OpenUpdateModal = (ID, Title, Date, Location, start, end, Image, oldFileID) => {
    setEditID(ID)
    setEditTitle(Title)
    setEditLocation(Location)
    setEditStartTime(start)
    setEditEndTime(end)
    setEditDate(Date)
    setEditIMG(Image)
    setEditImage(Image)
    setEditOLDImage(Image)
setEditfileID(oldFileID)
    const modalInstance = new Modal(editmodalRef.current);
    modalInstance.show();
  }
  const handleEditImageChange = (e) => {
    setEditIMG(URL.createObjectURL(e.target.files[0]));
    setEditImage(e.target.files[0]);
  }
  const handleUpdatesubmit = async (e)=>{
e.preventDefault()

if (EditIMG == EditOLDImage) {
  const updateData = {
      Title: EditTitle,
      Location: EditLocation,
      startTime: EditStartTime,
      endTime: EditEndTime,
      Date: EditDate,
      oldImage: EditOLDImage,
      oldFileID: EditfileID
  }
  try {
      const Response = await fetch(`http://localhost:5000/events/${EditID}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData)
      })
      const modalInstance = Modal.getInstance(editmodalRef.current);
      modalInstance.hide();
      if (Response.ok) { //-------Respone.status ===201
          alert(`Event ${EditTitle} Updated`)
      }
      else {
          const checkerror = await Response.json() //-----Response.status===500
          console.log(checkerror.error)
      }
  } catch (error) {
      console.log(error)
  }
}
else {
  const updateData = new FormData();
  updateData.append('Title', EditTitle);
  updateData.append('Location', EditLocation);
  updateData.append('Date', EditDate);
  updateData.append('startTime', EditStartTime);
  updateData.append('endTime', EditEndTime);
  updateData.append('Image', EditImage);
  updateData.append('oldFileID', EditfileID);
  try {
      const Response = await fetch(`http://localhost:5000/events/${EditID}`, {
          method: "PUT",
          body: updateData
      })
      const modalInstance = Modal.getInstance(editmodalRef.current);
      modalInstance.hide();
      if (Response.ok) { //-------Respone.status ===201
          alert(`Event ${EditTitle} Updated`)
      }
      else {
          const checkerror = await Response.json() //-----Response.status===500
          console.log(checkerror.error)
      }
  } catch (error) {
      console.log(error)
  }

}
  }
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Events</h1>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 mt-2 font-weight-bold text-primary">
                    View Events
                  </h6>
                  <div className="float-right d-inline">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => OpenAddModal()}
                    >
                      <i className="fa fa-plus"></i> Add New
                    </button>
                  </div>
                </div>

                {/* Add Event Modal */}
                <div
                  ref={addmodalRef}
                  className="modal fade"
                  id="addEventModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog-centered modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add Event
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => {
                            const modalInstance = Modal.getInstance(addmodalRef.current);
                            modalInstance.hide();
                          }}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Title *</label>
                            <input
                              onChange={(e) => setTitle(e.target.value)}
                              type="text"
                              className="form-control"
                              name="e_name"
                              required
                            />
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label>Start Time *</label>
                                <select
                                  onChange={(e) => setStartTime(e.target.value)}
                                  name="ed_id"
                                  className="form-control "
                                  required

                                >
                                  <option className="text-secondary" selected value="4">Select Start Time</option>
                                  <option value="05:00 pm">05:00 pm</option>
                                  <option value="06:00 pm">06:00 pm</option>
                                  <option value="07:00 pm">07:00 pm</option>
                                  <option value="08:00 pm">08:00 pm</option>
                                </select>
                                {/* <input
                            onChange={(e)=>setStartTime(e.target.value)}
                              type="text"
                              className="form-control"
                              name="e_time"
                              required
                            /> */}
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label>End Time *</label>
                                <select
                                  onChange={(e) => setEndTime(e.target.value)}
                                  name="ed_id"
                                  className="form-control "
                                  required

                                >
                                  <option className="text-secondary" selected value="4">Select Start Time</option>
                                  <option value="09:00 pm">09:00 pm</option>
                                  <option value="10:00 pm">10:00 pm</option>
                                  <option value="11:00 pm">11:00 pm</option>
                                  <option value="12:00 pm">12:00 pm</option>
                                </select>
                                {/* <input
                            onChange={(e)=>setEndTime(e.target.value)}
                              type="text"
                              className="form-control"
                              name="e_time"
                              required
                            /> */}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label>Date *</label>
                                <input
                                  onChange={(e) => setDate(e.target.value)}
                                  type="date"
                                  className="form-control"
                                  name="e_time"
                                  required
                                />

                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label>Location *</label>
                                <select
                                  onChange={(e) => setLocation(e.target.value)}
                                  name="ed_id"
                                  className="form-control "
                                  required

                                >
                                  <option className="text-secondary" selected value="4">Select Location</option>
                                  <option value="Nazimabad">Nazimabad</option>
                                  <option value="Star Gate">Star Gate</option>
                                  <option value="North Karachi">North Karachi</option>
                                </select>

                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <div className="form-group">
                                <label>Image *</label>
                                <input
                                  onChange={(e) => handleImageChange(e)}
                                  type="file"
                                  className="form-control"
                                  name="e_time"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-3">

                              {
                                IMG == "" ?
                                  <div style={{
                                    backgroundColor: "#98939378", width: "100px", height: "100px", color: "grey",
                                    fontSize: "13px"
                                  }} className='px-3 py-4 text-center'>
                                    No Image selected
                                  </div>

                                  :
                                  <img style={{ maxWidth: "120px" }} alt="" className=' img-thumbnail ' src={IMG} />
                              }
                            </div>
                          </div>

                          {/* <div className="form-group">
                            <label>Select Event Date *</label>
                            <select
                              name="ed_id"
                              className="form-control"
                              required
                            >
                              <option value="4">Day 1</option>
                              <option value="5">Day 2</option>
                              <option value="6">Day 3</option>
                            </select>
                          </div> */}
                          {/* <div className="form-group">
                            <label>Select Speaker *</label>
                            <select
                              name="speaker_id"
                              className="form-control"
                              required
                            >
                              <option value="1">Brent Grundy</option>
                              <option value="2">David Beckham</option>
                              <option value="3">Patrick Henderson</option>
                              <option value="4">Ricky Ponting</option>
                            </select>
                          </div> */}
                          <button type="submit" className="btn btn-success"  >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-center">SL</th>
                          <th className="text-center">Name</th>
                          <th className="text-center">Date</th>
                          <th className="text-center">Event Start Time</th>
                          <th className="text-center">Event End Time</th>
                          <th className="text-center">
                            Image
                          </th>
                          <th className="text-center">Location</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((event, index) => (
                          <tr className="text-center" key={event.id}>
                            <td >{index + 1}</td>
                            <td >{event.Title}</td>
                            <td>{event.Date}</td>
                            <td>{event.startTime}</td>
                            <td>{event.endTime}</td>
                            <td  >

                              <img style={{ maxWidth: "120px" }} alt="" className=' img-thumbnail ' src={event.Image} />
                            </td>
                            <td>{event.Location}</td>
                            <td >
                              <button
                                className="btn btn-warning btn-sm mr-2"
                                onClick={() => OpenUpdateModal(event._id, event.Title, event.Date, event.Location, event.startTime, event.endTime, event.Image,event.ImageID)}
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(event._id, event.Title, event.ImageID)}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {
                      events.length <= 0
                        ?
                        <div>
                          <h1 className="text-center mt-5">No Events</h1>
                        </div>
                        : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Event Modal */}
      <div
        ref={editmodalRef}
        className="modal fade"
        id={`editEventModal`}

        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog-centered modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Event
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => {
                  const modalInstance = Modal.getInstance(editmodalRef.current);
                  modalInstance.hide();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdatesubmit}>
                <div className="form-group">
                  <label>Title *</label>
                  <input value={EditTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    name="e_name"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Start Time *</label>
                      <select
                        value={EditStartTime}
                        onChange={(e) => setEditStartTime(e.target.value)}
                        name="ed_id"
                        className="form-control "
                        required

                      >
                        <option className="text-secondary" selected value="4">Select Start Time</option>
                        <option value="05:00 pm">05:00 pm</option>
                        <option value="06:00 pm">06:00 pm</option>
                        <option value="07:00 pm">07:00 pm</option>
                        <option value="08:00 pm">08:00 pm</option>
                      </select>
                      {/* <input
                            onChange={(e)=>setStartTime(e.target.value)}
                              type="text"
                              className="form-control"
                              name="e_time"
                              required
                            /> */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>End Time *</label>
                      <select value={EditEndTime}
                        onChange={(e) => setEditEndTime(e.target.value)}
                        name="ed_id"
                        className="form-control "
                        required

                      >
                        <option className="text-secondary" selected value="4">Select Start Time</option>
                        <option value="09:00 pm">09:00 pm</option>
                        <option value="10:00 pm">10:00 pm</option>
                        <option value="11:00 pm">11:00 pm</option>
                        <option value="12:00 pm">12:00 pm</option>
                      </select>
                      {/* <input
                            onChange={(e)=>setEndTime(e.target.value)}
                              type="text"
                              className="form-control"
                              name="e_time"
                              required
                            /> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Date *</label>
                      <input value={EditDate}
                        onChange={(e) => setEditDate(e.target.value)}
                        type="date"
                        className="form-control"
                        name="e_time"
                        required
                      />

                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Location *</label>
                      <select value={EditLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                        name="ed_id"
                        className="form-control "
                        required

                      >
                        <option className="text-secondary" selected value="4">Select Location</option>
                        <option value="Nazimabad">Nazimabad</option>
                        <option value="Star Gate">Star Gate</option>
                        <option value="North Karachi">North Karachi</option>
                      </select>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    <div className="form-group">
                      <label>Image *</label>
                      <input
                        onChange={(e) => handleEditImageChange(e)}
                        type="file"
                        className="form-control"
                        name="e_time"
                      />
                    </div>
                  </div>
                  <div className="col-3">

                    {
                      EditIMG == "" ?
                        <div style={{
                          backgroundColor: "#98939378", width: "100px", height: "100px", color: "grey",
                          fontSize: "13px"
                        }} className='px-3 py-4 text-center'>
                          No Image selected
                        </div>

                        :
                        <img style={{ maxWidth: "120px" }} alt="" className=' img-thumbnail ' src={EditIMG} />
                    }
                  </div>
                </div>

                {/* <div className="form-group">
                            <label>Select Event Date *</label>
                            <select
                              name="ed_id"
                              className="form-control"
                              required
                            >
                              <option value="4">Day 1</option>
                              <option value="5">Day 2</option>
                              <option value="6">Day 3</option>
                            </select>
                          </div> */}
                {/* <div className="form-group">
                            <label>Select Speaker *</label>
                            <select
                              name="speaker_id"
                              className="form-control"
                              required
                            >
                              <option value="1">Brent Grundy</option>
                              <option value="2">David Beckham</option>
                              <option value="3">Patrick Henderson</option>
                              <option value="4">Ricky Ponting</option>
                            </select>
                          </div> */}
                <button type="submit" className="btn btn-success"  >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;




