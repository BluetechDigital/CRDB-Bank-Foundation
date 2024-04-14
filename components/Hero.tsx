// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IHero} from "@/types/components";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import HeroVideoWrapper from "./Elements/HeroVideoWrapper";

const Hero: FC<IHero> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	rightSideImage,
	backgroundImage,
	heroBackgroundColor,
}) => {
	let backgroundColor;

	switch (heroBackgroundColor) {
		case "Green":
			backgroundColor = "bg-green-three border-r-green-darker border-green-two";
			break;
		case "Purple":
			backgroundColor =
				"bg-purple-three border-r-purple-dark border-purple-two";
			break;
		default:
			backgroundColor = "bg-green-three border-r-green-darker border-green-two";
			break;
	}
	return (
		<>
			<div className={styles.hero + `relative p-0 overflow-hidden bg-white`}>
				<div
					className={`relative w-full h-[40vh] lg:h-[75vh] xl:h-[65vh] bg-center bg-no-repeat bg-cover pt-0 md:pt-0 lg:pt-60 xl:pt-44 2xl:pt-28 rounded-sm border-t-[75px] lg:border-t-[75px] border-b-[0px] border-r-none xl:border-r-[50px] 2xl:border-r-[107px] ${backgroundColor}`}
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
						backgroundImage: `url("${
							backgroundImage?.sourceUrl
								? backgroundImage?.sourceUrl
								: `/svg/background/stacked-waves-haikei-green.svg`
						}")`,
					}}
				/>
				<div
					className={`container mx-auto relative z-50 pb-10 mt-[90px] lg:mt-[-100px] xl:mt-[-40px] px-4 gap-8 lg:px-0 flex flex-col xl:flex-row`}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="w-full xl:w-1/2 p-0 relative flex flex-col items-center justify-center mt-[-125px]"
					>
						<div
							className="max-w-2xl lg:max-w-full px-6 py-10 bg-white rounded-sm sm:p-10 lg:border-t-none border-solid border-[5px] border-lightGrey"
							style={{
								boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
							}}
						>
							<motion.h1
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center xl:text-left tracking-normal leading-[2.75rem] sm:leading-[3rem] xl:leading-[3.5rem] font-semibold text-4xl sm:text-5xl xl:text-7xl"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="w-full xl:max-w-2xl mt-6 text-black text-center xl:text-left text-[1.110rem]"
							/>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col items-center justify-center gap-6 pt-8 xl:justify-start sm:flex-row xl:flex-col 2xl:flex-row"
							>
								<Link
									aria-label={`${buttonLink?.title}`}
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={buttonLink?.url ? "block" : "hidden"}
								>
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											buttonLink?.title
												? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-purple-two border-purple-two hover:bg-purple-three hover:border-purple-three transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-purple-two hover:before:bg-purple-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-purple-two hover:after:bg-purple-three`
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
								<Link
									aria-label={`${buttonLink?.title}`}
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									className={buttonLinkTwo?.url ? "block" : "hidden"}
								>
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											buttonLinkTwo?.title
												? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-green-two border-green-two hover:bg-green-three hover:border-green-three transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-green-two hover:before:bg-green-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-green-two hover:after:bg-green-three`
												: `hidden`
										}
									>
										<span>{buttonLinkTwo?.title}</span>
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
							</motion.div>
						</div>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`w-full xl:w-1/2 bg-cover bg-no-repeat bg-center relative mt-0 xl:mt-[-125px] ${
							displayVideo
								? `h-[375px] sm:h-[445px] lg:h-[450px] xl:h-[500px]`
								: `h-[300px] lg:h-[400px] xl:h-[450px]`
						}`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : rightSideImage?.sourceUrl
							}")`,
						}}
					>
						{displayVideo ? (
							<HeroVideoWrapper>{video}</HeroVideoWrapper>
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
