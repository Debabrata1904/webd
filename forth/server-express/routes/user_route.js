import { Router } from "express";
import dummy from "../controllers/controller.js";
import getAllNumbers from "../controllers/get-all-numbers.js";
import postNumber from "../controllers/post-number.js";
import isNumberExist from "../controllers/is-number-exist.js";

const router = Router();

router.get('/get-all-Numbers', getAllNumbers);

router.post('/post-Numbers', postNumber);


router.get('/is-number-exist/:number', isNumberExist);

router.put('/update-Numbers', dummy);

export default router;