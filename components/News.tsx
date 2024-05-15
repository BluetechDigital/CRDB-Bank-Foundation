// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INews} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";
import NewsletterElement from "./Elements/NewsletterElement";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";
import NewsVideoElement from "./Elements/NewsVideoElement";

const News: FC<INews> = ({
	title,
	paragraph,
	videoLink,
	latestVideo,
	displayVideo,
	newsHighlight,
	highlightText,
	videoBackgroundImage,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-10 bg-white container px-4 lg:px-0 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title
							? "flex flex-col lg:flex-row items-start justify-between"
							: "hidden"
					}
				>
					<div className="w-full lg:w-8/12 max-w-2xl mx-auto lg:mx-0 flex flex-col items-baseline justify-center gap-2">
						<motion.h2
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left font-bold leading-normal text-4xl lg:text-5xl p-0 text-black"
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
					</div>
					<div className="hidden lg:block w-full lg:w-4/12">
						<NewsletterElement />
					</div>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col lg:flex-row gap-4 lg:gap-12 py-10"
				>
					<div className="w-full lg:w-8/12">
						<Link
							href={`${newsHighlight?.buttonLink?.url}`}
							target={newsHighlight?.buttonLink?.target}
							aria-label={`${newsHighlight?.buttonLink?.title}`}
							className="block p-0 rounded-xl border border-white border-opacity-20 hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500"
						>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="h-112 overflow-hidden"
							>
								<Image
									className="block w-full h-full object-cover object-center"
									src={newsHighlight?.image?.sourceUrl}
									alt={`${newsHighlight?.image?.altText}`}
									width={
										newsHighlight?.image?.mediaDetails?.width
											? newsHighlight?.image?.mediaDetails?.width
											: 500
									}
									height={
										newsHighlight?.image?.mediaDetails?.height
											? newsHighlight?.image?.mediaDetails?.height
											: 500
									}
								/>
							</motion.div>
							<div className="pt-8 px-2 pb-4">
								<div className="flex mb-4 items-center">
									<motion.span
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="inline-flex items-center h-7 px-3 text-xs text-white font-medium bg-green-three bg-opacity-60 rounded-full"
									>
										{newsHighlight?.articleType}
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
										{newsHighlight?.date}
									</motion.span>
									<motion.span
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="mx-3"
									>
										<svg
											width="4"
											height="4"
											viewBox="0 0 4 4"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="2" cy="2" r="2" fill="#043d2b"></circle>
										</svg>
									</motion.span>
									<motion.span
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-sm text-black"
									>
										{newsHighlight?.readTime}
									</motion.span>
								</div>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-lg lg:text-3xl font-semibold text-black transition-all ease-in-out duration-200 hover:text-green-two"
								>
									{newsHighlight?.title}
								</motion.h2>
								<Paragraph
									content={
										newsHighlight?.paragraph?.length > 225
											? newsHighlight?.paragraph?.substring(0, 225) + "..."
											: newsHighlight?.paragraph
									}
									tailwindStyling="block px-0 text-paragraph text-darkGrey"
								/>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mt-4"
								>
									<Link
										target="_self"
										href={`${newsHighlight?.buttonLink?.url}`}
										className={
											newsHighlight?.buttonLink?.url ? "block" : "hidden"
										}
										aria-label={`View ${newsHighlight?.articleType} Post: ${newsHighlight?.title}`}
									>
										<ButtonBorderSliced
											fullWidth={false}
											title="Read more"
											tailwindColor="purple-default"
										/>
									</Link>
								</motion.div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-4/12 flex flex-col gap-4 lg:gap-10">
						<div className="block lg:hidden">
							<NewsletterElement />
						</div>
						<div>
							<motion.h3
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="my-4 lg:mb-4 text-2xl font-semibold text-black text-center lg:text-left"
							>
								Latest Video
							</motion.h3>
							<NewsVideoElement
								videoLink={videoLink}
								latestVideo={latestVideo}
								displayVideo={displayVideo}
								videoBackgroundImage={videoBackgroundImage}
							/>
						</div>
						<div className="flex flex-col gap-4">
							<motion.h3
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="my-4 lg:mb-0 text-2xl font-semibold text-black text-center lg:text-left"
							>
								Latest Articles
							</motion.h3>

							{globalContext?.news?.length > 0 ? (
								globalContext?.news
									?.slice(0, 3)
									?.map((item: any, index: number) => (
										<Fragment key={index}>
											<Link
												target="_self"
												href={`news/${item?.node?.slug}`}
												aria-label={`Insights:${item?.node?.title}`}
												className="group block py-0 px-4 lg:px-0"
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
					numberOfItemsRenderedPerPage={9}
					contentArray={globalContext?.news?.slice(3, 100)}
					tailwindStyling={`grid mb-32 lg:mt-6 px-4 lg:-m-4 gap-y-12 gap-8 lg:gap-4 xl:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3 lg:mb-14`}
				/>
			</div>
		</>
	);
};

export default News;
