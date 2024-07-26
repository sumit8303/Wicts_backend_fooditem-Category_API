const express = require('express')
const router = express.Router()
const uploads = require('../multerConfig.js')
const itemCategoryController = require('../controller/itemCategoryController.js')


//Item Category Create Api
router.post('/saveCategory', uploads.single('image'), itemCategoryController.saveCategory)


//Item Categroy Get Api
router.get('/getItemCategory', itemCategoryController.getItemCategory)


//Item Category Update Api
router.put('/updateItemCategory/:id',uploads.single('image'), itemCategoryController.updateitemCategory)


//Item category Delete Api
router.delete('/deleteItemCategory/:id', itemCategoryController.deleteitemCategory)

module.exports = router