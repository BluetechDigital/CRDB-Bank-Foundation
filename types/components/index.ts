// Components
export type ICTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IFAQ = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	faqContent: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type INews = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IHero = {
	video: string;
	title: string;
	paragraph: string;
	displayVideo: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	rightSideImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IBlogs = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: string;
};
export type IGallery = {
	title: string;
	highlightText: string;
	paragraph: string;
	gallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	highlightText: string;
	displayYoutubeIcon: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		sourceUrl: string;
	};
};
export type IContactInfo = {
	title: string;
	paragraph: string;
};
export type ILinkedInCta = {
	title: string;
	highlightText: string;
	backgroundColor: string;
	highlightTextColor: string;
	displayLinkedinIcon: Boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ICaseStudies = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IContactForm = {
	title: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOurPartners = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageGrid: [
		{
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IMainPrograms = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
	programsGrid: [
		{
			card: {
				title: string;
				paragraph: string;
				Link: {
					url: string;
					title: string;
					target: string;
				};
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IOurPrograms = {
	title: string;
	subtitle: string;
	paragraph: string;
	programsGrid: [
		{
			card: {
				title: string;
				paragraph: string;
				Link: {
					url: string;
					title: string;
					target: string;
				};
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type INewsThreeCards = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IFeaturesGridTwo = {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				backgroundColor: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type ITestimonialsTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IAchievementsTwo = {
	title: string;
	backgroundColor: string;
	achievementsGrid: [
		{
			textOne: string;
			textTwo: string;
		}
	];
};
export type IBlogsThreeCards = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IBoardOfDirectors = {
	title: string;
	italic: string;
	paragraph: string;
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
};
export type IEnquiryRequestForm = {
	title: string;
	contentOneOpen: boolean;
	contentTwoOpen: boolean;
	contentThreeOpen: boolean;
};
export type IJumboContentSection = {
	jumboContentSection: [
		{
			content: {
				title: string;
				subtitle: string;
				paragraph: string;
				imageLocation: string;
				backgroundDisplay: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				smallImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
};
export type IBoardOfDirectorsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
};
export type IExecutiveLeadershipsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
};
export type IIndividualExecutiveMember = {
	title: string;
	subtitle: string;
	paragraph: string;
	executiveName: string;
	executiveTitle: string;
	paragraphTitle: string;
	displayBackgroundIcon: boolean;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Cards
export type IFAQCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type INewsCard = {
	slug: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IBlogsCard = {
	uri: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type ITestimonialsCard = {
	name: string;
	jobTitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IBoardOfDirectorsCard = {
	slug: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IFeaturesGridContentCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
};
export type IJumboContentSectionCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	backgroundDisplay: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IExecutiveLeadershipsCard = {
	slug: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IBackHoverButton = {
	link: string;
};
export type IButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	tailwindColor: string;
};
export type IBackToVacanciesButton = {
	link: string;
	title: string;
	fullWidth: boolean;
};
export type IYoutubeButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	displayYoutubeIcon: boolean;
};
export type ITestimonialsTwoCardElement = {
	name: string;
	jobTitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};