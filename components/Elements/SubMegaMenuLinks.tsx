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
	slideInRightFinish,
	slideInRightInitial,
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
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-black"
						>
							Our Programs
						</motion.h4>
						<motion.ul
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
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
											<li className="w-full group-scoped hover:bg-green-two border-b-[2px] border-lightGrey hover:border-green-two">
												<Link
													href={`${item?.node?.url}`}
													className="block p-4 text-tiny text-black hover:text-white"
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
							className="mb-0 text-base font-semibold tracking-normal text-center uppercase md:text-left text-black"
						>
							CRDB BANK
						</motion.h4>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
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
											" group/CRDBBank w-[200px] h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo Green"
												src="/img/logos/CRDB-bank-logo.svg"
												className="block group-hover/CRDBBank:hidden object-contain object-center w-full h-[35px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo White"
												src="/img/logos/CRDB-bank-logo.svg"
												className="hidden group-hover/CRDBBank:block object-contain object-center w-full h-[35px] mb-4"
											/>
										</span>
										<span className="text-black group-hover/CRDBBank:text-white">
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
											" group/Marathon w-[200px] h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo Green"
												src="/img/logos/CRDB-bank-marathon-logo-green.webp"
												className="block group-hover/Marathon:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Marathon Logo White"
												src="/img/logos/CRDB-bank-marathon-logo-white.webp"
												className="hidden group-hover/Marathon:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span className="text-black group-hover/Marathon:text-white">
											Marathon
										</span>
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
											" group/Simbanking w-[200px] h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Simbanking Logo Green"
												src="/img/logos/CRDB-bank-simbanking.svg"
												className="block group-hover/Simbanking:hidden object-contain object-center w-full h-[35px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Simbanking Logo Green"
												src="/img/logos/CRDB-bank-simbanking.svg"
												className="hidden group-hover/Simbanking:block object-contain object-center w-full h-[35px] mb-4"
											/>
										</span>
										<span className="text-black group-hover/Simbanking:text-white">
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
											" group/InternetBanking w-[200px] h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-two hover:bg-green-two hover:border-green-two transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-green-two"
										}
									>
										<span>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Internet Banking Logo Green"
												src="/img/logos/CRDB-bank-internet_banking.svg"
												className="block group-hover/InternetBanking:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
											<Image
												width={500}
												height={500}
												alt="CRDB Bank Internet Banking Logo Green"
												src="/img/logos/CRDB-bank-internet_banking.svg"
												className="hidden group-hover/InternetBanking:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
											/>
										</span>
										<span className="text-black group-hover/InternetBanking:text-white">
											Internet Banking
										</span>
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
							    	rgba(4, 61, 43, 0.85),
							    	rgba(4, 61, 43, 0.85),
							    	rgba(4, 61, 43, 1)
							    ),url("${globalContext?.themesOptionsContent?.menuColumnThree?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
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
							variants={stagger}
							whileInView="animate"
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
