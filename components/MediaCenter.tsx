// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IMediaCenter} from "@/types/components";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const mediaCenter: FC<IMediaCenter> = ({
	title,
	gallery,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div className={styles.mediaCenter + ` py-16 px-4 bg-lightGreyTwo`}>
				<div className="container px-0 mx-auto flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && paragraph
								? "max-w-2xl mx-auto flex flex-col items-center lg:items-baseline justify-center lg:max-w-5xl w-full xl:w-[35%]"
								: "hidden"
						}
					>
						<div className="max-w-2xl mx-auto lg:mx-0">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="font-PlusJakartaSans text-center lg:text-left text-paragraph text-green-two mb-4"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="leading-[3.5rem] max-w-2xl mx-auto mb-4 text-black text-center lg:text-left font-semibold text-4xl lg:text-5xl"
							>
								{title}
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mx-auto lg:mx-0 mb-4 text-center xl:text-left text-black text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "block mx-auto lg:mx-0" : "hidden"}
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
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
					</motion.div>
					<div className="w-full xl:w-[65%] grid grid-cols-2 gap-4 mt-4 lg:mt-0">
						{gallery?.length > 0 ? (
							gallery?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full"
									>
										<Image
											alt={`${item?.altText}`}
											src={item?.sourceUrl ? item?.sourceUrl : "/"}
											width={
												item?.mediaDetails?.width
													? item?.mediaDetails?.width
													: 1000
											}
											height={
												item?.mediaDetails?.height
													? item?.mediaDetails?.height
													: 1000
											}
											className={
												item?.sourceUrl
													? `block object-cover object-center w-full h-[175px]`
													: `hidden`
											}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default mediaCenter;
