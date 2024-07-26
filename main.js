const express = require("express") 
const mongoose = require('mongoose')
const db = require('./dataBaseConfig.js')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})
 
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static('uploads'))

const itemRouter = require('./route/itemRoute.js')
const itemCategoryRouter = require('./route/itemCategoryRoute.js')


db().then(async () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })




//Add Item Router
app.use('/api', itemRouter)

//Add Category Router
app.use('/api', itemCategoryRouter)
  



})
.catch(err => console.log(err))

