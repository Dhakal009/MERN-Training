import express from 'express';
import { checkAuth,checkAdmin } from '../middleware/auth.js';
import { getOrder, addOrder, getOrderById,getMyorder,payOrder,deliverOrder} from '../controller/order.controller.js';

const router = express.Router();

router.get("/",checkAuth,checkAdmin,getOrder)
router.post('/',checkAuth,addOrder)
router.get('/myorders',checkAuth,getMyorder)
router.get('/:id',checkAuth,getOrderById)
router.put('/:id/pay',checkAuth,checkAdmin,payOrder)
router.put('/:id/deliver',checkAuth,checkAdmin,deliverOrder)

export default router;