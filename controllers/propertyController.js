const propertydb = require("../modals/propertySchema");

// Add property Details
exports.PropertyAdd = async (req, res) => {
    const { propertyName, location, favorites, category, locationCoordinates, propertyType, additionalDetails, description, listedBy, RentalFeature, RentPriceHistoryAndBeverlySpringfield, termsPolicy, similarListing } = req.body;

    let files = req.files;

    const imgpath = [];
    for (let i = 0; i < files?.length; i++) {
        imgpath.push(files[i]?.path)
    }

    try {
        const AddPropertyList = new propertydb({
            propertyName, location, favorites, category, locationCoordinates, propertyType, additionalDetails, description, listedBy, RentalFeature, RentPriceHistoryAndBeverlySpringfield, termsPolicy, similarListing, imageGallery: imgpath
        });

        await AddPropertyList.save();
        res.status(200).json(AddPropertyList)
    } catch (error) {
        res.status(400).json(error)
    }
}

// get property details
exports.PropertyGet = async (req, res) => {
    try {
        const GetPropertyData = await propertydb.find();
        res.status(200).json(GetPropertyData)
    } catch (error) {
        res.status(400).json(error)
    }
}

// get signle property details
exports.PropertySingleDetails = async (req, res) => {
    const { propertyid } = req.params;

    try {
        const GetSingleDetails = await propertydb.findOne({ _id: propertyid });
        res.status(200).json(GetSingleDetails)
    } catch (error) {
        res.status(400).json(error)
    }
}

// delete property details
exports.deletePropertyDetails = async (req, res) => {
    const { propertyid } = req.params;

    try {
        const deletePropertyData = await propertydb.findByIdAndDelete({ _id: propertyid });
        res.status(200).json(deletePropertyData)
    } catch (error) {
        res.status(400).json(error)
    }
}

// update property details
exports.updatePropertyDetails = async (req, res) => {
    const { propertyid } = req.params;
    const { propertyName, location, favorites, category, locationCoordinates, propertyType, additionalDetails, description, listedBy, RentalFeature, RentPriceHistoryAndBeverlySpringfield, termsPolicy, similarListing, propertyimg } = req.body;

    const files = req.files;
    const imgpath = [];

    for (let i = 0; i < files?.length; i++) {
        imgpath.push(files[i]?.path)
    }

    const obj = {
        propertyName,
        location,
        favorites,
        category,
        locationCoordinates,
        propertyType, additionalDetails,
        description,
        listedBy,
        RentalFeature,
        RentPriceHistoryAndBeverlySpringfield,
        termsPolicy,
        similarListing,
    }

    if(req.files !== ""){
        obj.imageGallery =  imgpath
    }
    try {
        const UpdatePropertyList = await propertydb.findByIdAndUpdate({ _id: propertyid }, obj, { new: true });

        await UpdatePropertyList.save();
        res.status(200).json(UpdatePropertyList)

    } catch (error) {
        console.log("catch block error", error)
        res.status(400).json(error)
    }
}