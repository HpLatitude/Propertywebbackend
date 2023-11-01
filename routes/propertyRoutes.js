const express = require("express");
const router = new express.Router();
const propertyupload = require("../multerconfig/multerStorageConfig");
const PropertyController = require("../controllers/propertyController");


router.post("/addpropertydetails",propertyupload.array("propertyimg",5),PropertyController.PropertyAdd);
router.get("/getPropertyDetails",PropertyController.PropertyGet);
router.get("/getsinglepropertydata/:propertyid",PropertyController.PropertySingleDetails);
router.delete("/deletepropertydetails/:propertyid",PropertyController.deletePropertyDetails);
router.put("/updatepropertydetails/:propertyid",propertyupload.array("propertyimg",5),PropertyController.updatePropertyDetails)




module.exports = router;