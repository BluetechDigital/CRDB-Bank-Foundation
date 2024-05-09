// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturesGridTwo} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../styles/components/FeaturesGridTwo.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";
import FeaturesGridContentCard from "./Cards/FeaturesGridContentCard";

const FeaturesGridTwo: FC<IFeaturesGridTwo> = ({
	cardOne,
	cardTwo,
	lastCard,
	gridContent,
}) => {
	return (
		<div
			className={styles.featuresGridTwo + ` overflow-hidden bg-white lg:px-4`}
		>
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-7xl pt-28 pb-36">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-wrap -m-3"
					>
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="h-full p-10 rounded-sm bg-lightGrey"
							>
								<div className="flex flex-wrap items-center justify-center lg:justify-start">
									<div className="w-auto p-2">
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="mb-2 text-center text-paragraph text-green-two"
										>
											{cardOne?.subtitle}
										</motion.h4>
									</div>
								</div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-3 text-3xl font-semibold text-center lg:text-left"
								>
									{cardOne?.title}
								</motion.h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="text-black text-center lg:text-left text-paragraph"
								/>
								<div
									className={
										cardOne?.buttonLink?.url
											? "flex items-center justify-center lg:items-baseline lg:justify-start"
											: "hidden"
									}
								>
									<Link
										href={`${cardOne?.buttonLink?.url}`}
										target={cardOne?.buttonLink?.target}
										aria-label={`${cardOne?.buttonLink?.title}`}
									>
										<ButtonBorderSliced
											fullWidth={false}
											title={cardOne?.buttonLink?.title}
											tailwindColor={`purple-default`}
										/>
									</Link>
								</div>
							</motion.div>
						</div>
						{/* Card Two */}
						<div
							className={
								cardTwo?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item: any, index: number) => (
								<Fragment key={index}>
									<>
										<FeaturesGridContentCard
											key={index}
											title={item?.card?.title}
											subtitle={item?.card?.subtitle}
											paragraph={item?.card?.paragraph}
											buttonLink={item?.card?.buttonLink}
											backgroundColor={item?.card?.backgroundColor}
										/>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
						{/* Last Card */}
						<div
							className={
								lastCard?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesGridTwo;
