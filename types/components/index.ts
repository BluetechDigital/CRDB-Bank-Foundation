// Components
export type ICTA = {
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
	paragraph: string;
	latestVideo: string;
	displayVideo: boolean;
	highlightText: string;
	newsHighlight: {
		date: string;
		readTime: string;
		title: string;
		paragraph: string;
		articleType: string;
		buttonLink: {
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
	};
	videoBackgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IHero = {
	video: string;
	title: string;
	paragraph: string;
	displayVideo: boolean;
	heroBackgroundColor: string;
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
	paragraph: string;
	highlightText: string;
};
export type IFAQGrid = {
	title: string;
	paragraph: string;
	highlightText: string;
	faqGrid: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type IHeroTwo = {
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
export type IGallery = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
	itemsDisplayedPerPage: string;
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
export type IMediaCenter = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
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
export type INewsletter = {
	title: string;
	subtitle: string;
	textarea: string;
	paragraph: string;
	formTitle: string;
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
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
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
	paragraph: string;
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
export type IJobPositions = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
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
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
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
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
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
export type ISocialMediaGrid = {
	title: string;
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
export type IJumboContentSection = {
	contentSection: [
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
export type IMediaCenterCardLinks = {
	title: string;
	subtitle: string;
	paragraph: string;
	cardOne: {
		title: string;
		link: {
			url: string;
			title: string;
			target: string;
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
	cardTwo: {
		title: string;
		link: {
			url: string;
			title: string;
			target: string;
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
export type ITestimonialsTwoManualType = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	testimonialsContent: [
		{
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
		}
	];
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
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
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};

// Cards
export type IFAQCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type INewsCard = {
	slug: string;
	date: string;
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
export type IFAQGridCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type IJobPositionsCard = {
	slug: string;
	title: string;
	paragraph: string;
	tailwindStyling: string;
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
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
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
export type IJobPositionsThreeCardsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
};
export type IMediaCenterCardLinksNewsCard = {
	slug: string;
	title: string;
	excerpt: string;
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
	setMenuActive: any;
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
export type INewsVideoElement = {
	latestVideo: string;
	displayVideo: boolean;
	videoBackgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	tailwindColor: string;
};
export type IJobsCategoryButton = {
	title: string;
	active: boolean;
	onClick: any;
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
