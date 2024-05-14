// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IGallery} from "@/types/components";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const Gallery: FC<IGallery> = ({
	title,
	gallery,
	subtitle,
	paragraph,
	highlightText,
	itemsDisplayedPerPage,
}) => {
	return (
		<>
			<div
				className={
					styles.gallery +
					` py-10 bg-white container px-4 mx-auto bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-1 text-center text-paragraph text-green-two"
					>
						{subtitle}
					</motion.h4>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="max-w-2xl mx-auto text-center font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black"
					>
						{title}
						<span
							className={
								highlightText ? "p-2 ml-3 bg-green-two text-white" : "hidden"
							}
						>
							{highlightText}
						</span>
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-paragraph"
					/>
				</motion.div>
				<Pagination
					contentType="Gallery"
					contentArray={gallery}
					numberOfItemsRenderedPerPage={12}
					tailwindStyling={`${
						gallery?.length > 0
							? `grid gap-4 grid-cols-2 ${
									parseInt(itemsDisplayedPerPage) === 12
										? "lg:grid-cols-4"
										: "lg:grid-cols-4 xl:grid-cols-5"
							  }`
							: "flex items-center justify-center"
					}`}
				/>
			</div>
		</>
	);
};

export default Gallery;
