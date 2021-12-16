const path = require('path');

const express = require('express');

const Product  = require('../models/product.model');
const upload  = require('../middlewares/upload');

const  router = express.Router();


router.post("/", upload.single("productImages"), async (req, res) => {
    try{
        const product = await Product.create(
        {
            name:req.body.name,
            price:req.body.price,
            image_urls:req.file.path,
        });
    res.status(201).json({ product });
}
    catch(e){
        return res.status(500).json({ message: e.message });
        
    }
});

module.exports = router;