const express = require('express')
const router = express.Router()
const uploads = require('../multerConfig.js')
const itemController = require('../controller/itemController.js')

//Item Food Create Api
router.post('/saveItem', uploads.single('image'), itemController.saveItem)


//All Item Food get Api with filters
router.get('/getItem', itemController.getItem)


//All Item Food getById Api
router.get('/getItemById/:id', itemController.getItemById)


//All item food delete Api
router.put('/updateItem/:id',uploads.single('image'), itemController.updateitem)



//All Item Food Update Api
router.delete('/deleteItem/:id', itemController.deleteitem)


//All item Food getItemByName (search Api) Api
router.get('/getItemByName/:itemName', itemController.getItemByName)

module.exports= router