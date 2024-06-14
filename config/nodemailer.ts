// Imports
import nodemailer from "nodemailer";

const host: any = process.env.SENDGRID_CBF_HOST;
const email: any = process.env.SENDGRID_CBF_USER;
const password: any = process.env.SENDGRID_CBF_PASS;

export const emailTransporter: any = nodemailer.createTransport({
	host: host,
	port: 465,
	secure: true,
	auth: {
		user: email,
		pass: password,
	},
	tls: {
		rejectUnauthorized: false,
	},
	logger: true,
	debug: true,
});
