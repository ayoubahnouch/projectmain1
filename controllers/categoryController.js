const Category = require("../models/category");
const ErrorResponse = require('../utils/errorResponse');



exports.createCategory = async (req, res, next)=>{


    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            success: true,
            category
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}