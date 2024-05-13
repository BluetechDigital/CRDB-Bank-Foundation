// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INewsCard} from "@/types/components";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const NewsCard: FC<INewsCard> = ({
	slug,
	date,
	title,
	paragraph,
	featuredImage,
}) => {
	return (
		<>
			<div
				className="w-full h-full p-0 border-l-[5px] border-b-[5px] border-lightGrey"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<div
					className="relative px-0 h-[300px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
					}}
				>
					<Link
						target="_self"
						href={`${slug}`}
						aria-label={`View News Article: ${slug}`}
					>
						<Image
							alt={`${featuredImage?.node?.altText}`}
							src={featuredImage?.node?.sourceUrl}
							width={
								featuredImage?.node?.mediaDetails?.width
									? featuredImage?.node?.mediaDetails?.width
									: 500
							}
							height={
								featuredImage?.node?.mediaDetails?.height
									? featuredImage?.node?.mediaDetails?.height
									: 500
							}
							className={`${
								featuredImage?.node?.sourceUrl
									? "object-cover object-center w-full h-full"
									: "hidden"
							}`}
						/>
					</Link>
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-baseline justify-between px-8 pt-10 pb-4"
				>
					<div className="flex mb-2 items-center">
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="inline-flex items-center h-7 px-3 text-xs text-white font-medium bg-green-three bg-opacity-60 rounded-full"
						>
							Article
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="inline-block mx-4"
						>
							<svg
								width="1"
								height="20"
								viewBox="0 0 1 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1="0.5"
									y1="2.18558e-08"
									x2="0.499999"
									y2="20"
									stroke="black"
									stroke-opacity="0.2"
								></line>
							</svg>
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-sm text-black"
						>
							{dateFormat(date, "dddd, mmmm d, yyyy")}
						</motion.span>
					</div>
					<Link
						target="_self"
						href={`${slug}`}
						aria-label={`View News Article: ${slug}`}
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-2 text-lg font-semibold text-black transition-all ease-in-out duration-200 hover:text-purple-default"
						>
							{title}
						</motion.h2>
					</Link>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Paragraph
							content={
								paragraph?.length > 200
									? paragraph?.substring(0, 200) + "..."
									: paragraph
							}
							tailwindStyling="block px-0 text-base text-darkGrey"
						/>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mt-6"
					>
						<Link
							target="_self"
							href={`${slug}`}
							className={slug ? "block" : "hidden"}
							aria-label={`View News Article: ${slug}`}
						>
							<ButtonBorderSliced
								fullWidth={true}
								title="Read more"
								tailwindColor="purple-default"
							/>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default NewsCard;
