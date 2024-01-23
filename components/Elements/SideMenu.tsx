// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {ISideMenu} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import fadeInUp, {
	fadeIn,
	initial,
	stagger,
	initialTwo,
} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

const SideMenu: FC<ISideMenu> = ({menuActive}) => {
	const globalContext = useGlobalContext();

	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [newsInsightsSublinksOpen, setNewsInsightsSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	// Hides or Display About Us Sublinks
	const displayAboutUsSublinks = () => {
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
		setNewsInsightsSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	// Hides or Display Our Programs Sublinks
	const displayOurServicesSublinks = () => {
		setNewsInsightsSublinksOpen(false);
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayNewsInsightsSublinks = () => {
		setOurServicesSublinksOpen(false);
		setNewsInsightsSublinksOpen(!newsInsightsSublinksOpen);
	};

	return (
		<>
			<nav
				className={
					menuActive
						? `${styles.navReveal} ${styles.nav}`
						: `hidden ${styles.nav}`
				}
			>
				<div className="relative flex flex-col w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-white">
					<div className="flex flex-col items-center mb-8">
						<Link className="mr-auto text-3xl font-bold leading-none" href="/">
							<Image
								width={500}
								height={500}
								alt="CRDB Bank Foundation Logo"
								src="/img/logos/crdb-foundation-logo.png"
								className="object-contain object-center w-full h-[50px]"
							/>
						</Link>
					</div>
					<div className="flex flex-col px-4 mt-4">
						<motion.ul
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
						>
							{globalContext?.mobileLinks?.length > 0 ? (
								globalContext?.mobileLinks.map((item: any, keys: number) => (
									<Fragment key={keys}>
										{item?.node?.url === "/about" ? (
											<li
												onClick={displayAboutUsSublinks}
												className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
											>
												<div className="py-4 flex flex-row justify-between items-center gap-2">
													<Link
														href={`${item?.node?.url}`}
														className="text-pureBlack text-base font-semibold text-center tracking-[0.05rem] hover:text-green-Two transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{aboutUsSublinksOpen ? (
													<>
														<motion.ul
															initial={initialTwo}
															whileInView={stagger}
															viewport={{once: true}}
															className={
																styles.aboutUsSublinks +
																` flex flex-col my-4 z-[999]`
															}
														>
															{/* Menu Link*/}
															{globalContext?.aboutUsSublinks?.length > 0 ? (
																globalContext?.aboutUsSublinks?.map(
																	(item: any, keys: any) => (
																		<Fragment key={keys}>
																			<Link href={`${item?.node?.url}`}>
																				<li
																					className={`${
																						keys < 1
																							? "border-t-[1px] border-darkGrey border-opacity-50"
																							: "border-t-[0px]"
																					} hover:border-green-Two hover:bg-green-Two border-y-[1px] border-darkGrey border-opacity-50 text-pureBlack hover:text-white`}
																				>
																					<Link
																						href={`${item?.node?.url}`}
																						className="block p-4 text-base font-semibold"
																					>
																						{item?.node?.label}
																					</Link>
																				</li>
																			</Link>
																		</Fragment>
																	)
																)
															) : (
																<></>
															)}
														</motion.ul>
													</>
												) : null}
											</li>
										) : item?.node?.label === "Our Programs" ? (
											<li
												onClick={displayOurServicesSublinks}
												className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
											>
												<div className="py-4 flex flex-row justify-between items-center gap-2">
													<Link
														href={`${item?.node?.url}`}
														className="text-pureBlack text-base font-semibold text-center tracking-[0.05rem] hover:text-green-Two transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{ourServicesSublinksOpen ? (
													<>
														<motion.ul
															initial={initialTwo}
															whileInView={stagger}
															viewport={{once: true}}
															className={
																styles.ourProgramsLinks +
																` flex flex-col my-4 z-[999]`
															}
														>
															{/* Menu Link*/}
															{globalContext?.ourProgramsLinks?.length > 0 ? (
																globalContext?.ourProgramsLinks?.map(
																	(item: any, keys: any) => (
																		<Fragment key={keys}>
																			<Link href={`${item?.node?.url}`}>
																				<li
																					className={`${
																						keys < 1
																							? "border-t-[1px] border-darkGrey border-opacity-50"
																							: "border-t-[0px]"
																					} hover:border-green-Two hover:bg-green-Two border-y-[1px] border-darkGrey border-opacity-50 text-pureBlack hover:text-white`}
																				>
																					<Link
																						href={`${item?.node?.url}`}
																						className="block p-4 text-base font-semibold"
																					>
																						{item?.node?.label}
																					</Link>
																				</li>
																			</Link>
																		</Fragment>
																	)
																)
															) : (
																<></>
															)}
														</motion.ul>
													</>
												) : null}
											</li>
										) : item?.node?.url === "/news" ? (
											<li
												onClick={displayNewsInsightsSublinks}
												className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
											>
												<div className="py-4 flex flex-row justify-between items-center gap-2">
													<Link
														href={item?.node?.url}
														className="text-pureBlack text-base font-semibold text-center tracking-[0.05rem] hover:text-green-Two transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{newsInsightsSublinksOpen ? (
													<>
														<motion.ul
															initial={initialTwo}
															whileInView={stagger}
															viewport={{once: true}}
															className={
																styles.newsInsightsSublinks +
																` flex flex-col my-4 z-[999]`
															}
														>
															{/* Menu Link*/}
															{globalContext?.newsInsightSublinks?.length >
															0 ? (
																globalContext?.newsInsightSublinks?.map(
																	(item: any, keys: any) => (
																		<Fragment key={keys}>
																			<Link href={`${item?.node?.url}`}>
																				<li
																					className={`${
																						keys < 1
																							? "border-t-[1px] border-darkGrey border-opacity-50"
																							: "border-t-[0px]"
																					} hover:border-green-Two hover:bg-green-Two border-y-[1px] border-darkGrey border-opacity-50 text-pureBlack hover:text-white`}
																				>
																					<Link
																						href={`${item?.node?.url}`}
																						className="block p-4 text-base font-semibold"
																					>
																						{item?.node?.label}
																					</Link>
																				</li>
																			</Link>
																		</Fragment>
																	)
																)
															) : (
																<></>
															)}
														</motion.ul>
													</>
												) : null}
											</li>
										) : (
											<li className="border-b-[1px] border-yellow-dark border-opacity-50">
												<Link
													href={`${item?.node?.url}`}
													className="block py-4 text-base font-semibold text-pureBlack hover:text-green-Two"
												>
													{item?.node?.label}
												</Link>
											</li>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="mt-20">
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="flex flex-col items-center justify-between gap-4"
						>
							<h4 className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack">
								Contact Links
							</h4>
							<div className="flex items-center justify-center gap-4 text-center">
								<Link
									className={`${
										globalContext?.themesOptionsContent?.facebookLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}`}
									href={`${globalContext?.themesOptionsContent?.facebookLink}`}
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
									className={`${
										globalContext?.themesOptionsContent?.twitterLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}`}
									href={`${globalContext?.themesOptionsContent?.twitterLink}`}
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
									className={`${
										globalContext?.themesOptionsContent?.linkedinLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}`}
									href={`${globalContext?.themesOptionsContent?.linkedinLink}`}
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
									className={`${
										globalContext?.themesOptionsContent?.instagramLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}`}
									href={`${globalContext?.themesOptionsContent?.instagramLink}`}
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
							</div>
							<div className="flex flex-col sm:flex-row items-center justify-center w-auto gap-2 py-6 mb-10">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-Two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										className="font-medium text-base tracking-wide text-pureBlack hover:text-yellow-Two"
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-Two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										className="font-medium text-base tracking-wide text-pureBlack hover:text-yellow-Two"
										href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									>
										{globalContext?.themesOptionsContent?.emailTwo}
									</Link>
								</motion.div>
							</div>
						</motion.div>
					</div>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col items-center justify-center pb-8"
					>
						<h4 className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack">
							CRDB Bank
						</h4>
						<div className="flex flex-col items-center justify-center gap-4">
							<Link href="https://crdbbank.co.tz" target="_black">
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Marathon Logo Green"
											src="/img/logos/CRDB-bank-logo.svg"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Marathon Logo White"
											src="/img/logos/CRDB-bank-logo.svg"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>CRDB Bank</span>
								</motion.button>
							</Link>
							<Link href="https://www.crdbbankmarathon.co.tz" target="_black">
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Marathon Logo Green"
											src="/img/logos/CRDB-bank-marathon-logo-green.webp"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Marathon Logo White"
											src="/img/logos/CRDB-bank-marathon-logo-white.webp"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>Marathon</span>
								</motion.button>
							</Link>
							<Link
								href="https://crdbbank.co.tz/en/product/personal/Ways%20to%20Bank/26"
								target="_black"
							>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Simbanking Logo Green"
											src="/img/logos/CRDB-bank-simbanking.svg"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Simbanking Logo White"
											src="/img/logos/CRDB-bank-simbanking.svg"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>Simbanking</span>
								</motion.button>
							</Link>
							<Link
								href="https://crdbbank.co.tz/en/product/personal/Ways%20to%20Bank/25"
								target="_black"
							>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Internet Banking Logo Green"
											src="/img/logos/CRDB-bank-internet_banking.svg"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="CRDB Bank Internet Banking Logo White"
											src="/img/logos/CRDB-bank-internet_banking.svg"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>Internet Banking</span>
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default SideMenu;
