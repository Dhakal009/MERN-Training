import express from 'express';
import ProductRouter from './routes/product.route.js';
const app  =  express();

app.use(express.json());


app.use("/api/products",ProductRouter)


app.listen(3000,()=> console.log("Server is up and running"))


