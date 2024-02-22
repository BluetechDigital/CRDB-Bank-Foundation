// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IContentImage} from "@/types/components";

// Styling
import styles from "../styles/components/ContentImage.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const ContentImage: FC<IContentImage> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div
				id="ContentStripesVideoBlock"
				className={
					styles.contentImage +
					" p-0 bg-white flex flex-col lg:flex-row items-center "
				}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="py-20 px-4 lg:p-20 lg:max-w-5xl w-full lg:w-1/2 h-full"
				>
					<div className="lg:max-w-2xl mx-auto lg:mx-0">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center lg:text-left text-paragraph text-green-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="my-2 mb-6 text-black text-center lg:text-left font-semibold text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-black text-paragraph"
						/>
					</div>

					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={
							buttonLink?.url
								? "flex mt-6 items-center justify-center lg:justify-start"
								: "hidden"
						}
					>
						<ButtonBorderSliced
							fullWidth={false}
							title={buttonLink?.title}
							tailwindColor="green-Two"
						/>
					</Link>
				</motion.div>
				<motion.div
					viewport={{once: true}}
					initial={slideInRightInitial}
					whileInView={slideInRightFinish}
					className="w-full h-full lg:w-1/2 h-[500px] lg:h-[775px] xl:h-[725px] 2xl:h-[635px] bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url("${image?.sourceUrl}")`,
					}}
				></motion.div>
			</div>
		</>
	);
};

export default ContentImage;
