const mongoose = require("mongoose");

const home_Schema = mongoose.Schema(
    {
        MainTitle: {type: String, require : [true, "Required"]} ,
        SubTitle: {type: String, require : [true, "Required"]} ,
        MainImage: {type: String, require : [true, "Required"]} ,
        MainImageFileID: {type: String, require : [true, "Required"]} ,
    }
)

const homeData = mongoose.model("homeData", home_Schema)
module.exports = { homeData }