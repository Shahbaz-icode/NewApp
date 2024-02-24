import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/posts
// instead of localhost:5000/ because /posts is used in index.js app to route
router.get('/', getPosts);
router.post('/',createPost);

export default router;