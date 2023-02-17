import {Router,application} from 'express';
import { getAllZoo,getOneZoo,getZooBudget,getZooNombre, createZoo, deleteZoo,getRefuge} from '../controllers/zoo.controller.js';
const router = Router();

router.get('/api/zoo', getAllZoo);
router.get('/api/zoo/id/:id', getOneZoo);
router.get('/api/zoo/budget', getZooBudget);
router.get('/api/zoo/refuge', getRefuge);
router.post('/api/zoo/findByNombre', getZooNombre);
router.post('/api/zoo/createZoo', createZoo);
router.delete('/api/zoo/deleteZoo/:id_zoo', deleteZoo);
export default router;