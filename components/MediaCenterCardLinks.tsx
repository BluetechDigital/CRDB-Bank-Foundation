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
import {useGlobalContext} from "@/context/global";
import {IMediaCenterCardLinks} from "@/types/components";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import MediaCenterCardLinksNewsCard from "./Cards/MediaCenterCardLinksNewsCard";

const MediaCenterCardLinks: FC<IMediaCenterCardLinks> = ({
	title,
	subtitle,
	paragraph,
	cardOne,
	cardTwo,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.mediaCenter + ` py-16 px-4 bg-white`}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="container px-0 mx-auto"
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title
								? "w-full mb-24 text-center grid grid-cols-1 lg:grid-cols-2 items-center lg:items-baseline"
								: "hidden"
						}
					>
						<div>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 text-center lg:text-left text-paragraph text-green-two"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-2xl mx-auto lg:mx-0 text-center font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black text-center lg:text-left "
							>
								{title}
								<span className="ml-3 text-grey">Latest News</span>
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-6xl mx-auto lg:mx-0 text-black text-paragraph text-center lg:text-left"
						/>
					</motion.div>

					<div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
						<div className="flex flex-col gap-4 md:flex-row md:flex-wrap lg:w-[calc(66%-.5rem)]">
							{globalContext?.news?.length > 0 ? (
								globalContext?.news
									?.slice(0, 2)
									?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												className="w-full md:w-[calc(50%-.5rem)]"
											>
												<MediaCenterCardLinksNewsCard
													slug={item?.node?.slug}
													title={item?.node?.title}
													excerpt={item?.node?.excerpt}
													featuredImage={item?.node?.featuredImage}
												/>
											</motion.div>
										</Fragment>
									))
							) : (
								<></>
							)}
							<Link
								href={`${cardOne?.link?.url}`}
								target={cardOne?.link?.target}
								aria-label={`${cardOne?.link?.title}`}
								className="w-full"
							>
								<div
									className="bg-black bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `url("${cardOne?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="h-full p-10 w-full min-h-[250px] lg:min-h-[350px] flex flex-col gap-4 items-baseline justify-end bg-black/25 hover:bg-green-flatDark/75 bg-blend-multiply bg-center bg-cover bg-no-repeat transition-all duration-500 ease-in-out">
										<motion.h3
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="font-extrabold text-white text-xl xl:text-2xl"
										>
											{cardOne?.title}
										</motion.h3>
										<Paragraph
											content={cardOne?.link?.title}
											tailwindStyling="text-white text-paragraph"
										/>
									</div>
								</div>
							</Link>
						</div>

						<div className="w-full lg:w-[calc(33%-.5rem)]">
							<Link
								href={`${cardTwo?.link?.url}`}
								target={cardTwo?.link?.target}
								aria-label={`${cardTwo?.link?.title}`}
								className="w-full lg:h-full group"
							>
								<div
									className="relative lg:h-full bg-cover bg-no-repeat bg-center"
									style={{
										backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<figure className="w-full lg:hidden">
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
									</figure>

									<div className="bg-green-two inline-flex flex-col gap-4 p-10 w-full lg:absolute lg:bottom-0 lg:left-0 group-hover:bg-purple-three transition-all duration-500 ease-in-out">
										<motion.h3
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="font-extrabold text-white text-xl xl:text-2xl"
										>
											{cardTwo?.title}
										</motion.h3>
										<Paragraph
											content={cardTwo?.link?.title}
											tailwindStyling="text-white text-paragraph"
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
