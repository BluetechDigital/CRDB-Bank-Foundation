// Imports
import {INewsletterEmail} from "@/types/email";
import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
import type {NextApiRequest, NextApiResponse} from "next";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import NewsletterEnquiryConfirmationEmail from "@/components/Emails/NewsletterEnquiryConfirmationEmail";

// Components

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const data = req.body;

		// If any of these values are undefined
		if (!data?.email) {
			return res.status(400).json({
				status: "error",
				message: "Bad request. Please try again.",
			});
		}

		try {
			const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
			const themesOptionsContent: any = await getThemesOptionsContent();

			/* Render React Newsletter
			 Confirmation Email Component*/
			const newsletterEmailHtml: string = render(
				<NewsletterEnquiryConfirmationEmail
					email={`${data?.email}`}
					imagesDirUrl={imagesDirUrl}
					themesOptionsContent={themesOptionsContent}
				/>
			);

			/* NewsletterConfirmation Email */
			const newsletterEmail: INewsletterEmail = {
				from: `${themesOptionsContent?.email}`,
				to: `${data?.email}`,
				subject: `Thank You for Contacting CRDB Bank Foundation`,
				html: newsletterEmailHtml,
			};

			await emailTransporter.sendMail({...newsletterEmail});

			return res.status(200).json({
				status: "success",
				message:
					"Thanks for your message! We'll endeavour to get back in touch with you as soon as possible.",
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: "Something went wrong sending your enquiry. Please try again.",
				data: err,
			});
		}
	}

	return res.status(400).json({
		status: "error",
		message: "Bad request. Please try again.",
	});
};

export default handler;
