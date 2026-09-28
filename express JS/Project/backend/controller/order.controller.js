import Order from '../model/order.js';
import user from '../model/user.js';


const addOrder = async (req, res) => {
    const {
        orderItems,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        shippingAddress,
        paymentMethod
    } = req.body

    const order = await Order.create({
        user: req.user._id,
        orderItems,
        shippingAddress,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        paymentMethod
    })

    res.send({ message: "Order created successfully", orderId: order._id })
}

const getOrder = async (req, res) => {
    const orders = await Order.find().populate('user', 'fullname email')
    res.send(orders)
}

const getOrderById = async (req, res) => {
    const { id } = req.params
    const orders = await Order.findById(id).populate('user', 'fullname email')
    if (!orders) return res.status(404).send({ message: "Order not found" })
    res.send(orders)
}


const getMyorder = async (req,res)=>{
    const id = req.user._id
    const orders = await Order.find({user:id})
    res.send(orders)
}

const payOrder = async (req,res)=>{
    const {id} = req.params
    const order = await Order.findById(id)
    if(!order) return res.status(404).send({message:"Order not found"})
    order.isPaid = true
    order.paidAt = Date.now()
    await order.save()
    res.send({message:"Order paid successfully"})
}

const deliverOrder = async (req,res)=>{
    const {id} = req.params
    const order = await Order.findById(id)
    if(!order) return res.status(404).send({message:"Order not found"})
    if(!order.isPaid) return res.status(400).send({message:"Order is not paid yet"})
    order.isDelivered = true
    order.deliveredAt = Date.now()
    await order.save()
    res.send({message:"Order delivered successfully"})
}

export { getOrder, addOrder, getOrderById, getMyorder,payOrder, deliverOrder }    
