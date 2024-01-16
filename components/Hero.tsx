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
import VideoWrapper from "./Elements/VideoWrapper";

const Hero: FC<IHero> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	rightSideImage,
	backgroundImage,
}) => {
	return (
		<div className={styles.hero + `relative p-0 overflow-hidden bg-white`}>
			<div
				className="relative w-full h-[65vh] lg:h-[75vh] xl:h-[65vh] bg-green-Three bg-center bg-no-repeat bg-cover pt-0 md:pt-0 lg:pt-60 xl:pt-44 2xl:pt-28 rounded-sm border-t-[75px] lg:border-t-[75px] border-b-[0px] border-r-none xl:border-r-[50px] 2xl:border-r-[107px] border-r-green-darker border-green-Two"
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
				className={`block container mx-auto relative z-50 pb-10 mt-[-195px] sm:mt-[-125px] lg:mt-[-100px] px-4 gap-8 lg:px-0 flex flex-col lg:flex-row`}
			>
				<motion.div
					viewport={{once: true}}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
					className="w-full lg:w-1/2 p-0 relative mt-[-125px]"
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
							className="text-center lg:text-left tracking-normal leading-normal sm:leading-[3.5rem] font-semibold text-2xl sm:text-6xl lg:text-7xl"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mt-6 text-black text-center lg:text-left text-[1.110rem]"
						/>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center gap-6 pt-8 lg:justify-start sm:flex-row"
						>
							<Link
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
											? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid border-purple-default hover:bg-yellow-default hover:border-yellow-default transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-yellow-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-yellow-default`
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
							</Link>
							<Link
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
											? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-green-Two border-green-Two hover:bg-green-Three hover:border-green-Three transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-green-Two hover:before:bg-green-Three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-green-Two hover:after:bg-green-Three`
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
													fill="#f6ad37"
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
					className={`w-full lg:w-1/2 bg-cover bg-no-repeat bg-center relative mt-0 lg:mt-[-125px] ${
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
					{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
