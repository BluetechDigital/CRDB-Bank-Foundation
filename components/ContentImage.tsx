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
				className={styles.contentImage + " p-0 bg-green-flat"}
				style={{
					clipPath: `polygon(76% 4%, 100% 0, 100% 100%, 0 100%, 0 0)`,
				}}
			>
				<div className="flex flex-col xl:flex-row items-center justify-center">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-2xl mx-auto py-20 px-4 g:px-12 lg:py-20 lg:max-w-5xl w-full xl:w-1/2 2xl:w-1/3 bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `url("/svg/background/layered-peaks-haikei-green-flatgreen.svg")`,
						}}
					>
						<div className="max-w-2xl mx-auto">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center xl:text-left text-paragraph text-yellow-light"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="my-2 max-w-2xl mx-auto mb-6 text-white text-center xl:text-left font-semibold text-4xl lg:text-5xl"
							>
								{title}
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-center xl:text-left text-white text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={
								buttonLink?.url
									? "flex mt-6 lg:mt-0 items-center justify-center xl:justify-start"
									: "hidden"
							}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title={buttonLink?.title}
								tailwindColor="white"
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="flex flex-col w-full xl:w-1/2 2xl:w-2/3"
					>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails.width}
							height={image?.mediaDetails.height}
							className={`${
								image?.sourceUrl
									? "w-full h-[500px] lg:h-[568px] 2xl:h-[575px] object-cover object-center"
									: "hidden"
							}`}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ContentImage;
