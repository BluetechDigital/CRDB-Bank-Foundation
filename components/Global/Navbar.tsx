// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

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
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
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
		setOurServicesSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
	};

	// Hides or Display Our Programs Sublinks
	const displayOurServicesSublinks = () => {
		setAboutUsSublinksOpen(false);
		setNewsInsightsSublinksOpen(false);
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayNewsInsightsSublinks = () => {
		setAboutUsSublinksOpen(false);
		setOurServicesSublinksOpen(false);
		setNewsInsightsSublinksOpen(!newsInsightsSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setAboutUsSublinksOpen(false);
		setNewsInsightsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed group bg-transparent hover:bg-white transition-all ease-in-out duration-500 ${
						scrollPosition > 50 || navBackgroundSublinksOpen
							? "bg-white"
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
						<Link href="/">
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
							whileInView={stagger}
							viewport={{once: true}}
							className="hidden xl:flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										{item?.node?.url === "/about" ? (
											<li className="relative">
												<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href={`${item?.node?.url}`}
														className={`${
															scrollPosition > 50
																? "text-pureBlack"
																: "text-white"
														} group-hover:text-pureBlack group-hover:hover:text-green-Two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
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
																{globalContext?.aboutUsSublinks?.length > 0 ? (
																	globalContext?.aboutUsSublinks?.map(
																		(item: any, keys: any) => (
																			<Fragment key={keys}>
																				<Link href={`${item?.node?.url}`}>
																					<li className="w-full hover:bg-green-Two">
																						<Link
																							href={`${item?.node?.url}`}
																							className={` ${
																								aboutUsSublinksOpen
																									? "text-black hover:text-white"
																									: "text-black"
																							} block p-4 text-tiny`}
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
															</ul>
														</>
													) : null}
												</div>
											</li>
										) : item?.node?.label === "Our Programs" ? (
											<li
												className="relative"
												onClick={displayOurServicesSublinks}
											>
												<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href={`${item?.node?.url}`}
														className={`${
															scrollPosition > 50
																? "text-pureBlack"
																: "text-white"
														} group-hover:text-pureBlack group-hover:hover:text-green-Two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
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
												{ourServicesSublinksOpen ? (
													<>
														<div
															onMouseLeave={resetNavbarStyling}
															onMouseEnter={displayNavBackgroundColor}
														>
															<SubMegaMenuLinks />
														</div>
													</>
												) : null}
											</li>
										) : item?.node?.url === "/news" ? (
											<li className="relative">
												<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href={`${item?.node?.url}`}
														className={`${
															scrollPosition > 50
																? "text-pureBlack"
																: "text-white"
														} group-hover:text-pureBlack group-hover:hover:text-green-Two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
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
																		(item: any, keys: any) => (
																			<Fragment key={keys}>
																				<Link href={`${item?.node?.url}`}>
																					<li className="w-full hover:bg-green-Two">
																						<Link
																							href={`${item?.node?.url}`}
																							className={` ${
																								newsInsightsSublinksOpen
																									? "text-black hover:text-white"
																									: "text-black"
																							} block p-4 text-tiny`}
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
															</ul>
														</>
													) : null}
												</div>
											</li>
										) : (
											<li className="hidden xl:block">
												<Link
													href={`${item?.node?.url}`}
													className={`${
														scrollPosition > 50
															? "text-pureBlack"
															: "text-white"
													} group-hover:text-pureBlack group-hover:hover:text-green-Two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
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
						<SideMenu menuActive={menuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
