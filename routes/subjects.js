import { Router } from "express";
const router = new Router();

import { index, create, store, show } from "../controllers/subjects.js"

router.get('/', index);

router.get('/create', create)

router.post('/', store)

router.get('/:_id', show)

export default router;

