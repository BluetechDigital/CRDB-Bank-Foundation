// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IMainPrograms} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/MainPrograms.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const MainPrograms: FC<IMainPrograms> = ({
	title,
	subtitle,
	paragraph,
	programsGrid,
	highlightText,
}) => {
	return (
		<>
			<div
				className={
					styles.mainPrograms +
					" relative py-16 lg:py-28 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
				style={{
					clipPath: `polygon(0 0, 68% 0, 100% 0, 100% 99%, 25% 95%, 0 100%)`,
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6 sm:gap-12">
					<div className="flex flex-col items-center">
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
							className="text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
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
					</div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="w-full relative grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 py-6 lg:py-16 px-0 sm:px-4 gap-6 items-start justify-center"
					>
						{programsGrid?.length > 0 ? (
							programsGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<>
										<Link
											href={`${item?.card?.link?.url}`}
											target={item?.card?.link?.target}
											className={styles.card + " group overflow-hidden"}
											style={{
												boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
											}}
										>
											<div
												className="flex flex-col w-full h-fit min-h-[600px] justify-between items-center bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out md:hover:scale-105"
												style={{
													backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 128, 0, 0.70),
														rgba(0, 128, 0, 0.85),
														rgba(0, 128, 0, 1)
													),url("${item?.card?.image?.sourceUrl}")`,
												}}
											>
												<div
													className={
														styles.content +
														" py-10 px-6 sm:p-10 group-hover:mt-28 sm:group-hover:mt-10 md:group-hover:mt-16 gap-4 sm:gap-8 h-[400px] bg-white group-hover:border-none border-t-4 border-green-two flex flex-col"
													}
												>
													<motion.div
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
													>
														<Image
															alt={item?.card?.icon?.altText}
															src={item?.card?.icon?.sourceUrl}
															width={item?.card?.icon?.mediaDetails?.width}
															height={item?.card?.icon?.mediaDetails?.height}
															className={
																item?.card?.icon?.sourceUrl
																	? `block group-hover:hidden object-contain object-center w-full h-[50px] lg:h-[60px]`
																	: `hidden`
															}
														/>
													</motion.div>
													<motion.h3
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="text-pureBlack group-hover:text-white font-extrabold text-xl leading-tight text-center tracking-[0.10rem]"
													>
														{item?.card?.title}
													</motion.h3>
													<Paragraph
														content={
															item?.card?.paragraph.substring(0, 150) + "..."
														}
														tailwindStyling="text-darkGrey group-hover:text-white text-base text-center"
													/>
													<motion.button
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className={
															item?.card?.link?.title
																? `flex sm:hidden group-hover:hidden items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-green-two border-green-two hover:bg-green-dark hover:border-green-dark transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-green-two hover:before:bg-green-dark after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-green-two hover:after:bg-green-dark`
																: `hidden`
														}
													>
														<span>{item?.card?.link?.title}</span>
														<span className="hidden group-hover:block">
															<svg
																height="35"
																width="30.237"
																viewBox="0 0 30.237 35"
																xmlns="http://www.w3.org/2000/svg"
															>
																<g transform="translate(-4906.763 143)">
																	<path
																		d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																		transform="translate(4870 -143)"
																		fill="#e4a002"
																	></path>
																	<g transform="translate(4890.311 -1111.861)">
																		<path
																			d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																			transform="translate(0 0)"
																			fill="#ffffff"
																		></path>
																	</g>
																</g>
															</svg>
														</span>
														<span className="block group-hover:hidden">
															<svg
																height="35"
																width="30.237"
																viewBox="0 0 30.237 35"
																xmlns="http://www.w3.org/2000/svg"
															>
																<g transform="translate(-4906.763 143)">
																	<path
																		d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																		transform="translate(4870 -143)"
																		fill="#ffffff"
																	></path>
																	<g transform="translate(4890.311 -1111.861)">
																		<path
																			d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																			transform="translate(0 0)"
																			fill="#ffffff"
																		></path>
																	</g>
																</g>
															</svg>
														</span>
													</motion.button>
												</div>
												<div className="py-0 group-hover:py-4 w-full h-[200px] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover">
													<button
														className={
															item?.card?.link?.title
																? `hidden group-hover:flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-transparent border-white hover:bg-yellow-dark hover:border-yellow-dark transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-yellow-dark after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-yellow-dark`
																: `hidden`
														}
													>
														<span>{item?.card?.link?.title}</span>
														<span className="hidden group-hover:block">
															<svg
																height="35"
																width="30.237"
																viewBox="0 0 30.237 35"
																xmlns="http://www.w3.org/2000/svg"
															>
																<g transform="translate(-4906.763 143)">
																	<path
																		d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																		transform="translate(4870 -143)"
																		fill="#e4a002"
																	></path>
																	<g transform="translate(4890.311 -1111.861)">
																		<path
																			d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																			transform="translate(0 0)"
																			fill="#ffffff"
																		></path>
																	</g>
																</g>
															</svg>
														</span>
														<span className="block group-hover:hidden">
															<svg
																height="35"
																width="30.237"
																viewBox="0 0 30.237 35"
																xmlns="http://www.w3.org/2000/svg"
															>
																<g transform="translate(-4906.763 143)">
																	<path
																		d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																		transform="translate(4870 -143)"
																		fill="#ffffff"
																	></path>
																	<g transform="translate(4890.311 -1111.861)">
																		<path
																			d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																			transform="translate(0 0)"
																			fill="#ffffff"
																		></path>
																	</g>
																</g>
															</svg>
														</span>
													</button>
													<Image
														alt={item?.card?.image?.altText}
														src={item?.card?.image?.sourceUrl}
														width={item?.card?.image?.mediaDetails?.width}
														height={item?.card?.image?.mediaDetails?.height}
														className={
															item?.card?.image?.sourceUrl
																? `block group-hover:hidden w-full h-full object-cover object-center`
																: `hidden`
														}
													/>
												</div>
											</div>
										</Link>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default MainPrograms;
