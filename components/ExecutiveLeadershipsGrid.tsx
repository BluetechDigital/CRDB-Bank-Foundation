// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IExecutiveLeadershipsGrid} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import ExecutiveLeadershipsCard from "./Cards/ExecutiveLeadershipsCard";

const ExecutiveLeadershipsGrid: FC<IExecutiveLeadershipsGrid> = ({
	title,
	subtitle,
	paragraph,
	highlightText,
}) => {
	const globalContext = useGlobalContext();

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
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 text-center lg:text-center text-lg text-green-two"
						>
							{subtitle}
						</motion.h4>
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
						className="grid mb-32 px-4 lg:px-16 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					>
						{globalContext?.executiveLeadershipsGrid?.length > 0 ? (
							globalContext?.executiveLeadershipsGrid?.map(
								(item: any, keys: number) => (
									<Fragment key={keys}>
										<ExecutiveLeadershipsCard
											slug={item?.node?.slug}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ExecutiveLeadershipsGrid;
