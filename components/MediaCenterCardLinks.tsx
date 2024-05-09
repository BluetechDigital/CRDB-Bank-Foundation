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
import {IMediaCenterCardLinks} from "@/types/components";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const MediaCenterCardLinks: FC<IMediaCenterCardLinks> = ({
	title,
	subtitle,
	paragraph,
	cardOne,
	cardTwo,
	cardThree,
	cardFour,
}) => {
	return (
		<>
			<div className={styles.mediaCenter + ` py-16 px-4 bg-lightGreyTwo`}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="container px-0 mx-auto"
				>
					<div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
						<div className="flex flex-col gap-4 md:flex-row md:flex-wrap lg:w-[calc(66%-.5rem)]">
							<Link
								href={`${cardOne?.link?.url}`}
								target={cardOne?.link?.target}
								aria-label={`${cardOne?.link?.title}`}
								className="w-full md:w-[calc(50%-.5rem)]"
							>
								<figure>
									<Image
										alt={`${cardOne?.backgroundImage?.altText}`}
										src={cardOne?.backgroundImage?.sourceUrl}
										width={
											cardOne?.backgroundImage?.mediaDetails?.width
												? cardOne?.backgroundImage?.mediaDetails?.width
												: 500
										}
										height={
											cardOne?.backgroundImage?.mediaDetails?.height
												? cardOne?.backgroundImage?.mediaDetails?.height
												: 500
										}
										className={
											cardOne?.backgroundImage?.sourceUrl
												? `block group-hover:hidden object-cover object-center w-full h-[300px]`
												: `hidden`
										}
									/>
								</figure>

								<div className="bg-lightGreyTwo flex flex-col gap-4 p-5 xl:p-10">
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="font-extrabold text-black text-xl xl:text-2xl"
									>
										{cardOne?.title}
									</motion.h3>
									<Paragraph
										content={cardOne?.link?.title}
										tailwindStyling="font-semibold text-black text-paragraph"
									/>
								</div>
							</Link>
							<Link
								href={`${cardTwo?.link?.url}`}
								target={cardTwo?.link?.target}
								aria-label={`${cardTwo?.link?.title}`}
								className="w-full md:w-[calc(50%-.5rem)]"
							>
								<figure>
									<Image
										alt={`${cardOne?.backgroundImage?.altText}`}
										src={cardOne?.backgroundImage?.sourceUrl}
										width={
											cardOne?.backgroundImage?.mediaDetails?.width
												? cardOne?.backgroundImage?.mediaDetails?.width
												: 500
										}
										height={
											cardOne?.backgroundImage?.mediaDetails?.height
												? cardOne?.backgroundImage?.mediaDetails?.height
												: 500
										}
										className={
											cardOne?.backgroundImage?.sourceUrl
												? `block group-hover:hidden object-cover object-center w-full h-[300px]`
												: `hidden`
										}
									/>
								</figure>

								<div className="bg-lightGreyTwo flex flex-col gap-4 p-5 xl:p-10">
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="font-extrabold text-black text-xl xl:text-2xl"
									>
										{cardTwo?.title}
									</motion.h3>
									<Paragraph
										content={cardTwo?.link?.title}
										tailwindStyling="font-semibold text-black text-paragraph"
									/>
								</div>
							</Link>
							<Link
								href={`${cardThree?.link?.url}`}
								target={cardThree?.link?.target}
								aria-label={`${cardThree?.link?.title}`}
								className="w-full"
							>
								<div
									className="bg-black bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `url("${cardThree?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="h-full p-10 w-full min-h-[250px] lg:min-h-[350px] flex flex-col gap-4 items-baseline justify-end bg-black/25 hover:bg-black/75 bg-blend-multiply bg-center bg-cover bg-no-repeat transition-all duration-500 ease-in-out">
										<motion.h3
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="font-extrabold text-white text-xl xl:text-2xl"
										>
											{cardThree?.title}
										</motion.h3>
										<Paragraph
											content={cardThree?.link?.title}
											tailwindStyling="font-semibold text-white text-paragraph"
										/>
									</div>
								</div>
							</Link>
						</div>

						<div className="w-full lg:w-[calc(33%-.5rem)]">
							<Link
								href={`${cardFour?.link?.url}`}
								target={cardFour?.link?.target}
								aria-label={`${cardFour?.link?.title}`}
								className="w-full lg:h-full group"
							>
								<div
									className="relative lg:h-full bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `url("${cardFour?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<figure className="w-full lg:hidden">
										<Image
											alt={`${cardFour?.backgroundImage?.altText}`}
											src={cardFour?.backgroundImage?.sourceUrl}
											width={
												cardFour?.backgroundImage?.mediaDetails?.width
													? cardFour?.backgroundImage?.mediaDetails?.width
													: 500
											}
											height={
												cardFour?.backgroundImage?.mediaDetails?.height
													? cardFour?.backgroundImage?.mediaDetails?.height
													: 500
											}
											className={
												cardFour?.backgroundImage?.sourceUrl
													? `block group-hover:hidden object-cover object-center w-full h-[300px]`
													: `hidden`
											}
										/>
									</figure>

									<div className="bg-green-two inline-flex flex-col gap-4 p-10 w-full lg:absolute lg:bottom-0 lg:left-0 group-hover:bg-green-three transition-all duration-500 ease-in-out">
										<motion.h3
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="font-extrabold text-white text-xl xl:text-2xl"
										>
											{cardFour?.title}
										</motion.h3>
										<Paragraph
											content={cardFour?.link?.title}
											tailwindStyling="font-semibold text-white text-paragraph"
										/>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default MediaCenterCardLinks;
