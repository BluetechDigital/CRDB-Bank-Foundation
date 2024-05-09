// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ITestimonialsTwo} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import TestimonialsTwoCard from "./Cards/TestimonialsTwoCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div
				className={
					styles.testimonialsTwo +
					` bg-white overflow-hidden bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-lightgrey.svg")`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col xl:flex-row gap-6 xl:gap-4"
				>
					<div className="w-full xl:w-1/3 flex py-16 lg:py-12 px-4 xl:px-16 flex-col items-center xl:items-baseline justify-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 text-center text-paragraph text-black"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 max-w-2xl mx-auto xl:mx-0 mb-6 text-black text-center xl:text-left font-semibold leading-tight text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 lg:max-w-3xl mx-auto lg:mx-0 text-black leading-[1.75rem] text-paragraph text-center xl:text-left"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "block" : "hidden"}
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									buttonLink?.title
										? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-purple-default border-purple-default hover:bg-purple-three hover:border-purple-three transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-purple-default hover:before:bg-purple-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-purple-default hover:after:bg-purple-three`
										: `hidden`
								}
							>
								<span>{buttonLink?.title}</span>
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
						</Link>
					</div>
					<div className="w-full xl:w-2/3 py-8 px-4">
						<TestimonialsTwoCard />
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
