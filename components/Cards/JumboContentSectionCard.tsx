"use client";

// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {IJumboContentSectionCard} from "@/types/components/index";

// Styling
import styles from "../../styles/components/JumboContentSection.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const JumboContentSectionCard: FC<IJumboContentSectionCard> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	smallImage,
	imageLocation,
	backgroundDisplay,
}) => {
	let titleColor;
	let subtitleColor;
	let buttonColor;
	let borderImageColor;
	let paragraphColor;
	let backgroundColor;

	switch (backgroundDisplay) {
		case "White":
			titleColor = "text-black";
			subtitleColor = "text-green-two";
			buttonColor = "default";
			borderImageColor = "border-white";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			break;
		case "lightGrey":
			titleColor = "text-black";
			subtitleColor = "text-purple-default";
			buttonColor = "lightGrey";
			borderImageColor = "border-lightGrey";
			backgroundColor = "bg-lightGreyTwo";
			paragraphColor = "text-black";
			break;
		case "Purple":
			titleColor = "text-white";
			subtitleColor = "text-green-two";
			buttonColor = "white";
			borderImageColor = "border-purple-default";
			paragraphColor = "text-white";
			backgroundColor = "bg-purple-default";
			break;
		case "GreenFlat":
			titleColor = "text-white";
			subtitleColor = "text-white";
			buttonColor = "white";
			borderImageColor = "border-green-two";
			paragraphColor = "text-white";
			backgroundColor = "bg-green-flat";
			break;
		default:
			titleColor = "text-black";
			subtitleColor = "text-green-two";
			buttonColor = "default";
			borderImageColor = "border-white";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			break;
	}

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
					styles.jumboContentSectionCard +
					` relative pb-28 pt-10 lg:pb-32 lg:py-10 overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`
				}
				style={{
					clipPath: `${
						backgroundDisplay === "greenWave" ||
						backgroundDisplay === "lightGrey"
							? "polygon(0 0, 68% 0, 100% 0, 100% 99%, 25% 95%, 0 100%)"
							: "none"
					}`,
				}}
			>
				<div className="container relative px-0 mx-auto lg:px-4">
					<div
						className={
							imageLocation === "Left"
								? `flex flex-col-reverse items-center gap-6 lg:flex-row`
								: `flex flex-col items-center gap-6 lg:flex-row`
						}
					>
						<motion.div
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className={
								imageLocation === "Left"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								alt={`${image?.altText}`}
								src={image?.sourceUrl ? image?.sourceUrl : "/"}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 1000
								}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[300px] sm:h-[400px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							/>
							<Image
								alt={smallImage?.altText}
								src={smallImage?.sourceUrl}
								width={
									smallImage?.mediaDetails?.width
										? smallImage?.mediaDetails?.width
										: 1000
								}
								height={
									smallImage?.mediaDetails?.height
										? smallImage?.mediaDetails?.height
										: 1000
								}
								className={
									smallImage?.sourceUrl
										? `block sm:absolute top-[225px] lg:top-[275px] xl:top-[250px] left-[0px] mt-6 lg:ml-0 lg:left-[-50px] object-cover object-center w-full sm:w-[300px] lg:w-[375px] lg:h-[225px] border-none sm:border-solid border-[0.5rem] ${borderImageColor}`
										: `hidden`
								}
								style={{
									clipPath: `${
										isWindowBelow640
											? "polygon(0 0, 100% 0%, 100% 98%, 7% 95%)"
											: "none"
									}`,
								}}
							/>
						</motion.div>
						<motion.div
							initial={
								imageLocation === "Left"
									? slideInRightInitial
									: slideInLeftInitial
							}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0"
						>
							<div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 items-center lg:items-baseline">
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mb-1 text-center text-paragraph ${subtitleColor}`}
								>
									{subtitle}
								</motion.h4>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mt-2 text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl ${titleColor} lg:pr-8`}
								>
									{title}
								</motion.h2>
								<Paragraph
									content={paragraph}
									tailwindStyling={`w-full lg:max-w-2xl mx-auto py-6 ${paragraphColor} text-center lg:text-left text-paragraph`}
								/>
								<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
									<Link
										aria-label={`${buttonLink?.title}`}
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
									>
										<ButtonBorderSliced
											fullWidth={false}
											title={buttonLink?.title}
											tailwindColor={`${buttonColor}`}
										/>
									</Link>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className={
								imageLocation === "Right"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								alt={`${image?.altText}`}
								src={image?.sourceUrl ? image?.sourceUrl : "/"}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 1000
								}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[300px] sm:h-[400px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 100% 98%, 7% 95%)`,
								}}
							/>
							<Image
								alt={smallImage?.altText}
								src={smallImage?.sourceUrl}
								width={
									smallImage?.mediaDetails?.width
										? smallImage?.mediaDetails?.width
										: 1000
								}
								height={
									smallImage?.mediaDetails?.height
										? smallImage?.mediaDetails?.height
										: 1000
								}
								className={
									smallImage?.sourceUrl
										? `block sm:absolute top-[225px] lg:top-[275px] xl:top-[250px] right-[0px] mt-6 lg:ml-0 lg:right-[-50px] object-cover object-center w-full sm:w-[300px] lg:w-[375px] lg:h-[225px] border-none sm:border-solid border-[0.5rem] ${borderImageColor}`
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
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JumboContentSectionCard;
