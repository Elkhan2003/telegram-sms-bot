import { Router } from "express";
import telegramController from "./telegram.controllers";

const router = Router();

router.post("/send-telegram", telegramController.sendData);

export default router;
