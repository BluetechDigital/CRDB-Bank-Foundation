"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {INewsletter} from "@/types/components/index";

import router from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import {useGlobalContext} from "@/context/global";
import {Field, Form, Formik, useFormik} from "formik";
import {sendNewsletterForm} from "@/lib/newsletterForm";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Newsletter: FC<INewsletter> = ({
	title,
	subtitle,
	textarea,
	paragraph,
	formTitle,
}) => {
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			email: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendNewsletterForm(values);
				} catch (error: unknown) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error: unknown) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<div
				className={
					styles.newsletter +
					" py-8 bg-green-flatDark bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-green-flatgreen-three.svg")`,
				}}
			>
				<div className="container mx-auto px-4">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-wrap items-center -mx-4"
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 max-w-3xl"
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-2 text-center lg:text-left text-paragraph text-white"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="max-w-xl mx-auto lg:mx-0 my-2 mb-6 text-white text-center lg:text-left font-semibold leading-tight text-4xl lg:text-5xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-paragraph text-center lg:text-left"
							/>
						</motion.div>
						<div className="w-full lg:w-1/2 px-4">
							<div className="lg:max-w-md lg:ml-auto py-6 px-10 bg-white">
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="my-2 text-xl font-bold text-center lg:text-left text-black"
								>
									{formTitle}
								</motion.h3>
								<Paragraph
									content={textarea}
									tailwindStyling="mb-2 lg:max-w-3xl mx-auto text-black text-base text-center lg:text-left"
								/>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center lg:justify-start gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										target="_self"
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
										aria-label={`${globalContext?.themesOptionsContent?.email}`}
										className="font-medium tracking-wide text-black hover:text-green-two"
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</motion.div>
								{/* <Formik
									onSubmit={formik?.onSubmit}
									initialValues={formik?.initialValues}
									className="w-full lg:w-1/2"
								>
									<Form action="#">
										{loading ? (
											<motion.h3
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="my-2 text-xl font-bold text-center lg:text-left text-green-two"
											>
												Sending Message...
											</motion.h3>
										) : messageSent ? (
											<motion.h3
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="my-2 text-xl font-bold text-center lg:text-left text-green-two"
											>
												Message Sent!
											</motion.h3>
										) : errorMessage ? (
											<motion.h3
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="my-2 text-xl font-bold text-center lg:text-left text-red-default"
											>
												Error Message: Something went wrong with sending your
												message. Please try again.
											</motion.h3>
										) : (
											<motion.h3
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="my-2 text-xl font-bold text-center lg:text-left text-black"
											>
												{formTitle}
											</motion.h3>
										)}

										<Paragraph
											content={textarea}
											tailwindStyling="mb-2 lg:max-w-3xl mx-auto text-black text-base text-center lg:text-left"
										/>

										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="mb-2 w-full"
										>
											{formik?.touched?.email && formik?.errors?.email ? (
												<div>
													<p className="py-1 text-left text-tiny text-red-default ">
														{formik?.errors?.email}
													</p>
												</div>
											) : null}
											<Field
												id="email"
												name="email"
												type="email"
												placeholder="Email Address"
												onBlur={formik?.handleBlur}
												onChange={formik?.handleChange}
												value={formik?.values?.email}
												className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-green-darker focus:border-green-darker focus:ring-[1px] focus:ring-green-darker"
											/>
										</motion.div>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className={formik?.touched?.email ? "block" : "hidden"}
										>
											<ReCAPTCHA
												sitekey={`6LfxDlApAAAAAATlCoXvFZjsdAm6mgpAeDt_HVBR`}
												onChange={handleReCaptchaChange}
											/>
										</motion.div>
										<motion.button
											type="submit"
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											onClick={onFormSubmit}
											disabled={
												!formik?.values?.email ||
												reCaptchaResult === null ||
												reCaptchaResult === undefined
											}
											className={
												formik?.touched?.email
													? "mt-2 w-full inline-block text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
													: "hidden"
											}
										>
											<span className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-purple-default hover:bg-purple-two transition-all duration-200 ease-in-out">
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="text-white tracking-widest text-paragraph uppercase"
												>
													{loading
														? "Subscribing..."
														: messageSent
														? "Message Sent!"
														: errorMessage
														? "Sending Error!"
														: "Subscribe"}
												</motion.h3>
											</span>
										</motion.button>
									</Form>
								</Formik> */}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
