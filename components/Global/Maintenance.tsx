// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IMaintenance} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Maintenance.module.scss";

// Components
import Paragraph from "./../Elements/Paragraph";

const Maintenance: FC<IMaintenance> = ({title, paragraph, backgroundImage}) => {
	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<>
			<div className={styles.maintenance}>
				<div
					className="relative flex flex-col h-full min-h-screen bg-center bg-no-repeat bg-cover"
					style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
				>
					{/* Background Video & Image */}
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden"
					>
						{/* Image */}
						<Image
							priority={true}
							width={
								backgroundImage?.mediaDetails?.width
									? backgroundImage?.mediaDetails?.width
									: 1000
							}
							height={
								backgroundImage?.mediaDetails?.height
									? backgroundImage?.mediaDetails?.height
									: 1000
							}
							className={`block ${mainImageVideoTailwindcss}`}
							src={backgroundImage?.sourceUrl}
							alt={backgroundImage?.altText}
						/>
						<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-blue--green-darkerTwo from-5% via-blue--green-darkerTwo via-10% to-transparent to-100%" />
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="container relative flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left"
					>
						<div className="max-w-3xl mx-auto">
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex flex-col sm:block text-center mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]"
							>
								{title}
							</motion.h1>
						</div>
						<div className="max-w-xl mx-auto">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-medium text-center sm:text-left"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Maintenance;
