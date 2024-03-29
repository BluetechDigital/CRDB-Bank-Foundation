// Imports
import {motion} from "framer-motion";
import {INews} from "@/types/components";
import {FC} from "react";
import {useGlobalContext} from "@/context/global";
import {stagger, initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const News: FC<INews> = ({title, italic, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="my-2 mb-6 max-w-2xl mx-auto text-center font-semibold leading-tight text-4xl lg:text-5xl"
					>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="ml-4 font-serif font-normal italic"
						>
							{italic}
						</motion.span>
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
