// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {INews} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import NewsCard from "./Cards/NewsCard";

const News: FC<INews> = ({title, italic, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
				>
					<motion.h2
						initial={initial}
						whileInView={stagger}
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
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid mb-32 px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.news?.length > 0 ? (
						globalContext?.news?.map((item: any, keys: any) => (
							<Fragment key={keys}>
								<NewsCard
									title={item?.node?.title}
									paragraph={item?.node?.excerpt}
									slug={`news/${item?.node?.slug}`}
									featuredImage={item?.node?.featuredImage}
								/>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default News;
