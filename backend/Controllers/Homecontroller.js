const { homeData } = require("../Models/Home")
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY
});

//------------API :"http://localhost:5000/home"
//-----------Method :POST
async function addtoHomePage(req, res) {
    const {
        MainTitle,
        SubTitle
    } = req.body
    const MainImage = req.file
    let ImgPath;
    let fileID;
    ImgPath = MainImage.path;
    fileID = MainImage.filename;
    const checkhome = await homeData.find();
    if (checkhome <= 0) {
        try {
            const home = await homeData.create({
                MainTitle: MainTitle,
                SubTitle: SubTitle,
                MainImage: ImgPath,
                MainImageFileID: fileID,
            })
            return res.status(201).send({ "Data": req.body })
        } catch (error) {
            return res.status(500).send({ "error": error })
        }
    }
    else {

        try {
            const home = await homeData.create({
                MainTitle: MainTitle,
                SubTitle: SubTitle,
                MainImage: ImgPath,
                MainImageFileID: fileID,
            })
            const deleteData = await homeData.deleteOne({
                _id: checkhome[0]._id
            })
            await cloudinary.uploader.destroy(checkhome[0].MainImageFileID);
            return res.status(201).send({ "Data": req.body })
        } catch (error) {
            return res.status(500).send({ "error": error })
        }
    }

}
//------------API :"http://localhost:5000/home"
//-----------Method :GET
async function getHomePage(req, res) {
    const home = await homeData.find();
    return res.status(201).send({ "data": home })
}



module.exports = { addtoHomePage, getHomePage }