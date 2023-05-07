import { Router } from "express";
const router = new Router();

import { index, create, store, show, create_admin } from "../controllers/subjects.js"

router.get('/create_admin', create_admin)

router.post('/check', create_admin)

router.get('/', index);

router.get('/create', create)

router.post('/', store)

router.get('/:_id', show)

export default router;

