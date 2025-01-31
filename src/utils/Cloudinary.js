import { v2 as Cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (LocalFilePath) => {
  try {
    if (!LocalFilePath) return null;

    //upload on cloudinary
    const response = await Cloudinary.uploader.upload(LocalFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded successfully
    console.log(`File has been uploaded successfully`, response.url);
    return response;
  } catch (error) {
    //remove file from the local server
    fs.unlink(LocalFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
