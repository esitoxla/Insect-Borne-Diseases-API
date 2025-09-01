import Disease from "../models/diseases.js";
import cloudinary from "../config/cloudinary.js";

export const getDiseases = async (req, res, next) => {
  try {
    const diseases = await Disease.find();
    res.status(200).json(diseases);

  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    next(error);
  }
};

export const getDiseaseById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const oneDisease = await Disease.findById(id).select("-__v");

    if (!oneDisease) {
      const error = new Error("Disease not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json(oneDisease);
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    next(error);
  }
};

//returns all diseases a vector transmit
export const getDiseaseByVector = async (req, res, next) => {
  const { vector } = req.params;
  

  try {
     const diseases = await Disease.find({
       vector: { $regex: new RegExp(`^${vector}$`, "i") }, // case-insensitive match
     });
  

    if (!diseases) {
     const error = new Error("No disease found for this vector");
     error.statusCode = 404;

     return next(error);
    } else {
      return res.status(200).json(diseases);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    next(error);
  }
};



//returns all diseases one can get in a region
export const getDiseaseByRegion = async (req, res, next) => {
  const { region } = req.params;

  try {
    const diseases = await Disease.findOne({ region });

    if (!diseases) {
     const error = new Error("No disease found in this region");
     error.statusCode = 404;

     return next(error);
    } else {
      return res.status(200).json(diseases);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    next(error);
  }
};




export const addDisease = async (req, res, next) => {
  const {
    name,
    vector,
    pathogen,
    regions,
    symptoms,
    treatment,
    prevention,
    imageUrl,
  } = req.body;

  if (
    !name ||
    !vector ||
    !pathogen ||
    !regions ||
    !symptoms ||
    !treatment ||
    !prevention ||
    !imageUrl
  ) {
    const error = new Error("all fields are required");
    error.statusCode = 400;
    return next(error);
  }

  try {
    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(imageUrl, {
      folder: "diseases",
    });

    // Save disease with Cloudinary image URL
     const disease = await Disease.create({
       name,
       vector,
       pathogen,
       regions,
       symptoms,
       treatment,
       prevention,
       imageUrl: uploadedImage.secure_url, // save Cloudinary link
     });
    res.status(201).json({ message: "success", statusCode: 201, disease });
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 404;
    next(error);
  }
};



export const editDisease = async (req, res, next) => {
  const { id } = req.params;

  try {
    const disease = await Disease.findByIdAndUpdate(id, req.body).select("-__v");

    if (!disease) {
      const error = new Error("Disease not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json("Disease updated successfully!");
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 404;
    next(error);
  }
};




export const removeDisease = async (req, res, next) => {
  const { id } = req.params;

  try {
    const disease = await Disease.findByIdAndDelete(id);

    if (!disease) {
      const error = new Error("Disease not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json("Disease removed successfully!");
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 404;
    next(error);
  }
};


//testing/ documentation
