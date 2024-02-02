// Imports
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {initial, stagger} from "../../animations/animations";
import TestimonialsTwoCardElement from "../Elements/TestimonialsTwoCardElement";

// Components

const TestimonialsTwoCard: FC = () => {
	const globalContext = useGlobalContext();

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNextButtonClick = () => {
		// Increment the index by 2 to load the next 2 testimonials
		setCurrentIndex(
			(prevIndex) => (prevIndex + 2) % globalContext?.testimonials.length
		);
	};

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-col lg:flex-row lg:items-center justify-center"
			>
				{globalContext?.testimonials?.length > 0 ? (
					<>
						<div className="hidden lg:flex items-center justify-center">
							{globalContext?.testimonials
								.slice(currentIndex, currentIndex + 2)
								.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<>
											<TestimonialsTwoCardElement
												name={item?.node?.testimonialReview?.name}
												image={item?.node?.testimonialReview?.image}
												jobTitle={item?.node?.testimonialReview?.jobTitle}
												paragraph={item?.node?.testimonialReview?.paragraph}
											/>
										</>
									</Fragment>
								))}
						</div>
						<div className="block lg:hidden">
							{globalContext?.testimonials
								.slice(currentIndex, currentIndex + 1)
								.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<>
											<TestimonialsTwoCardElement
												name={item?.node?.testimonialReview?.name}
												image={item?.node?.testimonialReview?.image}
												jobTitle={item?.node?.testimonialReview?.jobTitle}
												paragraph={item?.node?.testimonialReview?.paragraph}
											/>
										</>
									</Fragment>
								))}
						</div>
					</>
				) : (
					<></>
				)}
				<div className="ml-4 sm:ml-0 text-right">
					<button
						onClick={handleNextButtonClick}
						className="flex-shrink-0 inline-flex w-16 h-16 items-center justify-center bg-white rounded-full hover:opacity-95"
					>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-6 object-contain object-center"
						>
							<path
								d="M1.66675 1.33337L6.33342 6.00004L1.66675 10.6667"
								stroke="#00CBA6"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</button>
				</div>
			</motion.div>
		</>
	);
};

export default TestimonialsTwoCard;
