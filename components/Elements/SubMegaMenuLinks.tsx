// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
	stagger,
} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const SubMegaMenuLinks: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="fixed mt-[1.65rem] w-full left-0 flex justify-end">
				<div className="w-[80%] 2xl:w-[75%] bg-white grid grid-cols-3 gap-4 items-else justify-between">
					<div className="flex flex-col items-center justify-start py-10 border-r-[2px] border-black">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack"
						>
							Our Programs
						</motion.h4>

						<motion.ul
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className={
								styles.ourServicesLinks + " p-8 w-full flex flex-col z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.ourProgramsLinks?.length > 0 ? (
								globalContext?.ourProgramsLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<Link href={`${item?.node?.url}`}>
											<li className="w-full group-scoped hover:bg-green-Two border-b-[2px] border-lightGrey hover:border-green-Two">
												<Link
													href={`${item?.node?.url}`}
													className="block p-4 text-tiny text-pureBlack hover:text-white"
												>
													{item?.node?.label}
												</Link>
											</li>
										</Link>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="flex flex-col justify-between h-full items-center py-10 px-4">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-0 text-base font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack"
						>
							CRDB BANK
						</motion.h4>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center gap-4 mb-6"
						>
							<div className="grid grid-cols-2 2xl:flex 2xl:flex-row items-center justify-center gap-4">
								<Link href="https://crdbbank.co.tz" target="_black">
									<motion.button
										initial={initial}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" group w-full h-full 2xl:w-[200px] 2xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-Two transition-all ease-in-out duration-500"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo Green"
												src="/img/logos/CRDB-bank-logo.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[35px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo White"
												src="/img/logos/CRDB-bank-logo.svg"
												className="hidden group-hover:block object-contain object-center w-full h-[35px] mb-4"
											/>
										</span>
										<span className="text-pureBlack group-hover:text-white">
											CRDB Bank
										</span>
									</motion.button>
								</Link>
								<Link href="https://www.crdbbankmarathon.co.tz" target="_black">
									<motion.button
										initial={initial}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" group w-full h-full 2xl:w-[200px] 2xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-Two transition-all ease-in-out duration-500"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo Green"
												src="/img/logos/CRDB-bank-marathon-logo-green.webp"
												className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo White"
												src="/img/logos/CRDB-bank-marathon-logo-white.webp"
												className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span>Marathon</span>
									</motion.button>
								</Link>
							</div>
							<div className="grid grid-cols-2 2xl:flex 2xl:flex-row items-center justify-center gap-4">
								<Link
									href="https://crdbbank.co.tz/en/product/personal/Ways%20to%20Bank/26"
									target="_black"
								>
									<motion.button
										initial={initial}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" group w-full h-full 2xl:w-[200px] 2xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-Two transition-all ease-in-out duration-500"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Simbanking Logo Green"
												src="/img/logos/CRDB-bank-simbanking.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[35px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Simbanking Logo Green"
												src="/img/logos/CRDB-bank-simbanking.svg"
												className="hidden group-hover:block object-contain object-center w-full h-[35px] mb-4"
											/>
										</span>
										<span className="text-pureBlack group-hover:text-white">
											Simbanking
										</span>
									</motion.button>
								</Link>
								<Link
									href="https://crdbbank.co.tz/en/product/personal/Ways%20to%20Bank/25"
									target="_black"
								>
									<motion.button
										initial={initial}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" group w-full h-full 2xl:w-[200px] 2xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-Two transition-all ease-in-out duration-500"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Internet Banking Logo Green"
												src="/img/logos/CRDB-bank-internet_banking.svg"
												className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Internet Banking Logo Green"
												src="/img/logos/CRDB-bank-internet_banking.svg"
												className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span>Internet Banking</span>
									</motion.button>
								</Link>
							</div>
						</motion.div>
					</div>
					<div
						className="flex flex-col justify-between h-full items-center px-10 py-10 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(
							    	0deg,
							    	rgba(1, 90, 1, 0.85),
							    	rgba(1, 90, 1, 0.85),
							    	rgba(1, 90, 1, 0.85)
							    ),url("${globalContext?.themesOptionsContent?.menuColumnThree?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col"
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-5 text-base font-semibold tracking-normal text-center text-white uppercase"
							>
								{globalContext?.themesOptionsContent?.menuColumnThree?.title}
							</motion.h4>

							<Paragraph
								content={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.paragraph
								}
								tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center px-6 gap-4"
						>
							<Link
								href={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.buttonLink?.url
								}
								target={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.buttonLink?.target
								}
							>
								<ButtonBorderSliced
									fullWidth={false}
									tailwindColor="white"
									title={
										globalContext?.themesOptionsContent?.menuColumnThree
											?.buttonLink?.title
									}
								/>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubMegaMenuLinks;
