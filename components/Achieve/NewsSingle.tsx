// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INewsSingle} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";
import NewsletterElement from "../Elements/NewsletterElement";
import NewsLatestArticles from "../Elements/NewsLatestArticles";

const NewsSingle: FC<INewsSingle> = ({
	title,
	readTime,
	paragraph,
	articleType,
	boldParagraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="flex flex-col gap-4">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col lg:flex-row gap-4 lg:gap-12 py-10 container px-4 lg:px-0 mx-auto"
				>
					<div className="w-full lg:w-8/12 mb-6 lg:mb-0">
						<div>
							<motion.h2
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="text-center lg:text-left text-3xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:max-w-3xl mx-auto lg:mx-0 leading-snug"
							>
								{title}
							</motion.h2>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex items-center justify-between flex-col md:flex-row gap-8 md:gap-4 mb-12"
							>
								<div className="flex items-center gap-4 flex-col sm:flex-row">
									<Image
										width={500}
										height={500}
										alt="CRDB Bank Foundation Logo"
										src="/img/logos/CRDB-bank-logo-circle.jpg"
										className="object-center object-cover w-20 h-20"
									/>
									<div className="flex flex-col gap-2">
										<motion.h4
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className="text-lg font-semibold"
										>
											CRDB Bank Foundation
										</motion.h4>
										<div className="flex mb-4 items-center">
											<motion.span
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="inline-flex items-center h-7 px-3 text-xs text-white font-medium bg-green-three bg-opacity-60 rounded-full"
											>
												{articleType}
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
												className="text-tiny text-darkGrey"
											>
												{readTime}
											</motion.span>
										</div>
									</div>
								</div>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex items-center gap-4 flex-wrap lg:gap-8"
								>
									<Link
										className="inline-block text-green"
										href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
										aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
										target={
											globalContext?.themesOptionsContent?.facebookLink?.target
										}
									>
										<svg
											height="100%"
											className="w-5 h-5"
											style={{
												fill: "#00ab00",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											width="100%"
										>
											<path
												d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
									<Link
										className="inline-block text-green"
										href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
										aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
										target={
											globalContext?.themesOptionsContent?.twitterLink?.target
										}
									>
										<svg
											height="100%"
											className="w-5 h-5"
											style={{
												fill: "#00ab00",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											width="100%"
										>
											<path
												d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
									<Link
										className="inline-block text-green"
										href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
										aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink?.title}`}
										target={
											globalContext?.themesOptionsContent?.linkedinLink?.target
										}
									>
										<svg
											height="100%"
											style={{
												fill: "#00ab00",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											className="w-5 h-5"
											width="100%"
										>
											<path
												d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
									<Link
										className="inline-block text-green"
										href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
										aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
										target={
											globalContext?.themesOptionsContent?.instagramLink?.target
										}
									>
										<svg
											fill="#00ab00"
											height="800px"
											width="800px"
											version="1.1"
											id="Layer_1"
											className="w-[22.5px] h-[22.5px]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 455.73 455.73"
										>
											<path
												d="M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
	C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
	c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
	c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
	C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
	c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
	s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
	c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66
	H152.37c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
	C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
	c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
	s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
	c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M0,0v455.73h455.73
	V0H0z M380.23,303.36c0,42.39-34.48,76.87-76.87,76.87H152.37c-42.39,0-76.87-34.48-76.87-76.87V152.37
	c0-42.39,34.48-76.87,76.87-76.87h150.99c42.39,0,76.87,34.48,76.87,76.87V303.36z M303.36,108.66H152.37
	c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
	C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
	c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
	s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
	c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55
	c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
	C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
	c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
	c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
	C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
	c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
	s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
	c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55
	c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
	C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
	c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
	c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
	C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
	c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
	s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
	c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z"
											/>
										</svg>
									</Link>
								</motion.div>
							</motion.div>
						</div>
						<article>
							<Paragraph
								content={boldParagraph}
								tailwindStyling="lg:max-w-4xl mx-auto lg:mx-0 text-left text-black text-paragraph font-semibold"
							/>
							<Paragraph
								content={paragraph}
								tailwindStyling="lg:max-w-4xl mx-auto lg:mx-0 text-left text-black text-paragraph"
							/>
						</article>
					</div>
					<div className="w-full lg:w-4/12 flex flex-col gap-4 lg:gap-10">
						<NewsletterElement />
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
											<NewsLatestArticles
												slug={item?.node?.slug}
												date={item?.node?.date}
												articleType={articleType}
												title={item?.node?.title}
												excerpt={item?.node?.excerpt}
												featuredImage={item?.node?.featuredImage}
											/>
										</Fragment>
									))
							) : (
								<></>
							)}
						</div>
					</div>
				</motion.div>
				<div className="flex flex-col gap-4 container px-4 lg:px-0 mx-auto">
					<div className="px-6 py-4 flex items-center flex-wrap gap-2 bg-darker border border-grey mb-12">
						<span className="text-darkGrey text-base">
							Interested in more topics like this?
						</span>
						<Link
							target="_self"
							href="#NewsletterElement"
							aria-label={`Newsletter Subscribe Button`}
							className="flex items-center flex-wrap gap-2 text-green-two hover:text-green-dark transition duration-200 font-bold"
						>
							<span>Subscribe to our newsletter</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
							>
								<path
									d="M4.99984 10.6667H15.4165M15.4165 10.6667L10.4165 5.66675M15.4165 10.6667L10.4165 15.6667"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsSingle;
