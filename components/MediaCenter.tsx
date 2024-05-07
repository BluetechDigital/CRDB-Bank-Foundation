// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IMediaCenter} from "@/types/components";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const mediaCenter: FC<IMediaCenter> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div
				className={
					styles.mediaCenter +
					` py-16 bg-white container px-4 mx-auto bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				Media Center
			</div>
		</>
	);
};

export default mediaCenter;
