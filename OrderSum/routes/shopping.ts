import { Router } from 'express';
import { saveShoppingList } from '../controllers/shoppingController';

const router = Router();
router.post('/submit', saveShoppingList);

export default router;
