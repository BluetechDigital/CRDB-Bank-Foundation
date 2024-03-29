// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {INews} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./Elements/Paragraph";
import NewsCard from "./Cards/NewsCard";

const newsThreeCards: FC<INews> = ({title, italic, paragraph}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-16 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title && italic
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="my-2 max-w-2xl mx-auto mb-6 text-center font-semibold leading-tight text-4xl lg:text-5xl"
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
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="grid px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.newsThreeCards?.length > 0 ? (
						globalContext?.newsThreeCards?.map((item: any, keys: number) => (
							<Fragment key={keys}>
								<motion.div
									custom={keys}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
									className="w-full"
								>
									<NewsCard
										slug={item?.node?.slug}
										title={item?.node?.title}
										paragraph={item?.node?.excerpt}
										featuredImage={item?.node?.featuredImage}
									/>
								</motion.div>
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

export default newsThreeCards;
