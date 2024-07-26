const mongoose = require('mongoose')
 
let categorySchema = new mongoose.Schema({
    itemCategoryName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemParentCategory: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    image: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('itemCategoryData', categorySchema)
