import { login } from "../controllers/login";
import { Router } from "express";
const routerPost = new Router();
routerPost.post('/login', login)

export default routerPost;