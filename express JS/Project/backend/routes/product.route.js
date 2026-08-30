import express from "express";
import { addProducts, deleteProduct, getProductById, getProducts, updateProduct } from "../controller/product.controller.js";
import { checkAuth,checkAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/",getProducts)

router.get("/:id",getProductById)

router.post("/",checkAuth,checkAdmin,addProducts)

router.put("/:id",updateProduct)

router.delete("/:id",deleteProduct)

export default router;