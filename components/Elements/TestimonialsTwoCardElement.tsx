// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsTwoCardElement} from "@/types/components";

// Components
import Paragraph from "./Paragraph";

const TestimonialsTwoCardElement: FC<ITestimonialsTwoCardElement> = ({
	name,
	image,
	jobTitle,
	paragraph,
}) => {
	return (
		<>
			<div className="my-auto pb-32 py-20 px-20 lg:px-44 bg-white">
				<svg
					width="24"
					height="16"
					viewBox="0 0 24 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.959961 16C2.41063 14.72 3.62663 13.3973 4.60796 12.032C5.58929 10.624 6.22929 9.30133 6.52796 8.064H6.39996C5.20529 8.064 4.28796 7.68 3.64796 6.912C3.00796 6.144 2.68796 5.26933 2.68796 4.288V3.904C2.68796 2.79467 3.05063 1.87733 3.77596 1.152C4.50129 0.384 5.46129 0 6.65596 0C7.89329 0 8.85329 0.405333 9.53596 1.216C10.2613 2.02667 10.624 3.008 10.624 4.16V4.736C10.624 5.67467 10.4533 6.656 10.112 7.68C9.77063 8.704 9.3013 9.728 8.70396 10.752C8.1493 11.776 7.46663 12.736 6.65596 13.632C5.88796 14.528 5.05596 15.3173 4.15996 16H0.959961ZM13.376 16C14.8266 14.72 16.0426 13.3973 17.024 12.032C18.0053 10.624 18.6453 9.30133 18.944 8.064H18.816C17.6213 8.064 16.704 7.68 16.064 6.912C15.424 6.144 15.104 5.26933 15.104 4.288V3.904C15.104 2.79467 15.4666 1.87733 16.192 1.152C16.9173 0.384 17.8773 0 19.072 0C20.3093 0 21.2693 0.405333 21.952 1.216C22.6773 2.02667 23.04 3.008 23.04 4.16V4.736C23.04 5.67467 22.8693 6.656 22.528 7.68C22.1866 8.704 21.7173 9.728 21.12 10.752C20.5653 11.776 19.8826 12.736 19.072 13.632C18.304 14.528 17.472 15.3173 16.576 16H13.376Z"
						fill="#e8b042"
					></path>
				</svg>
				<Paragraph
					content={
						paragraph?.length > 150
							? paragraph?.substring(0, 150) + "..."
							: paragraph
					}
					tailwindStyling="mb-6 text-black leading-[1.65rem] text-base text-center xl:text-left"
				/>
				<div className="flex justify-between items-center">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex items-center"
					>
						<Image
							alt={image?.sourceUrl}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `h-10 w-10 rounded-full mr-6 object-cover object-center`
									: `hidden`
							}
						/>
						<div>
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-black text-left font-semibold leading-tight text-paragraph"
							>
								{name}
							</motion.h2>
							<motion.span
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-darkGrey text-left font-semibold leading-tight text-sm"
							>
								{jobTitle}
							</motion.span>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwoCardElement;
