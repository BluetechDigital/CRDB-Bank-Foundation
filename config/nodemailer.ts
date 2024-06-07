// Imports
import nodemailer from "nodemailer";

const host: any = process.env.EMAIL_HOST;
const email: any = process.env.EMAIL_USER;
const password: any = process.env.EMAIL_PASS;

export const emailTransporter: any = nodemailer.createTransport({
	host: host,
	secure: false,
	port: 25,
	auth: {
		user: email,
		pass: password,
	},
	logger: true,
	debug: true,
});
