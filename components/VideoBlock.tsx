// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Styling
import styles from "../styles/components/VideoBlock.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";
import YoutubeButtonBorderSliced from "./Elements/YoutubeButtonBorderSliced";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	highlightText,
	displayYoutubeIcon,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div
				id="VideoBlock"
				className={
					styles.videoBlock +
					" py-12 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
			>
				<div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-4 lg:gap-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && paragraph
								? "max-w-2xl mx-auto text-center lg:max-w-5xl w-full xl:w-[35%]"
								: "hidden"
						}
					>
						<div className="max-w-2xl mx-auto">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center xl:text-left text-paragraph text-green-two mb-5"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className={`${
									highlightText ? "leading-[3.5rem]" : "leading-snug"
								} my-2 max-w-2xl mx-auto mb-6 text-center xl:text-left font-semibold text-4xl lg:text-5xl`}
							>
								{title}
								<span
									className={
										highlightText
											? "p-2 ml-3 bg-green-two text-white"
											: "hidden"
									}
								>
									{highlightText}
								</span>
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mx-auto xl:mx-0 text-center xl:text-left text-black text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={
								buttonLink?.url
									? "flex mt-6 xl:mt-0 items-center justify-center xl:justify-start"
									: "hidden"
							}
						>
							<YoutubeButtonBorderSliced
								fullWidth={true}
								title={buttonLink?.title}
								displayYoutubeIcon={displayYoutubeIcon}
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
						} bg-center bg-no-repeat bg-cover mt-6 lg:mt-0 w-full xl:w-[65%]`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage
							}")`,
							boxShadow: `${
								displayVideo ? "none" : "28px 28px 2px -20px rgba(0,0,0,0.1)"
							}`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;
