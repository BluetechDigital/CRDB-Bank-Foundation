// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAchievementsTwo} from "@/types/components";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

const AchievementsTwo: FC<IAchievementsTwo> = ({
	title,
	backgroundColor,
	achievementsGrid,
}) => {
	return (
		<>
			<div
				className="py-16 lg:py-10 overflow-hidden bg-cover bg-no-repeat bg-center"
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
					<div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-center items-center -m-8">
						<div className="w-full lg:w-1/2 xl:w-1/4 p-8">
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="my-0 lg:my-6 text-white text-center lg:text-left tracking-normal leading-normal sm:leading-[2.75rem] font-semibold text-5xl sm:text-6xl lg:text-7xl"
							>
								{title}
							</motion.h2>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 lg:my-10 xl:mb-0 px-4"
						>
							{achievementsGrid?.length > 0 ? (
								achievementsGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<>
											<div className="md:w-56 mx-auto">
												<motion.h3
													initial={initial}
													variants={stagger}
													whileInView="animate"
													viewport={{once: true}}
													className="mb-3 text-white text-center text-5xl lg:text-6xl xl:text-7xl font-bold tracking-px-n leading-tight"
												>
													{item?.textOne}
												</motion.h3>
												<motion.p
													initial={initial}
													variants={stagger}
													whileInView="animate"
													viewport={{once: true}}
													className="text-paragraph xl:text-lg text-center text-white font-medium leading-normal"
												>
													{item?.textTwo}
												</motion.p>
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
