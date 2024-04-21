// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IFeaturesGridContentCard} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const FeaturesGridContentCard: FC<IFeaturesGridContentCard> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	backgroundColor,
}) => {
	let buttonColor: string;
	let titleStyling: string;
	let subtitleStyling: string;
	let paragraphStyling: string;
	let backgroundWaveStyling: string;
	let backgroundColorStyling: string;

	switch (backgroundColor) {
		case "Green":
			buttonColor = "white";
			titleStyling = "text-white";
			subtitleStyling = "text-white";
			paragraphStyling = "text-white";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-green-two";

			break;
		case "Grey":
			buttonColor = "green-Two";
			titleStyling = "text-black";
			subtitleStyling = "text-green-two";
			paragraphStyling = "text-black";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGreyTwo";
			break;
		case "GreenStrips":
			buttonColor = "white";
			titleStyling = "text-white";
			subtitleStyling = "text-white";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-green-strips";
			break;
		case "PurpleStrips":
			buttonColor = "white";
			titleStyling = "text-white";
			subtitleStyling = "text-white";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-purple";
			break;
		case "PurpleWave":
			buttonColor = "white";
			titleStyling = "text-white";
			subtitleStyling = "text-white";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "blob-scene-haikei-purplewave";
			break;
		default:
			buttonColor = "white";
			titleStyling = "text-black";
			subtitleStyling = "text-green-two";
			paragraphStyling = "text-black";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGrey";
	}

	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				variants={stagger}
				whileInView="animate"
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
				<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
					<Link
						aria-label={`${buttonLink?.title}`}
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
					>
						<ButtonBorderSliced
							fullWidth={false}
							title={buttonLink?.title}
							tailwindColor={`${buttonColor}`}
						/>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default FeaturesGridContentCard;
