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
import {useRouter} from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import {IContactForm} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import React, {useState, FC, Fragment} from "react";
import {useFormik, Formik, Field, Form} from "formik";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const ContactForm: FC<IContactForm> = ({title, paragraph}) => {
	const router = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.selectedPrograms) {
			errors.selectedPrograms = "Required*";
		} else if (values?.selectedPrograms.length <= 0) {
			errors.selectedPrograms = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
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
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			selectedPrograms: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
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
			} catch (error) {
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
				className="px-4 py-10 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-lightgrey-grey-one.svg")`,
				}}
			>
				<div className="container mx-auto flex flex-col lg:flex-row items-baseline ">
					<div className="w-full lg:w-1/2 sm:p-6 flex flex-col">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mb-6"
						>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="lg:max-w-lg mb-6 text-center lg:text-left font-semibold leading-tight text-4xl lg:text-5xl text-black"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="lg:max-w-lg text-center lg:text-left text-black text-paragraph"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							variants={stagger}
							whileInView="animate"
							className="mb-6"
						>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-6 text-2xl font-semibold text-center lg:text-left"
							>
								Contacts
							</motion.h3>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left"
							>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center gap-2"
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
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "flex items-center justify-center gap-2"
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
										href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
										aria-label={`${globalContext?.themesOptionsContent?.emailTwo}`}
										className="font-medium tracking-wide text-black hover:text-green-two"
									>
										{globalContext?.themesOptionsContent?.emailTwo}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.phoneNumber
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-3">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											className="w-5 h-5"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path
													d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
													stroke="#ffffff"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</g>
										</svg>
									</div>
									<Link
										target="_self"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
										className="font-medium tracking-wide text-black hover:text-green-two"
									>
										{globalContext?.themesOptionsContent?.phoneNumber}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.phoneNumberTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-3">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											className="w-5 h-5"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path
													d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
													stroke="#ffffff"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</g>
										</svg>
									</div>
									<Link
										className="font-medium tracking-wide text-black hover:text-green-two"
										target="_self"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									>
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</Link>
								</motion.div>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							variants={stagger}
							whileInView="animate"
							className="mb-6"
						>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-6 text-2xl font-semibold text-center lg:text-left"
							>
								Address
							</motion.h3>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.address
										? "flex items-center lg:justify-start justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-two sm:mr-3">
									<svg
										fill="#ffffff"
										width="800px"
										height="800px"
										viewBox="-7 -7 46 46"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
									</svg>
								</div>
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									tailwindStyling="w-fit lg:max-w-xl text-center lg:text-left text-black text-paragraph"
								/>
							</motion.div>
						</motion.div>
					</div>
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
						className="w-full lg:w-1/2"
					>
						<Form className="container mx-auto py-10 md:max-w-xl">
							{loading ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold uppercase text-blue-default">
										Sending Message...
									</h3>
								</motion.div>
							) : messageSent ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase text-aqua-default">
										Message Sent!
									</h3>
								</motion.div>
							) : errorMessage ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase text-blue-darker">
										Error Message: Something went wrong with sending your
										message. Please try again.
									</h3>
								</motion.div>
							) : (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-6"
								>
									<motion.h2
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="max-w-xl mx-auto xl:mx-0 mb-6 text-center font-semibold leading-tight text-4xl lg:text-5xl text-black"
									>
										Get In Touch
									</motion.h2>
								</motion.div>
							)}

							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4"
							>
								<div className="flex flex-col sm:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.firstName && formik?.errors?.firstName ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.firstName}
												</p>
											</div>
										) : null}
										<Field
											id="firstName"
											name="firstName"
											placeholder="First Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.firstName}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.lastName && formik?.errors?.lastName ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.lastName}
												</p>
											</div>
										) : null}
										<Field
											id="lastName"
											name="lastName"
											placeholder="Last Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.lastName}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
								</div>
								<div className="flex flex-col sm:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.phoneNumber &&
										formik?.errors?.phoneNumber ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.phoneNumber}
												</p>
											</div>
										) : null}
										<Field
											id="phoneNumber"
											name="phoneNumber"
											type="number"
											placeholder="Phone Number"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.phoneNumber}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.subject && formik?.errors?.subject ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.subject}
												</p>
											</div>
										) : null}
										<Field
											id="subject"
											name="subject"
											type="text"
											placeholder="Subject"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.subject}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.email && formik?.errors?.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
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
										className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.selectedPrograms &&
									formik?.errors?.selectedPrograms ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
												{formik?.errors?.selectedPrograms}
											</p>
										</div>
									) : null}
									<Field
										as="select"
										id="selectedPrograms"
										name="selectedPrograms"
										placeholder="Pick a Service"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.selectedPrograms}
										className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
									>
										{globalContext?.ourProgramsLinks?.length > 0 ? (
											globalContext?.ourProgramsLinks?.map(
												(item: any, index: number) => (
													<Fragment key={index}>
														<option value={item?.node?.label}>
															{item?.node?.label}
														</option>
													</Fragment>
												)
											)
										) : (
											<></>
										)}
									</Field>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-48  text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker resize-none focus:ring-[1px] focus:ring-blue-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									<ReCAPTCHA
										sitekey={`6LfxDlApAAAAAATlCoXvFZjsdAm6mgpAeDt_HVBR`}
										onChange={handleReCaptchaChange}
									/>
								</motion.div>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									onClick={onFormSubmit}
									disabled={
										!formik?.values?.firstName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.phoneNumber ||
										!formik?.values?.selectedPrograms ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="w-full text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
									type="submit"
								>
									<span
										className={
											messageSent
												? `${styles.messageSent}`
												: `${styles.submitButton}`
										}
									>
										<h3 className="tracking-widest text-white uppercase text-sm">
											{loading
												? "Sending Message..."
												: messageSent
												? "Message Sent!"
												: errorMessage
												? "Sending Error!"
												: "Send Message"}
										</h3>
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
