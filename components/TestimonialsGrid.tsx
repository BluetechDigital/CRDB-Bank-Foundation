"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import {FC, Fragment, useState} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import TestimonialsCard from "./Cards/TestimonialsCard";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
	highlightText,
}) => {
	const globalContext = useGlobalContext();

	const itemsPerPage: number = 12;
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentImages = globalContext?.testimonials.slice(startIndex, endIndex);

	const totalPages = Math.ceil(
		globalContext?.testimonials.length / itemsPerPage
	);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-16 lg:py-28 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
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
							className="max-w-none lg:max-w-3xl mx-auto text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
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
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="grid px-4 lg:px-16 lg:-m-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
					>
						{currentImages.length > 0 ? (
							currentImages.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<TestimonialsCard
										name={item?.node?.testimonialReview?.name}
										image={item?.node?.testimonialReview?.image}
										jobTitle={item?.node?.testimonialReview?.jobTitle}
										paragraph={item?.node?.testimonialReview?.paragraph}
									/>
								</Fragment>
							))
						) : (
							<>
								<div
									className="bg-green-darkTwo"
									style={{
										boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
									}}
								>
									<motion.div
										initial={initial}
										whileInView={stagger}
										viewport={{once: true}}
										className="flex flex-col gap-4 p-10"
									>
										<motion.h2
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="mb-2 text-center text-lg leading-tight tracking-[0.05rem] uppercase font-extrabold text-white transition-all ease-in-out duration-200 hover:text-white"
										>
											Oops Sorry!
										</motion.h2>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
										>
											<Paragraph
												content="No testimonials to display"
												tailwindStyling="px-0 text-base text-white"
											/>
										</motion.div>
									</motion.div>
								</div>
							</>
						)}
					</motion.div>
					<div>
						{totalPages > 1 && globalContext?.testimonials?.length > 0 ? (
							<>
								<div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										onClick={handlePrevPage}
										disabled={currentPage === 1}
										className="flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-2 font-semibold tracking-widest text-tiny w-fit border-2 border-solid border-green-two hover:bg-green-three hover:border-green-three transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-green-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-three"
									>
										<span className="hidden group-hover:block">
											<svg
												height="35"
												width="30.237"
												viewBox="0 0 30.237 35"
												xmlns="http://www.w3.org/2000/svg"
												className="rotate-180"
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
										<span className="block group-hover:hidden">
											<svg
												height="35"
												width="30.237"
												className="rotate-180"
												viewBox="0 0 30.237 35"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g transform="translate(-4906.763 143)">
													<path
														d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
														transform="translate(4870 -143)"
														fill="#f6ad37"
													></path>
													<g transform="translate(4890.311 -1111.861)">
														<path
															d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
															transform="translate(0 0)"
															fill="#000"
														></path>
													</g>
												</g>
											</svg>
										</span>
										<span>Previous</span>
									</motion.button>
									<span className="text-center text-tiny font-semibold leading-tight text-black">{`Page ${currentPage} of ${totalPages}`}</span>
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										onClick={handleNextPage}
										disabled={currentPage === totalPages}
										className="flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-2 font-semibold tracking-widest text-tiny w-fit border-2 border-solid border-green-two hover:bg-green-three hover:border-green-three transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-green-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-three"
									>
										<span>Next</span>
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
														fill="#f6ad37"
													></path>
													<g transform="translate(4890.311 -1111.861)">
														<path
															d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
															transform="translate(0 0)"
															fill="#000"
														></path>
													</g>
												</g>
											</svg>
										</span>
									</motion.button>
								</div>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
