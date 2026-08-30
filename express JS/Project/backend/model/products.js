// const Products = [
//     {
//         id: "1",
//         name: "MacBook Pro 14",
//         brand: "Apple",
//         model: "M2 Pro",
//         category: "Laptops",
//         price: { amount: 199900, currency: "NPR" },
//         specs: { cpu: "Apple M2 Pro 10‑core", ram: "16GB", storage: "512GB SSD", gpu: "Integrated" },
//         inStock: true,
//         rating: 4.8,
//         reviewsCount: 254,
//         images: ["/images/macbookpro14-1.jpg", "/images/macbookpro14-2.jpg"],
//         description: "High-performance laptop with long battery life and advanced neural engine for creators.",
//         createdAt: "2024-03-10"
//     },
//     {
//         id: "2",
//         name: "Dell XPS 13",
//         brand: "Dell",
//         model: "9315",
//         category: "Laptops",
//         price: { amount: 169900, currency: "NPR" },
//         specs: { cpu: "Intel Core i7-1360P", ram: "16GB", storage: "512GB SSD", gpu: "Iris Xe" },
//         inStock: true,
//         rating: 4.6,
//         reviewsCount: 180,
//         images: ["/images/dellxps13-1.jpg"],
//         description: "Compact premium ultrabook with excellent display and build quality.",
//         createdAt: "2024-01-22"
//     },
//     {
//         id: "3",
//         name: "HP Spectre x360 14",
//         brand: "HP",
//         model: "Convertible",
//         category: "Laptops",
//         price: { amount: 149900, currency: "NPR" },
//         specs: { cpu: "Intel Core i7-1355U", ram: "16GB", storage: "1TB SSD", gpu: "Iris Xe" },
//         inStock: false,
//         rating: 4.5,
//         reviewsCount: 95,
//         images: ["/images/hpspectre14-1.jpg"],
//         description: "2-in-1 convertible laptop with touch display and stylus support.",
//         createdAt: "2023-11-15"
//     },
//     {
//         id: "4",
//         name: "Lenovo ThinkPad X1 Carbon Gen11",
//         brand: "Lenovo",
//         model: "X1 Carbon",
//         category: "Laptops",
//         price: { amount: 179900, currency: "NPR" },
//         specs: { cpu: "Intel Core i7-1370P", ram: "16GB", storage: "1TB SSD", gpu: "Iris Xe" },
//         inStock: true,
//         rating: 4.7,
//         reviewsCount: 120,
//         images: ["/images/thinkpadx1-1.jpg"],
//         description: "Business-class laptop with robust security features and lightweight chassis.",
//         createdAt: "2024-02-05"
//     },
//     {
//         id: "5",
//         name: "Asus ROG Zephyrus G14",
//         brand: "Asus",
//         model: "G14",
//         category: "Gaming",
//         price: { amount: 159900, currency: "NPR" },
//         specs: { cpu: "AMD Ryzen 9 7940HS", ram: "32GB", storage: "1TB SSD", gpu: "NVIDIA RTX 4070" },
//         inStock: true,
//         rating: 4.9,
//         reviewsCount: 310,
//         images: ["/images/zephyrusg14-1.jpg"],
//         description: "Powerful compact gaming laptop with high refresh rate display and long battery life.",
//         createdAt: "2024-04-01"
//     },
//     {
//         id: "6",
//         name: "Samsung Galaxy S24 Ultra",
//         brand: "Samsung",
//         model: "S24 Ultra",
//         category: "Phones",
//         price: { amount: 139900, currency: "NPR" },
//         specs: { display: "6.8 AMOLED", ram: "12GB", storage: "256GB", camera: "200MP" },
//         inStock: true,
//         rating: 4.7,
//         reviewsCount: 420,
//         images: ["/images/s24ultra-1.jpg"],
//         description: "Flagship smartphone with pro-grade camera and S Pen support.",
//         createdAt: "2024-02-20"
//     },
//     {
//         id: "7",
//         name: "Sony WH-1000XM5",
//         brand: "Sony",
//         model: "WH-1000XM5",
//         category: "Audio",
//         price: { amount: 44990, currency: "NPR" },
//         specs: { type: "Over-ear", noiseCancellation: true, batteryLife: "30h" },
//         inStock: true,
//         rating: 4.8,
//         reviewsCount: 860,
//         images: ["/images/wh1000xm5-1.jpg"],
//         description: "Industry-leading noise cancellation and premium sound quality.",
//         createdAt: "2023-08-10"
//     },
//     {
//         id: "8",
//         name: "Apple iPhone 15",
//         brand: "Apple",
//         model: "iPhone 15",
//         category: "Phones",
//         price: { amount: 129900, currency: "NPR" },
//         specs: { display: "6.1 OLED", ram: "6GB", storage: "128GB", camera: "48MP" },
//         inStock: false,
//         rating: 4.6,
//         reviewsCount: 1020,
//         images: ["/images/iphone15-1.jpg"],
//         description: "Latest iPhone with improved performance and camera upgrades.",
//         createdAt: "2024-09-12"
//     },
//     {
//         id: "9",
//         name: "Google Pixel 8",
//         brand: "Google",
//         model: "Pixel 8",
//         category: "Phones",
//         price: { amount: 99900, currency: "NPR" },
//         specs: { display: "6.2 OLED", ram: "8GB", storage: "128GB", camera: "50MP" },
//         inStock: true,
//         rating: 4.5,
//         reviewsCount: 430,
//         images: ["/images/pixel8-1.jpg"],
//         description: "Google's latest with Tensor G3 chipset and clean Android experience.",
//         createdAt: "2024-10-01"
//     }
// ];


// export default Products;


import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    numReviews:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        default: "/images/sample.jpg"
    },
    countInStock:{
        type:Number,
        default:0
    }
},

{timestamps:true}

);


const Product = mongoose.model("Product",productSchema);

export default Product;