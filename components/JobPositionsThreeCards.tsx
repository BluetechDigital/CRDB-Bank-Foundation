"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {IJobPositionsThreeCardsGrid} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import JobPositionsCard from "./Cards/JobPositionsCard";
import JobsCategoryButton from "./Elements/JobsCategoryButton";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const JobPositionsThreeCardsGrid: FC<IJobPositionsThreeCardsGrid> = ({
	title,
	subtitle,
	paragraph,
	highlightText,
}) => {
	const globalContext = useGlobalContext();

	const [allJobsOpen, setAllJobsOpen]: any = useState(true);
	const [operationsTeamsJobsOpen, setOperationsTeamsJobsOpen]: any =
		useState(false);
	const [managementJobsOpen, setManagementJobsOpen]: any = useState(false);

	/* Hides or Display
	 All Job Positions */
	const displayAllJobs = () => {
		setAllJobsOpen(!allJobsOpen);
		setManagementJobsOpen(false);
		setOperationsTeamsJobsOpen(false);
	};

	/* Hides or Display Management
	 Taxonomy Job Positions */
	const displayManagementJobs = () => {
		setAllJobsOpen(false);
		setManagementJobsOpen(!managementJobsOpen);
		setOperationsTeamsJobsOpen(false);
	};

	/* Hides or Display Operations Teams
	 Taxonomy Job Positions */
	const displayOperationsTeamsJobs = () => {
		setAllJobsOpen(false);
		setManagementJobsOpen(false);
		setOperationsTeamsJobsOpen(!operationsTeamsJobsOpen);
	};

	return (
		<>
			<div className="py-10 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col items-center"
				>
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-1 text-center lg:text-center text-lg text-yellow-two"
					>
						{subtitle}
					</motion.h4>
					<motion.h3
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-none lg:max-w-3xl mx-auto text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
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
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col sm:flex-row py-8 mb-12 items-center justify-center gap-4 lg:gap-12"
				>
					<JobsCategoryButton
						title="All"
						active={allJobsOpen}
						onClick={displayAllJobs}
					/>
					<JobsCategoryButton
						title="Management"
						active={managementJobsOpen}
						onClick={displayManagementJobs}
					/>
					<JobsCategoryButton
						title="Operations"
						active={operationsTeamsJobsOpen}
						onClick={displayOperationsTeamsJobs}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid mb-12 px-4 gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{allJobsOpen ? (
						<>
							{globalContext?.jobsPositions?.length > 0 ? (
								globalContext?.jobsPositions?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										{keys <= 2 ? (
											<JobPositionsCard
												slug={item?.node?.slug}
												title={item?.node?.title}
												paragraph={item?.node?.excerpt}
												tailwindStyling="bg-green-default hover:bg-purple-three"
											/>
										) : (
											<></>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : managementJobsOpen ? (
						<>
							{globalContext?.managementsJobs?.length > 0 ? (
								globalContext?.managementsJobs?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										{keys <= 2 ? (
											<JobPositionsCard
												slug={item?.slug}
												title={item?.title}
												paragraph={item?.excerpt}
												tailwindStyling="bg-green-three hover:bg-yellow-dark"
											/>
										) : (
											<></>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : operationsTeamsJobsOpen ? (
						<>
							{globalContext?.operationsTeamsJobs?.length > 0 ? (
								globalContext?.operationsTeamsJobs?.map(
									(item: any, keys: any) => (
										<Fragment key={keys}>
											{keys <= 2 ? (
												<JobPositionsCard
													slug={item?.slug}
													title={item?.title}
													paragraph={item?.excerpt}
													tailwindStyling="bg-purple-three hover:bg-purple-dark"
												/>
											) : (
												<></>
											)}
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}
				</motion.div>
				{
					<Link
						href="/job-positions"
						className="flex items-center justify-center w-fit mx-auto"
					>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title="View All Vacancies"
								tailwindColor="green-default"
							/>
						</motion.div>
					</Link>
				}
			</div>
		</>
	);
};

export default JobPositionsThreeCardsGrid;
