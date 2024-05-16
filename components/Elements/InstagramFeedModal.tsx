// Imports
import fadeInUp, {
	stagger,
	initial,
	arrayLoopStaggerChildren,
	initialTwo,
	fadeIn,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IInstagramFeedModal} from "@/types/components";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const InstagramFeedModal: FC<IInstagramFeedModal> = ({
	id,
	caption,
	username,
	mediaURL,
	timestamp,
	permalink,
	mediaType,
	thumbnailURL,
	modalActive,
	setModalActive,
}) => {
	const toggleModal = () => {
		setModalActive(!modalActive);
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-40 bg-white bg-opacity-50 overflow-y-auto z-50">
				<div className="max-w-4xl mx-auto bg-white overflow-hidden">
					<div className="relative">
						<Image
							width={1000}
							height={1000}
							alt={`Instagram User: ${username} Caption ${
								caption?.length > 150
									? caption?.substring(0, 150) + "..."
									: caption
							}`}
							className="h-40 md:h-auto w-full object-cover"
							src={`${mediaType === "VIDEO" ? thumbnailURL : mediaURL}`}
						/>
						<motion.button
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							onClick={toggleModal}
							aria-label={`Instagram User: ${username}`}
							className="absolute top-0 right-0 inline-block py-2 px-4 mt-2 mr-2 text-sm text-white font-medium leading-5 bg-pureBlack hover:bg-green-two focus:ring-2 focus:ring-green-two focus:ring-opacity-50"
						>
							Close
						</motion.button>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full md:w-4/6 border-b md:border-b-0 md:border-r border-coolGray-100">
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="py-10 pl-10 pr-8"
							>
								<div className="flex items-center gap-4 flex-col sm:flex-row">
									<Link
										target="_blank"
										href={permalink}
										aria-label={`Instagram User Post: ${username}`}
									>
										<Image
											width={1000}
											height={1000}
											alt="CRDB Bank Foundation Logo"
											src="/img/logos/CRDB-bank-logo-circle.jpg"
											className="object-center object-cover w-20 h-20"
										/>
									</Link>
									<div className="flex flex-col gap-2">
										<Link
											target="_blank"
											href={permalink}
											aria-label={`Instagram User Post: ${username}`}
											className="text-lg font-semibold font-Kanit"
										>
											CRDB Bank Foundation
										</Link>
										<div className="flex mb-4 items-center">
											<Link
												target="_blank"
												href={permalink}
												aria-label={`Instagram User Post: ${username}`}
												className="inline-flex items-center h-7 px-3 text-xs text-white font-medium bg-green-three bg-opacity-60 rounded-full"
											>
												{username}
											</Link>
										</div>
									</div>
								</div>
								<Paragraph
									content={caption}
									tailwindStyling="hidden md:block w-full pt-4 text-black text-center lg:text-left text-tiny"
								/>
							</motion.div>
						</div>
						<div className="w-full md:w-2/6 pt-6 pb-10 px-8">
							<div>
								<div className="mb-10">
									<div className="flex mb-3 items-center justify-between">
										<span className="text-sm font-medium text-white0">
											Size
										</span>
										<span className="text-sm font-medium text-coolGray-900">
											2.5 MB
										</span>
									</div>
									<div className="flex mb-3 items-center justify-between">
										<span className="text-sm font-medium text-white0">
											Lenght
										</span>
										<span className="text-sm font-medium text-coolGray-900">
											88 Pages
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-white0">
											Last Update
										</span>
										<span className="text-sm font-medium text-coolGray-900">
											12 Days ago
										</span>
									</div>
								</div>
								<Link
									target="_blank"
									href={permalink}
									aria-label={`Instagram User Post: ${username}`}
									className="inline-block py-3 px-7 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-two hover:bg-green-three focus:ring-2 focus:ring-green-two focus:ring-opacity-50 shadow-sm"
								>
									View Instagram Profile
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InstagramFeedModal;
