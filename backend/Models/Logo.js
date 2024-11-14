const mongoose = require("mongoose");

const img_Schema = mongoose.Schema(
    {
        Logo: {type: String, require : [true, "Required"]} ,
        LogoID: {type: String, require : [true, "Required"]} ,
        // FavIcon: {type: String, require : [true, "Required"]} ,
        // FooterBG: {type: String, require : [true, "Required"]} ,
        // Preloder: {type: String, require : [true, "Required"]} ,
    }
)

const LogoImg = mongoose.model("LogoImg", img_Schema)
module.exports = { LogoImg }