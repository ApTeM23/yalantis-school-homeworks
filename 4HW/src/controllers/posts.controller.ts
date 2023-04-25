import { Router } from "express";

import { asyncWrapper } from "src/shared/middlewares/async-wrapper";
import { validateReq } from "src/shared/middlewares/validate";

import { postsService } from "../services/posts.service";
import { CreatePostDto } from "../dto/create-post.dto";
import { mapPostToDTO } from '../dto/mapper';

const router = Router();

router.post(
    "/",
    validateReq(CreatePostDto),
    asyncWrapper(async (req, res) => {
        const post = await postsService.createPost(req.body);
        res.status(201).send(mapPostToDTO(post));
    })
);

router.get(
    "/",
    asyncWrapper(async (req, res) => {
        const posts = await postsService.getAll();
        const postDTOs = posts.map((post) => mapPostToDTO(post));

        res.status(201).send(postDTOs).json();
    })
)

export const postsController = router;