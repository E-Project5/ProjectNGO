import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = () => {
  const [OldLogo, setOldLogo] = useState(null);

useEffect(()=>{
  const GetLogo=async()=>{
try {
const Response = await fetch("http://localhost:5000/logo")
const fetchData = await Response.json()
console.log(fetchData.data)
if (Response.ok) {
  setOldLogo(fetchData.data[0].Logo)
  
}

} catch (error) {
  console.log(error)
}  }
  GetLogo()
})
const [selectedFile, setSelectedFile] = useState(null);
const[changeLogo,setchangeLogo]=useState("")
  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setchangeLogo(event.target.files[0])
  };

  const handleFormSubmit =async (event) => {
    event.preventDefault();
    if(changeLogo == ""){
      alert("Please Select the File")
    }
    else{
      const formData = new FormData();
        formData.append("Logo", changeLogo);
      try {
        // Send the FormData to the server via POST request
        const response = await fetch("http://localhost:5000/logo", {
          method: "POST", // POST request 
          body: formData, // Send object as body
        });

        if (response.status === 201) {
          // If the event is created successfully
          alert("Logo Uploaded Successfully!");
        } else {
          alert("An error creating the event.");
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Page Content */}
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Setting - Logo</h1>
              <div className="card shadow mb-4">
                <div className="card-body">
                  <form
                    onSubmit={handleFormSubmit}
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="current_photo"
                      value="logo.png"
                    />
                    <div className="row">
                      <div className="col-6">
                      <div className="form-group">
                      <label>Existing Logo</label>
                      <div>
                        <img
                          src={OldLogo}
                          className="img-thumbnail "
                          alt="Existing Logo"
                          style={{ width: "250px", height: "150px" }}
                        />
                      </div>
                    </div>
                      </div>
                      <div className="col-6">
                      <div className="form-group">
                      <label>New Logo</label>
                      <div>
                        {
                          selectedFile == null
                          ? <div style={{
                            backgroundColor: "#98939378", width: "250px", height: "150px", color: "grey",
                            fontSize: "13px"
                          }} className='px-3 py-4 text-center'>
                            No Image selected
                          </div>:<img
                          className="img-thumbnail "
                          src={selectedFile}
                          alt="new Logo"
                          style={{ width: "250px", height: "auto" }}
                        />
                        }
                        
                      </div>
                    </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Change Logo *</label>
                      <div>
                        <input
                          type="file"
                          name="logo"
                          className="form-control"
                          onChange={(e)=>handleFileChange(e)}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-danger">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
    </div>
  );
};

export default Logo;
