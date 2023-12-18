import { body } from "@ev-fns/validation";
import { Router } from "express";
import { scrapperPost } from "../endpoints/scrapper";
import { auth } from "../middlewares/auth";
import { scrapperPostBody } from "../validations/scrapper";

const router = Router();

/**
 * POST /scrapper
 * @tag Scrapper
 * @security BearerAuth
 * @bodyContent {ScrapperPostRequestBody} application/json
 * @response 200
 * @responseContent {ScrapperPostResponseBody} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.post("/scrapper", auth, body(scrapperPostBody), scrapperPost);

export default router;
