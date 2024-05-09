// Imports
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IMediaCenterCardLinksNewsCard} from "@/types/components";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const MediaCenterCardLinksNewsCard: FC<IMediaCenterCardLinksNewsCard> = ({
	slug,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<Link
				target="_self"
				className="w-full"
				href={`${slug}`}
				aria-label={`${title}`}
			>
				<figure>
					<Image
						alt={`${featuredImage?.node?.altText}`}
						src={featuredImage?.node?.sourceUrl}
						width={
							featuredImage?.node?.mediaDetails?.width
								? featuredImage?.node?.mediaDetails?.width
								: 500
						}
						height={
							featuredImage?.node?.mediaDetails?.height
								? featuredImage?.node?.mediaDetails?.height
								: 500
						}
						className={
							featuredImage?.node?.sourceUrl
								? `block group-hover:hidden object-cover object-center w-full h-[300px]`
								: `hidden`
						}
					/>
				</figure>

				<div className="bg-white flex flex-col gap-4 p-5 xl:py-8 xl:px-5">
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="font-extrabold text-black text-lg"
					>
						{title}
					</motion.h3>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Paragraph
							content={
								excerpt?.length > 200
									? excerpt?.substring(0, 200) + "..."
									: excerpt
							}
							tailwindStyling="block px-0 text-base text-darkGrey"
						/>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link
							target="_self"
							href={`${slug}`}
							className={slug ? "block" : "hidden"}
							aria-label={`View News Article: ${slug}`}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title="Read Article"
								tailwindColor="green-default"
							/>
						</Link>
					</motion.div>
				</div>
			</Link>
		</>
	);
};

export default MediaCenterCardLinksNewsCard;