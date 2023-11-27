import { Router } from "express";
import telegramBot from "../modules/telegram-bot/telegram.routes";

const router = Router();
router.use("/", telegramBot);

export default router;
