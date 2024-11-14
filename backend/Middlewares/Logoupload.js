// STEP - 01 - CLOUDINARY SETUP - 

const multer = require('multer');

const cloudinary = require('cloudinary').v2;

const { CloudinaryStorage } = require('multer-storage-cloudinary');

// STEP - 02 - Setup API KEYS REFERENCES - 

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET_KEY
});
function LogoUpload(){
// STEP - 03  Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Logo', // Folder name in Cloudinary
      allowed_formats: ['jpg', 'png'],
    },
  });
// STEP - 04

  const upload = multer({ storage });

  return upload;
}





module.exports ={LogoUpload  }