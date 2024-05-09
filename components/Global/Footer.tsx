// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [mediaCentersSublinksOpen, setMediaCentersSublinksOpen]: any =
		useState(false);
	const [careersSublinksOpen, setCareersSublinksOpen]: any = useState(false);

	// Hides or Display About Us Sublinks
	const displayAboutUsSublinks = () => {
		setCareersSublinksOpen(false);
		setMediaCentersSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
	};

	// Hides or Display Careers Sublinks
	const displayCareersSublinks = () => {
		setAboutUsSublinksOpen(false);
		setMediaCentersSublinksOpen(false);
		setCareersSublinksOpen(!careersSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayMediaCentersSublinks = () => {
		setAboutUsSublinksOpen(false);
		setCareersSublinksOpen(false);
		setMediaCentersSublinksOpen(!mediaCentersSublinksOpen);
	};

	return (
		<footer
			className={
				styles.footer +
				" px-0 overflow-hidden border-t-4 bg-lightGreyTwo border-green-two"
			}
		>
			<div className="container relative z-50 px-4 mx-auto ">
				<div className="pt-28 pb-20 flex flex-col items-center justify-between gap-6 px-4 -m-6 md:items-start lg:px-8 lg:flex-row">
					<div className="flex flex-col items-center justify-between w-full lg:w-[35%] py-6 md:py-0 lg:items-start">
						<div className="mb-10">
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
									className="object-contain object-center w-full h-[85px]"
								/>
							</Link>
						</div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<Paragraph
								content={globalContext?.themesOptionsContent?.textarea}
								tailwindStyling="block px-4 lg:px-0 max-w-full lg:max-w-sm text-base text-black text-center lg:text-left"
							/>
						</motion.div>
						<div className="flex flex-col items-center justify-between w-auto gap-2 py-6 mb-10 lg:items-baseline">
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
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									className="font-medium text-base tracking-wide text-black hover:text-green-two"
									target="_self"
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									aria-label={`${globalContext?.themesOptionsContent?.email}`}
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
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									className="font-medium text-base tracking-wide text-black hover:text-green-two"
									target="_self"
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									aria-label={`${globalContext?.themesOptionsContent?.emailTwo}`}
								>
									{globalContext?.themesOptionsContent?.emailTwo}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.phoneNumber
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-1">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</div>
								<Link
									className="font-medium text-base tracking-wide text-black hover:text-green-two"
									target="_self"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumber}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.phoneNumberTwo
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-1">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</div>
								<Link
									className="font-medium text-base tracking-wide text-black hover:text-green-two"
									target="_self"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumberTwo}
								</Link>
							</motion.div>
						</div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							variants={stagger}
							whileInView="animate"
							className={
								styles.socialLinks +
								" flex items-center justify-start gap-6 text-center"
							}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.facebookLink
										? "block"
										: "hidden"
								}`}
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
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.twitterLink
										? "block"
										: "hidden"
								}`}
							>
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
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.linkedinLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-green"
									href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
									aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink.title}`}
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
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.instagramLink
										? "block"
										: "hidden"
								}`}
							>
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
					<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-8 lg:mt-0 w-full lg:w-[65%] gap-6">
						<div className="flex flex-col col-span-1 px-0">
							<h4 className="mb-5 text-paragraph font-semibold tracking-normal text-center text-black uppercase lg:text-left">
								Company Info
							</h4>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col items-center justify-center gap-2 py-6 lg:items-baseline"
							>
								{globalContext?.footerMenuLinks?.length > 0 ? (
									globalContext?.footerMenuLinks?.map(
										(item: any, index: number) => (
											<Fragment key={index}>
												{item?.node?.url === "/about" ? (
													<motion.li
														className="px-0"
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
													>
														<span className="flex flex-row justify-center items-center lg:justify-start gap-2 cursor-pointer">
															<Link
																href={`${item?.node?.url}`}
																target={`${
																	item?.node?.target
																		? item?.node?.target
																		: "_self"
																}`}
																aria-label={`${item?.node?.label}`}
																className="text-black group-hover:text-black group-hover:hover:text-green-two text-base text-center lg:text-left transition-all ease-in-out duration-500"
															>
																{item?.node?.label}
															</Link>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayAboutUsSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	aboutUsSublinksOpen
																		? "hidden"
																		: "block cursor-pointer w-[22px] h-[22px] object-contain object-center"
																}
															/>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayAboutUsSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	aboutUsSublinksOpen
																		? "block rotate-180 cursor-pointer w-[22px] h-[22px] object-contain object-center"
																		: "hidden"
																}
															/>
														</span>
														<div>
															{aboutUsSublinksOpen ? (
																<>
																	<ul
																		className={
																			styles.aboutUsSublinks +
																			" p-0 w-full flex flex-col gap-2 py-4 z-[999] items-center lg:items-start  ml-2 my-2 border-l-2 border-solid border-green-two"
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
																								className="w-full ml-2 text-black text-base text-center lg:text-left hover:text-green-three hover:border-b-2 hover:border-solid hover:border-green-dark"
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
												) : item?.node?.url === "/media-center" ? (
													<motion.li
														className="px-0"
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
													>
														<span className="flex flex-row justify-center items-center lg:justify-start gap-2 cursor-pointer">
															<Link
																href={`${item?.node?.url}`}
																target={`${
																	item?.node?.target
																		? item?.node?.target
																		: "_self"
																}`}
																aria-label={`${item?.node?.label}`}
																className="text-black group-hover:text-black group-hover:hover:text-green-two text-base text-center lg:text-left transition-all ease-in-out duration-500"
															>
																{item?.node?.label}
															</Link>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayMediaCentersSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	mediaCentersSublinksOpen
																		? "hidden"
																		: "block cursor-pointer w-[22px] h-[22px] object-contain object-center"
																}
															/>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayMediaCentersSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	mediaCentersSublinksOpen
																		? "block rotate-180 cursor-pointer w-[22px] h-[22px] object-contain object-center"
																		: "hidden"
																}
															/>
														</span>
														<div>
															{mediaCentersSublinksOpen ? (
																<>
																	<ul
																		className={
																			styles.newsInsightsSublinks +
																			" p-0 w-full flex flex-col gap-2 py-4 z-[999] items-center lg:items-start ml-2 my-2 border-l-2 border-solid border-green-two"
																		}
																	>
																		{globalContext?.mediaCentersSublinks
																			?.length > 0 ? (
																			globalContext?.mediaCentersSublinks?.map(
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
																								className="w-full ml-2 text-black text-base text-center lg:text-left hover:text-green-three hover:border-b-2 hover:border-solid hover:border-green-dark"
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
												) : item?.node?.url === "/careers" ? (
													<motion.li
														className="px-0"
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
													>
														<span className="flex flex-row justify-center items-center lg:justify-start gap-2 cursor-pointer">
															<Link
																href={`${item?.node?.url}`}
																target={`${
																	item?.node?.target
																		? item?.node?.target
																		: "_self"
																}`}
																aria-label={`${item?.node?.label}`}
																className="text-black group-hover:text-black group-hover:hover:text-green-two text-base text-center lg:text-left transition-all ease-in-out duration-500"
															>
																{item?.node?.label}
															</Link>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayCareersSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	careersSublinksOpen
																		? "hidden"
																		: "block cursor-pointer w-[22px] h-[22px] object-contain object-center"
																}
															/>
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																onClick={displayCareersSublinks}
																src="/svg/navigation-menu-dropdown-arrow-black.svg"
																className={
																	careersSublinksOpen
																		? "block rotate-180 cursor-pointer w-[22px] h-[22px] object-contain object-center"
																		: "hidden"
																}
															/>
														</span>
														<div>
															{careersSublinksOpen ? (
																<>
																	<ul
																		className={
																			styles.careersSublinks +
																			" p-0 w-full flex flex-col gap-2 py-4 z-[999] items-center lg:items-start ml-2 my-2 border-l-2 border-solid border-green-two"
																		}
																	>
																		{globalContext?.careerSublinks?.length >
																		0 ? (
																			globalContext?.careerSublinks?.map(
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
																								className="w-full ml-2 text-black text-base text-center lg:text-left hover:text-green-three hover:border-b-2 hover:border-solid hover:border-green-dark"
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
														className="px-0"
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
															className="text-black text-base text-center lg:text-left hover:text-green-two"
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
						<div className="flex flex-col col-span-1 px-0">
							<h4 className="mb-5 text-paragraph font-semibold tracking-normal text-center text-black uppercase lg:text-left">
								Our Programs
							</h4>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col items-center justify-center gap-2 py-6 lg:items-baseline"
							>
								{globalContext?.ourProgramsLinks?.length > 0 ? (
									globalContext?.ourProgramsLinks?.map(
										(item: any, index: number) => (
											<Fragment key={index}>
												<motion.li
													className="px-0"
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className="text-black text-base text-center lg:text-left hover:text-green-two"
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
							</motion.ul>
						</div>
						<div className="xl:ml-16 flex flex-col sm:col-span-2 xl:col-span-1 gap-4 sm:gap-0 items-center justify-center lg:justify-between">
							<h4 className="mb-5 text-paragraph font-semibold tracking-normal text-center text-black uppercase md:text-left">
								CRDB BANK
							</h4>
							<div className="flex flex-col sm:flex-row items-start justify-start gap-4">
								<Link
									target="_self"
									href="https://crdbbank.co.tz"
									aria-label={`CRDB Bank Website Link`}
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" block group w-[200px] h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Logo Green"
												src="/img/logos/CRDB-bank-logo.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Logo White"
												src="/img/logos/crdb-logo-white.png"
												className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span>Tanzania</span>
									</motion.button>
								</Link>
								<Link
									target="_self"
									aria-label={`Marathon Website Link`}
									href="https://www.crdbbankmarathon.co.tz"
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" block group w-[200px] h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-two"
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
							</div>
							<div className="flex flex-col sm:flex-row items-start justify-start gap-4">
								<Link
									target="_self"
									aria-label={`Burundi Website Link`}
									href="https://crdbbank.co.bi/en/"
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" block group w-[200px] h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Logo Green"
												src="/img/logos/CRDB-bank-logo.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Logo White"
												src="/img/logos/crdb-logo-white.png"
												className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span>Burundi</span>
									</motion.button>
								</Link>
								<Link
									target="_self"
									aria-label={`Media Center Website Link`}
									href="https://crdb-bank-foundation.vercel.app/media-center"
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" block group w-[200px] h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-lightGrey after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGrey hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Media Center Logo Green"
												src="/img/logos/CRDB-bank-logo.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Media Center Logo White"
												src="/img/logos/crdb-logo-white.png"
												className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span>Media Center</span>
									</motion.button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-purple-default" />
				<div className="py-6 flex flex-col-reverse items-center justify-between m-0 lg:-m-6 lg:flex-row">
					<motion.div
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={fadeIn}
						className="flex flex-col gap-2 w-auto p-6"
					>
						<Paragraph
							content={globalContext?.themesOptionsContent?.copyrightText}
							tailwindStyling="max-w-lg mx-0 text-black text-sm text-center lg:text-left"
						/>
						<Link
							target="_blank"
							href={`https://bluetech-digital.co.uk`}
							aria-label={`Bluetech-Digital Homepage Link`}
							className="inline-block px-1 text-black hover:text-purple-default hover:underline"
						>
							<span className="flex items-center justify-center lg:justify-left gap-2">
								<Image
									priority
									width={500}
									height={500}
									alt="BluetechDigital Logo"
									src="/img/logos/BluetechDigital-Logo-color.png"
									className="object-contain object-center w-[25px] h-[25px]"
								/>
								<Paragraph
									content={`Website by BluetechDigital`}
									tailwindStyling="w-fit lg:w-full text-sm text-center lg:text-left"
								/>
							</span>
						</Link>
					</motion.div>
					<motion.ul
						initial={initial}
						viewport={{once: true}}
						variants={stagger}
						whileInView="animate"
						className="flex flex-col sm:flex-row -m-6 w-auto gap-4 sm:gap-6 p-6"
					>
						{globalContext?.copyrightLinks?.length > 0 ? (
							globalContext?.copyrightLinks?.map((item: any, index: number) => (
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
												item?.node?.target ? item?.node?.target : "_self"
											}`}
											aria-label={`${item?.node?.label}`}
											className="text-black transition-all duration-200 ease-in-out text-base lg:text-sm hover:text-green-two"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
