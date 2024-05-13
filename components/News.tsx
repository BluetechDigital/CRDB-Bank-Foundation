// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INews} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import fadeInUp, {stagger, initial} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";
import NewsletterElement from "./Elements/NewsletterElement";
import Link from "next/link";

const News: FC<INews> = ({title, highlightText, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-10 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title
							? "max-w-2xl mx-auto lg:mx-0 mb-24 text-center flex flex-col items-baseline jus"
							: "hidden"
					}
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black"
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
						tailwindStyling="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left text-black text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col lg:flex-row gap-4 py-10"
				>
					<div className="w-full lg:w-8/12"></div>
					<div className="w-full lg:w-4/12 flex flex-col gap-10">
						<NewsletterElement />
						<div className="flex flex-col gap-4">
							{globalContext?.news?.length > 0 ? (
								globalContext?.news
									?.slice(0, 3)
									?.map((item: any, index: number) => (
										<Fragment key={index}>
											<Link
												href={`${item?.node?.link?.url}`}
												target={item?.node?.link?.target}
												aria-label={`${item?.node?.link?.title}`}
												className="group block mb-6 py-2 px-4 lg:px-0"
											>
												<div
													className="block lg:hidden relative px-0 h-[300px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
													style={{
														clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
													}}
												>
													<Image
														alt={`${item?.node?.featuredImage?.node?.altText}`}
														src={item?.node?.featuredImage?.node?.sourceUrl}
														width={
															item?.node?.featuredImage?.node?.mediaDetails
																?.width
																? item?.node?.featuredImage?.node?.mediaDetails
																		?.width
																: 500
														}
														height={
															item?.node?.featuredImage?.node?.mediaDetails
																?.height
																? item?.node?.featuredImage?.node?.mediaDetails
																		?.height
																: 500
														}
														className={`${
															item?.node?.featuredImage?.node?.sourceUrl
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
														{dateFormat(item?.node?.date, "dddd, mmmm d, yyyy")}
													</motion.span>
												</div>
												<motion.h4
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className="mb-2 text-lg font-semibold text-black transition-all ease-in-out duration-200 hover:text-green-two"
												>
													{item?.node?.title}
												</motion.h4>
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
														tailwindStyling="block px-0 text-tiny text-darkGrey"
													/>
												</motion.div>
											</Link>
										</Fragment>
									))
							) : (
								<></>
							)}
						</div>
					</div>
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
