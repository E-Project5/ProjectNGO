const express = require("express")
const app = express()

// -----------env
require("dotenv").config()

//------CORS
const cors = require("cors")


//---------MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//---DATABASE
const { connectionDB } = require("./Config/Database")

//------------------------------------ LOGO Upload
const { LogoUpload} = require("./Middlewares/Logoupload")
const logoupload = LogoUpload();

//----logo controller function {POST}
const{addLogo,getLogo} = require("./Controllers/LOGOcontroller")

//-LOGO Routes
//-----LOGO method(Post,Get) (API : "http://localhost:5000/logo")
app.route("/logo").get(getLogo).post(logoupload.single('Logo'), addLogo)


//------------------------Home Image
const {HomeImageUpload} = require("./Middlewares/HomeImages")
const mainImageUpload = HomeImageUpload()

//------Home Controller function {Get,Post}
const{getHomePage,addtoHomePage} = require("./Controllers/Homecontroller")

//-----HomeRoutes  
//-----Home method(Post,Get) (API : "http://localhost:5000/home")
app.route("/home").get(getHomePage).post(mainImageUpload.single("MainImage"),addtoHomePage)





// --------------------------Event Image
const { EventImageUpload, EventImageDelete } = require("./Middlewares/EventImages")
const upload = EventImageUpload();

//--------Events Controller functions {GET,POST,DELETE,PUT}
const { getEvents, createEvents, deleteEvent, updateEvent } = require("./Controllers/EventsController")


//-----Events Routes
//-----Events method(Post,Get) (API : "http://localhost:5000/events")
app.route("/events").get(getEvents).post(upload.single('Image'), createEvents)

const upload2 = EventImageUpload();
// //-------Events method(Delete,Put) (API : "http://localhost:5000/events/:id")
app.route("/events/:id").delete(EventImageDelete, deleteEvent).put(upload2.single('Image'), updateEvent)






//---server listen
app.listen(process.env.PORT, function () {
    console.log(`Server is working on ${process.env.PORT} port`)
    connectionDB()

})


