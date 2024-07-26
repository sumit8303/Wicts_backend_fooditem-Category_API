const mongoose = require('mongoose')

let itemScehma = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemCategory: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemPrice: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemOfferPrice: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemFoodType: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    }, 
    itemRating: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    itemDescription: {
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

module.exports = mongoose.model('itemData', itemScehma)
