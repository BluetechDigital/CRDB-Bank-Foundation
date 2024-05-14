// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {INewsVideoElement} from "@/types/components";
import {slideInRightFinish, slideInRightInitial} from "@/animations/animations";

// Styling
import styles from "../../styles/components/VideoBlock.module.scss";

// Components
import NewsVideoWrapper from "./NewsVideoWrapper";

const NewsVideoElement: FC<INewsVideoElement> = ({
	latestVideo,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<>
			<motion.div
				viewport={{once: true}}
				initial={slideInRightInitial}
				whileInView={slideInRightFinish}
				className={
					styles.videoBlock +
					` ${
						displayVideo ? "h-fit" : "h-[300px] lg:h-[300px] 2xl:h-[300px]"
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
		</>
	);
};

export default NewsVideoElement;
