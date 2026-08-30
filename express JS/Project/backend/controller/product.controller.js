import Products from "../model/products.js";

const getProducts =  async (req,res)=>{
    const products = await Products.find();
    res.send(products)
}

const addProducts = async (req,res)=>{
    const newProducts = {
        name:"Sample Name",
        price:0,
        description:"Sample Description",
        brand:"Sample Brand",
        category:"Sample Category"
    }

    const product =  await Products.create(newProducts);
    res.send({message: "Product added Succesfully!"});
    
}

const getProductById = async(req,res)=>{
    const {id} =  req.params;
    const product = await Products.findById(id);
    if(product)
        res.send(product)
    else
        res.status(404).send({error: "Product not found"})

}

const updateProduct = async (req,res)=>{
    const {id} = req.params;
    const {name,price,category,brand,image,description} = req.body;

    const product = await Products.findById(id)

    if(!product) return res.status(404).send({error: "Product not found"})

    product.name = name || product.name
    product.price = price || product.price
    product.category = category || product.category
    product.brand =  brand || product.brand
    product.image = image || product.image
    product.description = description || product.description


    await product.save();
    res.send({message:"Product is Updated"})
}


const deleteProduct  = async (req,res)=>{

    const {id}= req.params;
    const product = await Products.findByIdAndDelete(id)

    if(!product) return res.status(404).send({error:"Product not Found"})

    res.send({message:"Product is Deleted"})
}
export {getProducts, getProductById, addProducts,updateProduct,deleteProduct}