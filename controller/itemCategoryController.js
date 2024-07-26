const itemCategoryModel = require('../models/itemCategory.js')


//Item Category Create 
exports.saveCategory =  (req, res) => {
    const itemCategoryData = new itemCategoryModel({
        itemCategoryName: req.body.itemCategoryName,
        itemParentCategory: req.body.itemParentCategory,
        image: req.file.filename,
    })
    itemCategoryData.save()
        .then(() => {
            res.status(200).json({ success: true, message: " Item category save " });
        })
        .catch(err => console.log(err))
}


//Item Categroy Get
exports.getItemCategory = async (req, res) => {
    let data = await  itemCategoryModel.find({})
    res.json(data)
}


//Item Category Delete
exports.deleteitemCategory = async (req, res) => {
    let id = req.params.id
    await itemCategoryModel.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: "item Data Deleted" });
}



//Item category UpDate 
exports.updateitemCategory = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await itemCategoryModel.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "item Data Updated" });
}



