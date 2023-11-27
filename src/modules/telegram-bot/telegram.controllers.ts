import { Request, Response } from "express";
import axios from "axios";

interface dataType {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const messageModel = (data: dataType) => {
	let messageTG = `Name: <b>${data.name}</b>\n`;
	messageTG += `Email: <b>${data.email}</b>\n`;
	messageTG += `Subject: <b>${data.subject}</b>\n`;
	messageTG += `Message: <b>${data.message}</b>\n`;

	return messageTG;
};

const sendData = async (req: Request, res: Response) => {
	const data = req.body as dataType;

	try {
		await axios.post(API_URL, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: messageModel(data)
		});

		res.status(200).send({
			success: true,
			data: data
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			error: "Failed to send message to Telegram."
		});
	}
};

export default {
	sendData
};
