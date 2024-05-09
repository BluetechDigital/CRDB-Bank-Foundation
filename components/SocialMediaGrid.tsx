// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISocialMediaGrid} from "@/types/components";
import {
	initial,
	arrayLoopStaggerChildren,
	initialTwo,
	fadeIn,
	stagger,
} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const SocialMediaGrid: FC<ISocialMediaGrid> = ({title, highlightsGrid}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="py-10"
			>
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={
						title
							? "w-full mb-10 max-w-2xl mx-auto text-center leading-snug font-bold leading-normal text-4xl lg:text-5xl p-4 text-black text-center"
							: "hidden"
					}
				>
					{title}
				</motion.h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center">
					{highlightsGrid?.length > 0 ? (
						highlightsGrid?.map((item: any, index: number) => (
							<Fragment key={index}>
								<Link
									key={index}
									href={`${item?.link?.url}`}
									target={item?.link?.target}
									aria-label={`${item?.link?.title}`}
								>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="group h-[250px] sm:h-[350px] lg:h-[375px] bg-cover bg-center bg-no-repeat"
										style={{
											backgroundImage: `url("${item?.image?.sourceUrl}")`,
										}}
									>
										<div className="h-full flex flex-col items-end justify-between p-2 group-hover:bg-green-darker/80 transition-all delay-100 duration-500 ease-in-out">
											<div className="flex items-start justify-end">
												<Image
													width={550}
													height={550}
													alt="Instagram Posts Icon"
													src="/svg/Instagram-posts.svg"
													className="w-7 h-7 object-contain object-center transition-all duration-500 ease-in-out"
												/>
											</div>
											<div className="mx-auto lg:mx-0 flex flex-col sm:self-end items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all delay-100 duration-500 ease-in-out">
												<div className="activity flex gap-8 items-center justify-center text-white">
													<div className="flex gap-4">
														<Image
															width={550}
															height={550}
															alt="Instagram Heart Icon"
															src="/svg/Instagram-heart.svg"
															className="w-8 h-8 object-contain object-center transition-all duration-500 ease-in-out"
														/>
														<span>{item?.hearts}</span>
													</div>
													<div className="flex gap-4">
														<Image
															width={550}
															height={550}
															alt="Instagram Comments Icon"
															src="/svg/Instagram-speech-bubble.svg"
															className="w-7 h-7 object-contain object-center transition-all duration-500 ease-in-out"
														/>
														<span>{item?.comments}</span>
													</div>
												</div>
												<Paragraph
													content={
														item?.textarea?.length > 200
															? item?.textarea?.substring(0, 200) + "..."
															: item?.textarea
													}
													tailwindStyling="hidden md:block max-w-3xl pt-4 pb-8 text-lightGreyTwo text-center lg:text-left text-tiny"
												/>
											</div>
										</div>
									</motion.div>
								</Link>
							</Fragment>
						))
					) : (
						<></>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default SocialMediaGrid;
