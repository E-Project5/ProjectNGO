const { events } = require("../Models/Events")
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY
});

//------------API :"http://localhost:5000/events"
//-----------Method :POST
async function createEvents(req, res) {
    const {
        Title,
        Date,
        startTime,
        endTime,
        Location,
        // Image,
    } = req.body
    const Image = req.file
    const ImageFile = Image.path;
    const fileID = Image.filename;
    try {
        const Event = await events.create({
            Title: Title,
            Date: Date,
            startTime: startTime,
            endTime: endTime,
            Location: Location,
            Image: ImageFile,
            ImageID: fileID,
        })
        return res.status(201).send({ "Data": req.body })
    } catch (error) {
        return res.status(500).send({ "error": error })
    }


}
//------------API :"http://localhost:5000/events"
//-----------Method :GET
async function getEvents(req,res){
    const allEvents = await events.find();
    return res.status(201).send({"data" : allEvents})
}

// //------------API :"http://localhost:5000/events/:id"
// //-----------Method :DELETE
async function deleteEvent(req, res) {
    const ID = req.params.id
    console.log(ID)
    const EventCheck = await events.find({ _id: ID })
    if (EventCheck <= 0) return res.status(404).send({ "error": "User not found!" })
    try {

        const deleteData = await events.deleteOne({
            _id: ID
        })
        return res.status(201).send({ "data": "User Deleted" })
    } catch (error) {
        return res.status(204).send({ "error": error })
    }

}

//-------------Method : PUT
//---------------API : "http://localhost:5000/:id"
//Description : Update User Functionlity
async function updateEvent(req, res) {
    const ID = req.params.id
    console.log(ID)
    const oldData = await events.find({ _id: ID })
    if (oldData <= 0) return res.status(404).send({ "error": "User not found!" })
    const {  Title,
        Date,
        startTime,
        endTime,
        Location,
        oldImage,
        oldFileID
    } = req.body
    const Image = req.file;
    let _Image;
    let fileID;
    if (Image) {
        _Image = Image.path;
        fileID = Image.filename;// Store the file path from the uploaded image
        await cloudinary.uploader.destroy(oldFileID);
    }
    else {
        _Image = oldImage;
        fileID = oldFileID
    }

    try {
        const updateData = await events.updateOne(
            {
                "_id": oldData[0]._id
            },
            {
                $set: {
                    Title,
                    Date,
                    Image: _Image,
                    ImageID: fileID,
                    startTime,
                    endTime,
                    Location
                }
            }
        )
        
        return res.status(201).send({ "data": "User Data Updated" })
    } catch (error) {
        //-----might be Validation Error 
        return res.status(204).send({ "error": error.errors })
    }
}

module.exports = {createEvents , getEvents , deleteEvent,updateEvent}