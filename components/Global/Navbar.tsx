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
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import SubMegaMenuLinks from "../Elements/SubMegaMenuLinks";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [newsInsightsSublinksOpen, setNewsInsightsSublinksOpen]: any =
		useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourProgramsSublinksOpen, setOurProgramsSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hover green*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display About Us Sublinks
	const displayAboutUsSublinks = () => {
		setNewsInsightsSublinksOpen(false);
		setOurProgramsSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
	};

	// Hides or Display Our Programs Sublinks
	const displayOurServicesSublinks = () => {
		setAboutUsSublinksOpen(false);
		setNewsInsightsSublinksOpen(false);
		setOurProgramsSublinksOpen(!ourProgramsSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayNewsInsightsSublinks = () => {
		setAboutUsSublinksOpen(false);
		setOurProgramsSublinksOpen(false);
		setNewsInsightsSublinksOpen(!newsInsightsSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setAboutUsSublinksOpen(false);
		setNewsInsightsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setOurProgramsSublinksOpen(false);
	};

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed group bg-transparent hover:bg-white transition-all ease-in-out duration-500 ${
						scrollPosition > 50 || navBackgroundSublinksOpen
							? "bg-white border-t-4 border-green-two border-solid"
							: "bg-transparent"
					}`
				}
			>
				<div className="container mx-auto flex flex-row items-baseline sm:items-center justify-between py-3 px-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link
							href="/"
							target="_self"
							aria-label={`CRDB Bank Foundation Homepage Link`}
						>
							<Image
								priority
								width={500}
								height={500}
								alt="CRDB Bank Foundation Logo"
								src="/img/logos/crdb-foundation-logo.png"
								className={`${
									scrollPosition > 50 ? "block" : "hidden group-hover:block"
								} object-contain object-center w-full h-[50px]`}
							/>
							<Image
								priority
								width={500}
								height={500}
								alt="CRDB Bank Foundation Logo"
								src="/img/logos/crdb-foundation-logo.png"
								className={`${
									scrollPosition > 50 ? "hidden" : "block group-hover:hidden"
								} object-contain object-center w-full h-[50px]`}
							/>
						</Link>
					</motion.div>
					<div className="flex items-center gap-8">
						<motion.ul
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="hidden xl:flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map(
									(item: any, index: number) => (
										<Fragment key={index}>
											{item?.node?.url === "/about" ? (
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
													className="relative"
												>
													<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className={`${
																scrollPosition > 50
																	? "text-black"
																	: "text-white"
															} group-hover:text-black group-hover:hover:text-green-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
														>
															{item?.node?.label}
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															onClick={displayAboutUsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-white.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "hidden"
																	: "block"
															} group-hover:hidden cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
														<Image
															width={550}
															height={550}
															alt="Black Arrow Icon"
															onClick={displayAboutUsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-black.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "block"
																	: "hidden"
															} group-hover:block cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
													</span>
													<div
														onMouseLeave={resetNavbarStyling}
														className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center"
													>
														{aboutUsSublinksOpen ? (
															<>
																<ul
																	className={
																		styles.aboutUsSublinks +
																		" p-0 w-full flex flex-col z-[999]"
																	}
																>
																	{globalContext?.aboutUsSublinks?.length >
																	0 ? (
																		globalContext?.aboutUsSublinks?.map(
																			(item: any, index: number) => (
																				<Fragment key={index}>
																					<motion.li
																						custom={index}
																						initial={initial}
																						whileInView="animate"
																						viewport={{once: true}}
																						variants={arrayLoopStaggerChildren}
																					>
																						<Link
																							href={`${item?.node?.url}`}
																							target={`${
																								item?.node?.target
																									? item?.node?.target
																									: "_self"
																							}`}
																							aria-label={`${item?.node?.label}`}
																							className={` ${
																								aboutUsSublinksOpen
																									? "w-full hover:bg-green-two text-black hover:text-white"
																									: "text-black"
																							} block p-4 text-tiny`}
																						>
																							{item?.node?.label}
																						</Link>
																					</motion.li>
																				</Fragment>
																			)
																		)
																	) : (
																		<></>
																	)}
																</ul>
															</>
														) : null}
													</div>
												</motion.li>
											) : item?.node?.label === "Our Programs" ? (
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
													className="relative"
													onClick={displayOurServicesSublinks}
												>
													<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className={`${
																scrollPosition > 50
																	? "text-black"
																	: "text-white"
															} group-hover:text-black group-hover:hover:text-green-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
														>
															{item?.node?.label}
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															src="/svg/navigation-menu-dropdown-arrow-white.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "hidden"
																	: "block"
															} group-hover:hidden cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
														<Image
															width={550}
															height={550}
															alt="Black Arrow Icon"
															src="/svg/navigation-menu-dropdown-arrow-black.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "block"
																	: "hidden"
															} group-hover:block cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
													</div>
													{ourProgramsSublinksOpen ? (
														<>
															<div
																onMouseLeave={resetNavbarStyling}
																onMouseEnter={displayNavBackgroundColor}
															>
																<div className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center">
																	<ul
																		className={
																			styles.aboutUsSublinks +
																			" p-0 w-full flex flex-col z-[999]"
																		}
																	>
																		{globalContext?.ourProgramsLinks?.length >
																		0 ? (
																			globalContext?.ourProgramsLinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: true}}
																							variants={
																								arrayLoopStaggerChildren
																							}
																						>
																							<Link
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className={` ${
																									ourProgramsSublinksOpen
																										? "w-full hover:bg-green-two text-black hover:text-white"
																										: "text-black"
																								} block p-4 text-tiny`}
																							>
																								{item?.node?.label}
																							</Link>
																						</motion.li>
																					</Fragment>
																				)
																			)
																		) : (
																			<></>
																		)}
																	</ul>
																</div>
															</div>
														</>
													) : null}
												</motion.li>
											) : item?.node?.url === "/news" ? (
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
													className="relative"
												>
													<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className={`${
																scrollPosition > 50
																	? "text-black"
																	: "text-white"
															} group-hover:text-black group-hover:hover:text-green-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
														>
															{item?.node?.label}
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															onClick={displayNewsInsightsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-white.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "hidden"
																	: "block"
															} group-hover:hidden cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
														<Image
															width={550}
															height={550}
															alt="Black Arrow Icon"
															onClick={displayNewsInsightsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-black.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "block"
																	: "hidden"
															} group-hover:block cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
													</span>
													<div
														onMouseLeave={resetNavbarStyling}
														className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center"
													>
														{newsInsightsSublinksOpen ? (
															<>
																<ul
																	className={
																		styles.newsInsightsSublinks +
																		" p-0 w-full flex flex-col z-[999]"
																	}
																>
																	{globalContext?.newsInsightSublinks?.length >
																	0 ? (
																		globalContext?.newsInsightSublinks?.map(
																			(item: any, index: number) => (
																				<Fragment key={index}>
																					<motion.li
																						custom={index}
																						initial={initial}
																						whileInView="animate"
																						viewport={{once: true}}
																						variants={arrayLoopStaggerChildren}
																					>
																						<Link
																							href={`${item?.node?.url}`}
																							target={`${
																								item?.node?.target
																									? item?.node?.target
																									: "_self"
																							}`}
																							aria-label={`${item?.node?.label}`}
																							className={` ${
																								newsInsightsSublinksOpen
																									? "w-full hover:bg-green-two text-black hover:text-white"
																									: "text-black"
																							} block p-4 text-tiny`}
																						>
																							{item?.node?.label}
																						</Link>
																					</motion.li>
																				</Fragment>
																			)
																		)
																	) : (
																		<></>
																	)}
																</ul>
															</>
														) : null}
													</div>
												</motion.li>
											) : (
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
													className="hidden xl:block"
												>
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className={`${
															scrollPosition > 50 ? "text-black" : "text-white"
														} group-hover:text-black group-hover:hover:text-green-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
													>
														{item?.node?.label}
													</Link>
												</motion.li>
											)}
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<motion.div className="block xl:hidden">
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={menuActive ? styles.navToggleOpen : styles.navToggle}
						>
							<span aria-hidden="true"></span>
						</button>
						{/* Hidden Side Menu */}
						<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
