const { LogoImg } = require("../Models/Logo")
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY
});

//------------API :"http://localhost:5000/logo"
//-----------Method :POST
async function addLogo(req, res) {
    // const {
    //     Logo
    //     // Image,
    // } = req.body
    const Logo = req.file
    const LOGOpath = Logo.path;
    const fileID = Logo.filename;
    const checkLogo = await LogoImg.find();
    if (checkLogo.length <= 0) {
        try {
            const logo = await LogoImg.create({
                Logo: LOGOpath,
                LogoID: fileID,
            })
            return res.status(201).send({ "Data": req.body })
        } catch (error) {
            return res.status(500).send({ "error": error })
        }
    }
    else {
       
        try {
            const logo = await LogoImg.create({
                Logo: LOGOpath,
                LogoID: fileID,
            })
            const deleteData = await LogoImg.deleteOne({
                _id: checkLogo[0]._id
            })
            await cloudinary.uploader.destroy(checkLogo[0].LogoID);
            return res.status(201).send({ "Data": req.body })
        } catch (error) {
            return res.status(500).send({ "error": error })
        }
    }

}
//------------API :"http://localhost:5000/logo"
//-----------Method :GET
async function getLogo(req, res) {
    const LOGO = await LogoImg.find();
    return res.status(201).send({ "data": LOGO })
}



module.exports = { addLogo, getLogo }