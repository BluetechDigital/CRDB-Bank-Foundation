// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {IFAQGridCard} from "@/types/components/index";

// Components
import Paragraph from "../Elements/Paragraph";

const FAQGridCard: FC<IFAQGridCard> = ({index, title, paragraph}) => {
	return (
		<>
			<div
				className="flex flex-col items-center justify-center p-6 h-full min-h-[300px] md:min-h-[225px] lg:min-h-[265px] bg-white border-4 border-lightGrey border-solid"
				style={{
					boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col justify-between h-full"
				>
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex font-bold max-w-sm sm:max-w-xl w-5/6 sm:w-full gap-6 sm:gap-4 items-center text-left leading-tight text-medium text-black"
					>
						<span className="min-w-[25px] text-xl text-green-three">
							{index + 1}.{" "}
						</span>
						{title}
					</motion.h4>
					<div>
						<div className="w-full mb-1 h-[2px] bg-green-three hidden sm:block" />
						<Paragraph
							content={
								paragraph?.length > 275
									? paragraph?.substring(0, 275) + "..."
									: paragraph
							}
							tailwindStyling="max-w-full max-w-sm mx-auto lg:mx-0 text-tiny lg:text-tiny text-black text-center lg:text-left"
						/>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default FAQGridCard;
