// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IBlogs} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import BlogsCard from "./Cards/BlogsCard";
import Paragraph from "./Elements/Paragraph";

const BlogsThreeCards: FC<IBlogs> = ({title, highlightText, paragraph}) => {
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
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="grid px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.blogsThreeCards?.length > 0 ? (
						globalContext?.blogsThreeCards?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
									className="w-full"
								>
									<BlogsCard
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

export default BlogsThreeCards;
