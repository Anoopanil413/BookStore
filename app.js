const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended: true}))
app.use(express.json());
const userRoutes = require('./Routes/bookRoutes')

app.use('/user',userRoutes)
const port = process.env.PORT || 3000
const db = require('./Config/dataBase')
const mongoURL = process.env.MongoDB_URL






const appEndPoint = async(url)=>{
    try {
        await db.connectDb(url)
        app.listen(port,()=>{console.log(`App connected to db and listening at port ${port}`)})
    } catch (error) {   
        console.log(error)
    }

}
appEndPoint(mongoURL)

