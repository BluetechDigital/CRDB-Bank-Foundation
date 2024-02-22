// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFAQGrid} from "@/types/components/index";
import {initial, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import FAQGridCard from "./Cards/FAQGridCard";

const FAQGrid: FC<IFAQGrid> = ({title, faqGrid, paragraph, highlightText}) => {
	return (
		<>
			<div
				className="relative py-16 lg:py-28 px-4 bg-white bg-cover bg-no-repeat bg-center"
				style={{
					clipPath: `polygon(0 0, 68% 0, 100% 0, 100% 99%, 25% 95%, 0 100%)`,
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
					<div className="flex flex-col items-center">
						<motion.h3
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
						>
							{title}
							<span className="p-2 ml-3 bg-green-two text-white">
								{highlightText}
							</span>
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="grid mb-32 px-4 lg:px-16 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
					>
						{faqGrid?.length > 0 ? (
							faqGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<FAQGridCard
										index={keys}
										title={item?.card?.title}
										paragraph={item?.card?.paragraph}
									/>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default FAQGrid;
