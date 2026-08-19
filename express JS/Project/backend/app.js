import express from 'express';
import ProductRouter from './routes/product.route.js';
import mongoose from "mongoose"
const app  =  express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/himalayashop")
.then((conn)=> console.log(`Connection to db at ${conn.connection.host}`))
.catch ((err)=> console.log("Error connecting to DB",err.message));





app.use("/api/products",ProductRouter)


app.listen(3000,()=> console.log("Server is up and running"))


