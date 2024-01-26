// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
	highlightText,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-16 lg:py-28 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 text-center lg:text-center text-lg text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="max-w-none lg:max-w-3xl mx-auto text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
						>
							{title}
							<span className="p-2 ml-3 bg-green-two text-white">
								{highlightText}
							</span>
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</motion.div>
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling={`grid px-4 lg:px-16 lg:-m-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
