import { Router } from "express";
import dummy from "../controllers/controller.js";
import getAllNumbers from "../controllers/get-all-numbers.js";
import postNumber from "../controllers/post-number.js";

const router = Router();

router.get('/get-all-Numbers', getAllNumbers);

router.post('/post-Numbers', postNumber);


router.get('/get-Numbers', dummy);

router.put('/update-Numbers', dummy);

export default router;