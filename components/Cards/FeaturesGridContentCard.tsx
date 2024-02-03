// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFeaturesGridContentCard} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const FeaturesGridContentCard: FC<IFeaturesGridContentCard> = ({
	title,
	subtitle,
	paragraph,
	backgroundColor,
}) => {
	let titleStyling: string;
	let subtitleStyling: string;
	let paragraphStyling: string;
	let backgroundWaveStyling: string;
	let backgroundColorStyling: string;

	switch (backgroundColor) {
		case "Green":
			titleStyling = "text-white";
			subtitleStyling = "text-yellow-light";
			paragraphStyling = "text-white";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-green-two";

			break;
		case "Grey":
			titleStyling = "text-pureBlack";
			subtitleStyling = "text-yellow-light";
			paragraphStyling = "text-pureBlack";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGreyTwo";
			break;
		case "GreenStrips":
			titleStyling = "text-white";
			subtitleStyling = "text-yellow-light";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-green-strips";
			break;
		case "PurpleStrips":
			titleStyling = "text-white";
			subtitleStyling = "text-yellow-light";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-purple";
			break;
		case "PurpleWave":
			titleStyling = "text-white";
			subtitleStyling = "text-yellow-light";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "blob-scene-haikei-purplewave";
			break;
		default:
			titleStyling = "text-pureBlack";
			subtitleStyling = "text-yellow-two";
			paragraphStyling = "text-pureBlack";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGrey";
	}

	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className={`h-full p-10 rounded-sm bg-cover bg-no-repeat bg-center ${backgroundColorStyling}`}
				style={{
					backgroundImage: `url(${
						backgroundColor
							? `/svg/background/${backgroundWaveStyling}.svg`
							: "none"
					})`,
				}}
			>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="flex flex-wrap items-center justify-center lg:justify-start"
				>
					<motion.h4
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className={`mb-2 text-center lg:text-center text-paragraph ${subtitleStyling}`}
					>
						{subtitle}
					</motion.h4>
				</motion.div>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className={`mb-3 text-3xl font-semibold text-center ${titleStyling} lg:text-left`}
				>
					{title}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling={`${paragraphStyling} text-center lg:text-left text-paragraph`}
				/>
			</motion.div>
		</div>
	);
};

export default FeaturesGridContentCard;
