// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAchievementsTwo} from "@/types/components";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";
import Paragraph from "./Elements/Paragraph";

const AchievementsTwo: FC<IAchievementsTwo> = ({
	title,
	backgroundColor,
	achievementsGrid,
}) => {
	return (
		<>
			<div
				className="p-4 pt-6 overflow-hidden bg-cover bg-no-repeat bg-center"
				style={{
					backgroundColor: `${backgroundColor}`,
					clipPath: `polygon(77% 0, 100% 0, 100% 98%, 21% 89%, 0 98%, 0 0)`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="container px-4 mx-auto"
				>
					<div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-between items-center -mx-8">
						<div className="w-full lg:w-1/2 xl:w-1/4 pb-8">
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="my-0 lg:my-2 text-white text-center lg:text-left tracking-normal leading-normal sm:leading-[2.75rem] font-semibold text-5xl sm:text-6xl lg:text-7xl"
							>
								{title}
							</motion.h2>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/2 xl:w-3/4 grid grid-cols-1 sm:grid-cols-3 items-center lg:items-start justify-between gap-8 mb-16 lg:mb-0 px-4"
						>
							{achievementsGrid?.length > 0 ? (
								achievementsGrid.map((item: any, index: number) => (
									<Fragment key={index}>
										<>
											<div className="md:w-56 xl:w-full mx-auto">
												<motion.h3
													initial={initial}
													variants={stagger}
													whileInView="animate"
													viewport={{once: true}}
													className="mb-3 text-white text-center text-5xl lg:text-6xl xl:text-7xl font-bold tracking-px-n leading-tight"
												>
													{item?.textOne}
												</motion.h3>
												<Paragraph
													content={item?.textTwo}
													tailwindStyling="text-paragraph xl:text-medium text-center text-white font-medium leading-normal"
												/>
											</div>
										</>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default AchievementsTwo;
