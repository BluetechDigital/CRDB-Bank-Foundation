// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IErrorPage} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ErrorPage: FC<IErrorPage> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<>
			<section
				className="h-[100vh] bg-cover bg-center bg-[no-repeat] flex flex-col justify-center items-center"
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgba(1, 35, 1, 0.75),
						rgba(1, 35, 1, 0.75)),
						url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="px-10 my-auto overflow-hidden py-44">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="container p-0 mx-auto"
					>
						<motion.h1
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-4 text-xl sm:text-5xl lg:text-7xl text-white text-center font-semibold leading-tight"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="mx-auto my-10 text-lg leading-relaxed text-center text-white md:max-w-md"
						/>
						<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
							<Link
								aria-label={`${buttonLink?.title}`}
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={buttonLink?.url ? "block" : "hidden"}
							>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										buttonLink?.title
											? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-green-two border-green-two hover:bg-green-three hover:border-green-three transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-green-two hover:before:bg-green-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-green-two hover:after:bg-green-three`
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
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
