const  itemModel = require('../models/item.js')


//Item Food Create 
exports.saveItem = async (req, res) => {
       const itemData = new itemModel({
        itemName: req.body.itemName,
        itemCategory: req.body.itemCategory,
        itemPrice: req.body.itemPrice,
        itemOfferPrice: req.body.itemOfferPrice,
        itemFoodType: req.body.itemFoodType,
        itemRating: req.body.itemRating,
        itemDescription: req.body.itemDescription,
        image: req.file.filename,
        })
        itemData.save()
        .then(() => {
            res.status(200).json({success: true , message: " Item save " });
        })
        .catch(err => console.log(err))
}


//All Item Food get
// exports.getItem = async (req, res) => {
//     let data = await itemModel.find({})
//     res.json(data)
// }

//All Item Food get with filters
exports.getItem = async (req, res) => {
    const {itemCategory, itemFoodType, itemPrice, itemRating, itemName} = req.query
    const queryItem = {}
    if(itemCategory){
        queryItem.itemCategory = itemCategory
    }
    if(itemName){
        queryItem.itemName = itemName
    }
    if(itemFoodType){
        queryItem.itemFoodType = itemFoodType
    }
    if(itemPrice){
        queryItem.itemPrice = itemPrice
    }
    if(itemRating){
        queryItem.itemRating = itemRating
    }
    console.log(queryItem)
    const data = await itemModel.find(queryItem)
    res.json(data)
}







//All Item Food getById
exports.getItemById = async (req, res) => {
    let id = req.params.id
    let data = await itemModel.find({ _id: id })
    res.json(data)
}

//All item food delete
exports.deleteitem = async (req, res) => {
    let id = req.params.id
    await itemModel.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: "item Data Deleted" });
}

//All Item Food Update
exports.updateitem = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await itemModel.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "item Data Updated" });
}


//All item Food getItemByName (search Api)
exports.getItemByName= async (req, res) => {
    let itemName = req.params.itemName 
    console.log(itemName)
    let data = await itemModel.find({ itemName: itemName })
    res.json(data)
}