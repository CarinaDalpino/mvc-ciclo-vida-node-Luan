import express from 'express';
import { CreateFileController } from '../Controllers/CreateFileController.js';
const router = express.Router();

router.post('/', CreateFileController);

export default router;