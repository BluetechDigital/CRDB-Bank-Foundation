// Imports
import {motion} from "framer-motion";
import {INews} from "@/types/components";
import {FC} from "react";
import {useGlobalContext} from "@/context/global";
import {stagger, initial} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const News: FC<INews> = ({title, highlightText, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
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
					contentType="NewsCard"
					numberOfItemsRenderedPerPage={12}
					contentArray={globalContext?.news}
					tailwindStyling={`grid mb-32 px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3`}
				/>
			</div>
		</>
	);
};

export default News;
