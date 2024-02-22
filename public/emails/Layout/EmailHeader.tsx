// Imports
import * as React from "react";
import {IEmailHeader} from "@/types/email";
import {Img, Section} from "@react-email/components";

const EmailHeader: React.FC<IEmailHeader.IEmailHeader> = ({imagesDirUrl}) => {
	return (
		<>
			<Section style={imageSection}>
				<Img
					width="100%"
					height="105"
					style={logo}
					src={imagesDirUrl}
					alt="AWL Carpentry Developments Ltd Logo"
				/>
			</Section>
			<Section style={{border: "5px solid", borderColor: "#116dff"}}></Section>
		</>
	);
};

export default EmailHeader;

const imageSection: IEmailHeader.IImageSection = {
	width: "100%",
	padding: "0px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#001640",
};

const logo: IEmailHeader.ILogo = {
	width: "100%",
	height: "100%",
	minHeight: "100px",
};
