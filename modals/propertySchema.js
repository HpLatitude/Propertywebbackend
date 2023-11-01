const mongoose = require("mongoose");

// propertschema
const propertySchema = new mongoose.Schema({
    imageGallery:[],
    propertyName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    favorites:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    locationCoordinates:[],
    propertyType:{
        type:String,
        required:true
    },
    additionalDetails:Object,
    description:{
        type:String,
        required:true
    },
    listedBy:Object,
    RentalFeature:[],
    RentPriceHistoryAndBeverlySpringfield:[],
    termsPolicy:{
        type:String,
        required:true
    },
    similarListing:[]

},{timestamps:true});

// model
const propertydb = new mongoose.model("propertydb",propertySchema);

module.exports = propertydb;