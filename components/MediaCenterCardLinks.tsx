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
								className={
									cardOne?.link?.url
										? "flex mt-6 xl:mt-0 items-center justify-center xl:justify-start"
										: "hidden"
								}
							>
								<div
									className="bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 128, 0, 0.70),
														rgba(0, 128, 0, 0.85),
														rgba(0, 128, 0, 1)
													),url("${cardOne?.backgroundImage?.sourceUrl}")`,
									}}
								>
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
									<div className="bg-lightGreyTwo flex flex-col gap-4 p-5 xl:p-10">
										<h3 className="font-extrabold text-green-three text-lg xl:text-xl">
											{cardOne?.title}
										</h3>
										<p className="font-semibold text-black text-medium xl:text-lg">
											{cardOne?.title}
										</p>
									</div>
								</div>
							</Link>
							<Link
								href={`${cardTwo?.link?.url}`}
								target={cardTwo?.link?.target}
								aria-label={`${cardTwo?.link?.title}`}
								className={
									cardTwo?.link?.url
										? "flex mt-6 xl:mt-0 items-center justify-center xl:justify-start"
										: "hidden"
								}
							>
								<div
									className="bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 128, 0, 0.70),
														rgba(0, 128, 0, 0.85),
														rgba(0, 128, 0, 1)
													),url("${cardTwo?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<Image
										alt={`${cardTwo?.backgroundImage?.altText}`}
										src={cardTwo?.backgroundImage?.sourceUrl}
										width={
											cardTwo?.backgroundImage?.mediaDetails?.width
												? cardTwo?.backgroundImage?.mediaDetails?.width
												: 500
										}
										height={
											cardTwo?.backgroundImage?.mediaDetails?.height
												? cardTwo?.backgroundImage?.mediaDetails?.height
												: 500
										}
										className={
											cardTwo?.backgroundImage?.sourceUrl
												? `block group-hover:hidden object-cover object-center w-full h-[300px]`
												: `hidden`
										}
									/>
									<div className="bg-lightGreyTwo flex flex-col gap-4 p-5 xl:p-10">
										<h3 className="font-extrabold text-green-three text-lg xl:text-xl">
											{cardTwo?.title}
										</h3>
										<p className="font-semibold text-black text-medium xl:text-lg">
											{cardTwo?.title}
										</p>
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
