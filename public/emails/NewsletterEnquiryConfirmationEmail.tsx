// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {INewsletterEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const NewsletterEnquiryConfirmationEmail: React.FC<
	INewsletterEmail.INewsletterConfirmationEmail
> = ({email, imagesDirUrl, themesOptionsContent}) => {
	return (
		<Html>
			<Head />
			<Preview>New Newsletter Sign Up</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader
						imagesDirUrl={`${imagesDirUrl}/CRDB-Bank-Foundation-Ltd-Email-Header-1.png`}
					/>
					<Section style={content}>
						<Text style={introParagraph}>Hello Team,</Text>
						<Text style={paragraph}>
							We&apos;ve just received a new newsletter sign up through our
							website&apos;s. Their details are below.
						</Text>
						<Text style={detailsParagraph}>Inquiry Details:</Text>
						<Text style={paragraph}>
							<strong>Email:</strong>{" "}
							<Link href={`mailto:${email}`} style={link}>
								{email}
							</Link>
						</Text>
						<Text style={paragraph}>
							Could we please add the new email to our newsletter list? If
							further details are required, we will promptly follow up for any
							additional information needed. Thank you, Team!
						</Text>
						<Text style={paragraph}>Best regards,</Text>
						<Text style={paragraph}>
							Ms. Tully Esther Mwambapa,
							<br />
							Director,
							<br />
							CRDB Bank Foundation (CBF)
						</Text>
					</Section>
					<EmailFooter
						imagesDirUrl={imagesDirUrl}
						themesOptionsContent={themesOptionsContent}
					/>
				</Container>
			</Body>
		</Html>
	);
};

export default NewsletterEnquiryConfirmationEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: INewsletterEmail.IMain = {
	fontFamily,
	padding: "0px",
	backgroundColor: "#ffffff",
};
const introParagraph: INewsletterEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",

	paddingTop: "1.5rem",
};
const detailsParagraph: INewsletterEmail.IDetailsParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",
};
const paragraph: INewsletterEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 0.5rem",
};
const container: INewsletterEmail.IContainer = {
	maxWidth: "580px",
	margin: "0px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: INewsletterEmail.IContent = {
	padding: "10px",
};
const link: INewsletterEmail.ILink = {
	color: "#20ce88",
	textDecoration: "underline",
};
