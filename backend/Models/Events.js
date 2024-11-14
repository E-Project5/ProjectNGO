const mongoose = require("mongoose");

const events_Schema = mongoose.Schema(
    {
        Title: {type: String, require : [true, "Required"]} ,
        Date: {type: String, require : [true, "Required"]} ,
        startTime: {type: String, require : [true, "Required"]} ,
        endTime: {type: String, require : [true, "Required"]} ,
        Location: { type:String , require : [true , "Required"]},
        Image: { type:String , require : [true , "Required"]},
        ImageID: { type:String , require : [true , "Required"]}
    }
)

const events = mongoose.model("events", events_Schema)
module.exports = { events }