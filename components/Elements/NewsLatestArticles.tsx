// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INewsLatestArticles} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Paragraph";

const NewsLatestArticles: FC<INewsLatestArticles> = ({
	slug,
	date,
	title,
	excerpt,
	articleType,
	featuredImage,
}) => {
	return (
		<>
			<Link
				href={slug}
				target="_self"
				aria-label={`${articleType ? articleType : "Insights"}: ${title}`}
				className="group block py-0 px-4 lg:px-0"
			>
				<div className="block lg:hidden relative px-0 h-[300px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey">
					<Image
						alt={`${featuredImage?.node?.altText}`}
						src={featuredImage?.node?.sourceUrl}
						width={
							featuredImage?.node?.mediaDetails?.width
								? featuredImage?.node?.mediaDetails?.width
								: 1000
						}
						height={
							featuredImage?.node?.mediaDetails?.height
								? featuredImage?.node?.mediaDetails?.height
								: 1000
						}
						className={`${
							featuredImage?.node?.sourceUrl
								? "object-cover object-center w-full h-full"
								: "hidden"
						}`}
					/>
				</div>
				<div className="flex mt-6 mb-2 items-center">
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-flex items-center h-7 px-3 text-xs text-white font-medium bg-green-three bg-opacity-60 rounded-full"
					>
						Insights
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
								strokeOpacity="0.2"
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
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-2 text-lg font-semibold text-black transition-all ease-in-out duration-200 hover:text-green-two"
				>
					{title}
				</motion.h4>
				<motion.article
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<Paragraph
						content={
							excerpt?.length > 200
								? excerpt?.substring(0, 200) + "..."
								: excerpt
						}
						tailwindStyling="block px-0 text-tiny text-darkGrey"
					/>
				</motion.article>
			</Link>
		</>
	);
};

export default NewsLatestArticles;
