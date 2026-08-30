import express from 'express';
import ProductRouter from './routes/product.route.js';
import UserRouter from './routes/user.route.js'
import mongoose from "mongoose"
import logger from './middleware/logger.js';
import cookieParser from 'cookie-parser'
const app  =  express();

app.use(express.json());
app.use(cookieParser())
app.use(logger)

mongoose.connect("mongodb://localhost:27017/himalayashop")
.then((conn)=> console.log(`Connection to db at ${conn.connection.host}`))
.catch ((err)=> console.log("Error connecting to DB",err.message));





app.use("/api/products",ProductRouter)
app.use("/api/auth",UserRouter)



app.listen(3000,()=> console.log("Server is up and running"))


