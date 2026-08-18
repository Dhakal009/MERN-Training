import express from "express";
import { addProducts, getProductById, getProducts } from "../controller/product.controller.js";


const router = express.Router();

router.get("/",getProducts)

router.get("/:id",getProductById)

router.post("/",addProducts)



export default router;