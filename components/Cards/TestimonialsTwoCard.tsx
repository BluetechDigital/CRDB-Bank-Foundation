// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
} from "../../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

import TestimonialsTwoCardElement from "../Elements/TestimonialsTwoCardElement";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Components
import Paragraph from "../Elements/Paragraph";

const TestimonialsTwoCard: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-col lg:flex-row lg:items-center justify-center  mx-16"
			>
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{globalContext?.testimonials?.length > 0 ? (
						globalContext?.testimonials?.map((item: any, keys: number) => (
							<Fragment key={keys}>
								<SwiperSlide>
									<TestimonialsTwoCardElement
										name={item?.node?.testimonialReview?.name}
										image={item?.node?.testimonialReview?.image}
										jobTitle={item?.node?.testimonialReview?.jobTitle}
										paragraph={item?.node?.testimonialReview?.paragraph}
									/>
								</SwiperSlide>
							</Fragment>
						))
					) : (
						<></>
					)}
				</Swiper>
			</motion.div>
		</>
	);
};

export default TestimonialsTwoCard;
