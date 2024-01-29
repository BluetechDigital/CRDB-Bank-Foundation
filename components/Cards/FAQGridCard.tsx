// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFAQGridCard} from "@/types/components/index";
import {fadeIn, initialTwo} from "../../animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const FAQGridCard: FC<IFAQGridCard> = ({index, title, paragraph}) => {
	return (
		<>
			<div
				className="flex flex-col w-full border-solid border-[5px] border-lightGrey"
				style={{
					boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
				}}
			>
				<div className="w-full p-6 border-solid transition-all duration-200 ease-in-out flex flex-wrap">
					<div className="flex-1">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex font-bold max-w-sm sm:max-w-xl w-5/6 sm:w-full gap-6 sm:gap-4 items-center text-left leading-tight text-medium text-black"
						>
							<span>{index + 1}. </span>
							{title}
						</motion.h4>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 text-black leading-[1.75rem] text-base text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQGridCard;
