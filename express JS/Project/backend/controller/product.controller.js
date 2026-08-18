import Products from "../model/products.js";

const getProducts = (req,res)=>{
    res.send(Products)
}

const addProducts = (req,res)=>{
    const data =  req.body;
    Products.push(data);
    res.send({message: "Product is added."});
    
}

const getProductById = (req,res)=>{
    const {id} =  req.params;
    const product = Products.find((product)=> product.id == id)
    if(product){
        res.send(product)
    }
    else{

        res.status(404).send({error: "Product not Found"})
    }

}


export {getProducts, getProductById, addProducts}