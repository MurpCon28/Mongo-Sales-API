import { Router } from 'express';

import salesController from '../controllers/sales.controller.js';

const router = Router();

router.get('/', salesController.apiGetSales);
router.get("/:id", salesController.apiGetSalesById);
router.post("/", salesController.apiPostSale);
router.delete("/delete/:id", salesController.apiDeleteSale);
router.put("/:id", salesController.apiUpdateSale);

export default router;