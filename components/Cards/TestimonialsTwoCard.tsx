// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {initial, stagger} from "../../animations/animations";

import TestimonialsTwoCardElement from "../Elements/TestimonialsTwoCardElement";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const TestimonialsTwoCard: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="flex flex-col lg:flex-row lg:items-center justify-center lg:mx-16"
			>
				<Swiper
					navigation={true}
					spaceBetween={30}
					centeredSlides={true}
					modules={[Autoplay, Navigation]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className="mySwiper"
				>
					{globalContext?.testimonials?.length > 0 ? (
						globalContext?.testimonials?.map((item: any, index: number) => (
							<Fragment key={index - 1}>
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
