import User from './model/user.js'
import Products from './model/products.js'
import Order from './model/order.js'
import mongoose from "mongoose"


//dummy data
import products from './data/products.js'
import users from './data/users.js'

mongoose.connect(process.env.MONGODB_URL)
.then((conn)=> console.log(`Connection to db at ${conn.connection.host}`))
.catch ((err)=> console.log("Error connecting to DB",err.message));

const loadData = async () => {
    try{
        await User.deleteMany();
        await Products.deleteMany();
        await Order.deleteMany();
        const addedUsrs = await User.insertMany(users);
        const adminId = addedUsrs[0]._id;
        const addedProducts = await Products.insertMany(products.map((product)=> ({...product,user:adminId})));
        console.log("Data loaded successfully");
        process.exit(0)
    }
    catch (error) {
        console.error(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await User.deleteMany();
        await Products.deleteMany();
        await Order.deleteMany();
        console.log("Successfully DB Cleared")
        process.exit(0)
    }
    catch (error) {
        console.error(error)
        process.exit(1)
    }
}

loadData();