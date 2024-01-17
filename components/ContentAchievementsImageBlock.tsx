// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IContentAchievementsImageBlock} from "@/types/components";

// Styling
import styles from "../styles/components/ContentAchievementsImageBlock.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const ContentAchievementsImageBlock: FC<IContentAchievementsImageBlock> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	achievementsContent,
}) => {
	return (
		<>
			<div
				id="ContentStripesVideoBlock"
				className={styles.contentAchievementsImageBlock + " px-0 bg-green-flat"}
			>
				<div className="flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-x-16">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className={
							title && paragraph
								? "max-w-2xl mx-auto py-20 px-4 lg:p-12 text-center lg:max-w-5xl w-full lg:w-[50%] xl:w-[40%]"
								: "hidden"
						}
					>
						<div className="max-w-2xl mx-auto">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left text-paragraph text-yellow-Two"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="my-2 max-w-2xl mx-auto mb-6 text-white text-center lg:text-left font-semibold text-4xl lg:text-5xl"
							>
								{title}
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-center lg:text-left text-white text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={
								buttonLink?.url
									? "flex mt-6 lg:mt-0 items-center justify-center lg:justify-start"
									: "hidden"
							}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title={buttonLink?.title}
								tailwindColor="white"
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`relative flex flex-col items-end justify-end h-[500px] lg:h-[625px] bg-center bg-no-repeat bg-cover w-full lg:w-[50%] xl:w-[60%]`}
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<div className="absolute z-50 py-8 bg-green-Two w-2/3 mr-6 mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
							{achievementsContent?.length > 0 ? (
								achievementsContent?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<div className="px-6 flex flex-col gap-4">
											<motion.h2
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="text-white text-center lg:text-left font-semibold text-4xl"
											>
												{item?.card?.textOne}
											</motion.h2>
											<motion.h2
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="text-white text-center lg:text-left text-paragraph"
											>
												{item?.card?.textTwo}
											</motion.h2>
										</div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ContentAchievementsImageBlock;
