// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {INewsVideoElement} from "@/types/components";
import {slideInRightFinish, slideInRightInitial} from "@/animations/animations";

// Styling
import styles from "../../styles/components/VideoBlock.module.scss";

// Components
import NewsVideoWrapper from "./NewsVideoWrapper";

const NewsVideoElement: FC<INewsVideoElement> = ({
	videoLink,
	latestVideo,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<>
			<Link
				href={`${videoLink?.url}`}
				target={videoLink?.target}
				aria-label={`${videoLink?.title}`}
				className="cursor-pointer"
			>
				<motion.div
					viewport={{once: true}}
					initial={slideInRightInitial}
					whileInView={slideInRightFinish}
					className={
						styles.videoBlock +
						` ${
							displayVideo ? "h-fit" : "h-[275px]"
						} w-full bg-center bg-no-repeat bg-cover mt-6 lg:mt-0`
					}
					style={{
						backgroundImage: `url("${
							displayVideo ? "none" : videoBackgroundImage?.sourceUrl
						}")`,
						boxShadow: `${
							displayVideo ? "none" : "28px 28px 2px -20px rgba(0,0,0,0.1)"
						}`,
					}}
				>
					{displayVideo ? (
						<NewsVideoWrapper>{latestVideo}</NewsVideoWrapper>
					) : (
						<></>
					)}
				</motion.div>
			</Link>
		</>
	);
};

export default NewsVideoElement;
