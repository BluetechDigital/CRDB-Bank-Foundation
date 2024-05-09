"use client";

// Imports
import {
	fadeIn,
	initial,
	fadeInUp,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {IIndividualExecutiveMember} from "@/types/components";

// Styling
import styles from "../styles/components/IndividualExecutiveMember.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const IndividualExecutiveMember: FC<IIndividualExecutiveMember> = ({
	title,
	image,
	subtitle,
	imageTwo,
	paragraph,
	executiveName,
	executiveTitle,
	paragraphTitle,
	displayBackgroundIcon,
}) => {
	// Returns True if current window width is less than 640px
	const [isWindowBelow640, setIsWindowBelow640] = useState(
		typeof window !== "undefined" && window.innerWidth < 640
	);

	const updateWindowWidth = () => {
		setIsWindowBelow640(
			typeof window !== "undefined" && window.innerWidth < 640
		);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", updateWindowWidth);

			return () => {
				window.removeEventListener("resize", updateWindowWidth);
			};
		}
	}, []);

	return (
		<>
			<div
				className={
					styles.individualExecutiveMember +
					` relative pb-28 pt-10 lg:pb-32 xl:pb-44 lg:py-10 overflow-hidden bg-center bg-no-repeat bg-cover bg-white`
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
					clipPath: `polygon(0 0, 68% 0, 100% 0, 100% 99%, 25% 95%, 0 100%)`,
				}}
			>
				<div className="container relative px-0 mx-auto lg:px-4 flex flex-col gap-16 xl:gap-24">
					<div className="flex flex-col items-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 text-center text-paragraph text-green-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 lg:max-w-3xl mx-auto text-center font-semibold leading-tight text-4xl lg:text-5xl text-black"
						>
							{title}
						</motion.h2>
					</div>
					<div className="flex flex-col-reverse items-center lg:items-start gap-6 lg:flex-row">
						<motion.div
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className="relative w-full px-4 lg:w-1/2"
						>
							<Image
								alt={`${image?.altText}`}
								src={image?.sourceUrl ? image?.sourceUrl : "/"}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={
									image?.sourceUrl
										? `block object-contain object-center w-full h-[300px] sm:h-[400px] xl:h-[500px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							/>
							<div
								className="block xl:hidden xl:absolute z-50 xl:top-[400px] right-[0px] mt-6 lg:ml-0 xl:right-[50px] bg-white p-6"
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mt-2 text-center lg:text-left font-semibold leading-tight text-xl text-black lg:pr-8"
								>
									{executiveName}
								</motion.h2>
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-1 text-center lg:text-left text-paragraph text-green-two"
								>
									{executiveTitle}
								</motion.h4>
							</div>
							<Image
								alt={`${imageTwo?.altText}`}
								src={imageTwo?.sourceUrl}
								width={
									imageTwo?.mediaDetails?.width
										? imageTwo?.mediaDetails?.width
										: 500
								}
								height={
									imageTwo?.mediaDetails?.height
										? imageTwo?.mediaDetails?.height
										: 500
								}
								className={
									imageTwo?.sourceUrl
										? `block xl:absolute xl:bottom-[-400px] left-[0px] mt-6 lg:ml-0 lg:left-[-50px] object-cover object-center w-full h-[350px]`
										: `hidden`
								}
								style={{
									clipPath: `${
										isWindowBelow640
											? "polygon(0 0, 100% 0%, 95% 95%, 0 100%)"
											: "none"
									}`,
								}}
							/>
							<div
								className="hidden xl:block xl:absolute z-50 xl:top-[400px] right-[0px] mt-6 lg:ml-0 xl:right-[50px] bg-white p-6"
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mt-2 text-left font-semibold leading-tight text-xl text-black lg:pr-8"
								>
									{executiveName}
								</motion.h2>
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-1 text-left text-paragraph text-green-two"
								>
									{executiveTitle}
								</motion.h4>
							</div>
						</motion.div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0"
						>
							<div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 items-center lg:items-baseline">
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mt-2 text-center font-semibold leading-tight lg:text-left text-2xl lg:text-3xl text-black"
								>
									{paragraphTitle}
								</motion.h2>
								<Paragraph
									content={paragraph}
									tailwindStyling="w-full lg:max-w-2xl mx-auto py-6 text-black text-center lg:text-left text-paragraph"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IndividualExecutiveMember;
