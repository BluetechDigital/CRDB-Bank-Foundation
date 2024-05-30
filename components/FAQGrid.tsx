// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IFAQGrid} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";

const FAQGrid: FC<IFAQGrid> = ({title, faqGrid, paragraph, highlightText}) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	const handleButtonClick = (index: any) => {
		setSelectedItemIndex(index);
	};
	return (
		<>
			<div
				className="relative py-16 px-4 bg-white bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
					<div className="flex flex-col items-center">
						<motion.h3
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
						>
							{title}
							<span
								className={
									highlightText ? "p-2 ml-3 bg-green-two text-white" : "hidden"
								}
							>
								{highlightText}
							</span>
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</div>
					<div className="w-full relative py-0 lg:py-12 overflow-hidden">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="max-w-[90rem] mx-auto flex flex-col lg:flex-row -mb-8"
						>
							<div className="w-full lg:w-1/3 py-8 px-4 mb-15 lg:mb-0">
								<div className="max-w-xl mx-auto lg:mx-0 flex flex-wrap lg:flex-col lg:max-w-xl border-b lg:border-b-0 lg:border-r-2 border-blue-default">
									<div className="w-full lg:w-full px-2 mb-15">
										<motion.h2
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-black text-center sm:text-left font-extrabold text-lg lg:text-xl mb-9"
										>
											Getting Started
										</motion.h2>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className="flex flex-col items-baseline justify-center"
										>
											{faqGrid?.length > 0 ? (
												faqGrid?.map((item: any, index: number) => (
													<Fragment key={index}>
														<motion.li
															custom={index}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="mb-6 lg:pr-6"
														>
															<button
																onClick={() => handleButtonClick(index)}
																className={`flex items-center justify-center text-tiny font-semibold hover:text-green-default ${
																	selectedItemIndex === index
																		? "text-yellow-default"
																		: "text-black"
																}`}
															>
																<span>
																	<svg
																		fill="#43b02a"
																		className="w-7 h-7 mr-2"
																		viewBox="0 0 24 24"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<g
																			id="SVGRepo_bgCarrier"
																			strokeWidth="0"
																		></g>
																		<g
																			id="SVGRepo_tracerCarrier"
																			strokeLinecap="round"
																			strokeLinejoin="round"
																		></g>
																		<g id="SVGRepo_iconCarrier">
																			<path d="M3 5h18v1H3zm0 8h18v-1H3zm0 7h18v-1H3z"></path>
																			<path
																				fill="none"
																				d="M0 0h24v24H0z"
																			></path>
																		</g>
																	</svg>
																</span>
																<span className="ml-3 text-left">
																	{item?.card?.title}
																</span>
															</button>
														</motion.li>
													</Fragment>
												))
											) : (
												<></>
											)}
										</motion.ul>
									</div>
								</div>
							</div>
							<div className="w-full lg:w-2/3 px-4">
								<div className="max-w-xl xl:max-w-3xl mx-auto py-8 lg:py-0 lg:mr-0">
									{selectedItemIndex !== null && (
										<>
											<motion.h2
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="text-black text-center sm:text-left font-extrabold text-lg lg:text-xl mb-6"
											>
												{faqGrid[selectedItemIndex]?.card?.title}
											</motion.h2>
											<Paragraph
												content={faqGrid[selectedItemIndex]?.card?.paragraph}
												tailwindStyling=" text-black text-base text-left"
											/>
										</>
									)}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQGrid;
