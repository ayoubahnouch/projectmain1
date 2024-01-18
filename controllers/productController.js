const Product = require("../models/product");
const ErrorResponse = require('../utils/errorResponse');


exports.createProduct  = async (req, res, next)=>{


    try {
        const Product = await Product .create(req.body);
        res.status(201).json({
            success: true,
            Product 
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}