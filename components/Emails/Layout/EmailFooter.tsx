// Imports
import * as React from "react";
import {IEmailFooter} from "@/types/email";
import {Img, Row, Link, Text, Column, Section} from "@react-email/components";

const EmailFooter: React.FC<IEmailFooter.IEmailFooter> = ({
	imagesDirUrl,
	themesOptionsContent,
}) => {
	return (
		<>
			<Section style={{border: "5px solid", borderColor: "#00ab00"}}></Section>
			<Section style={footer}>
				<Section style={footerLogoSection}>
					<Link href={`https://crdbbankfoundation.co.tz`}>
						<Img
							width="105px"
							height="105px"
							style={footerLogo}
							alt="CRDB Bank Foundation (CBF) Logo White"
							src={`${imagesDirUrl}/2024/05/crdb-foundation-logo-white.png`}
						/>
					</Link>
				</Section>
				<Section
					style={{
						width: "100%",
						display: "grid",
						gridGap: "1rem",
						padding: "1rem 0rem",
						alignItems: "center",
						justifyContent: "center",
						gridTemplateColumns: "repeat(4)",
					}}
				>
					<Column
						style={{
							width: "25%",
							padding: "0px 8px",
						}}
					>
						<Link href={themesOptionsContent?.facebookLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/2024/02/facebook-round-white.png`}
							/>
						</Link>
					</Column>
					<Column
						style={{
							width: "25%",
							padding: "0px 8px",
						}}
					>
						<Link href={themesOptionsContent?.instagramLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/2024/02/instagram-round-white.png`}
							/>
						</Link>
					</Column>
					<Column
						style={{
							width: "25%",
							padding: "0px 8px",
						}}
					>
						<Link href={themesOptionsContent?.twitterLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/2024/02/twitter-round-white.png`}
							/>
						</Link>
					</Column>
					<Column
						style={{
							width: "25%",
							padding: "0px 8px",
						}}
					>
						<Link href={themesOptionsContent?.linkedinLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/2024/05/linkedin-round-white.png`}
							/>
						</Link>
					</Column>
				</Section>
				<Row>
					<Text
						style={{
							color: "#fafafa",
							fontSize: "0.8rem",
							textAlign: "center",
							lineHeight: "1.15rem",
							padding: "0.25rem 0.5rem",
						}}
					>
						{themesOptionsContent?.copyrightText}
					</Text>
				</Row>
			</Section>
		</>
	);
};

export default EmailFooter;

const link: IEmailFooter.ILink = {
	color: "#43b02a",
	textDecoration: "underline",
};

const footer: IEmailFooter.IFooter = {
	maxWidth: "580px",
	margin: "0 auto",
	marginBottom: "30px",
	backgroundColor: "#015a01",
};

const footerLogoSection: IEmailFooter.IFooterLogoSection = {
	width: "100%",
	padding: "0px",
	backgroundColor: "#015a01",
};

const footerLogo: IEmailFooter.IFooterLogo = {
	width: "100%",
	height: "75px",
	margin: "15px auto",
	maxWidth: "125px",
};
