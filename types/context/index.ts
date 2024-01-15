export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type INews = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
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
	}
];
export type IBlogs = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
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
	}
];
export type IContent = [
	{
		content: any;
	}
];
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ICaseStudies = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
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
	}
];
export type ITestimonials = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
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
	}
];
export type ICopyrightLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IManagementsJobs = [
	{
		node: {
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
	}
];
export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IOurProgramsLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IOperationsTeamsJobs = [
	{
		node: {
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
	}
];
export type IBoardOfDirectorsGrid = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	textarea: string;
	twitterLink: string;
	phoneNumber: string;
	linkedinLink: string;
	facebookLink: string;
	instagramLink: string;
	copyrightText: string;
	phoneNumberTwo: string;
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	menuColumnThree: {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type IExecutiveLeadershipsGrid = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

/* CONTEXT PROVIDERS  */
export type IPostTypes = {
	news: string;
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
	caseStudies: string;
	testimonials: string;
	jobPositions: string;
	boardofDirectors: string;
	executiveLeaderships: string;
};
export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IGlobalProps = {
	news: INews;
	blogs: IBlogs;
	newsThreeCards: INews;
	blogsThreeCards: IBlogs;
	mobileLinks: IMobileLinks;
	caseStudies: ICaseStudies;
	testimonials: ITestimonials;
	managements: IManagementsJobs;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	ourProgramsLinks: IOurProgramsLinks;
	operationsTeamsJobs: IOperationsTeamsJobs;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
};
export type IGlobalContext = {
	news: INews;
	blogs: IBlogs;
	newsThreeCards: INews;
	blogsThreeCards: IBlogs;
	mobileLinks: IMobileLinks;
	caseStudies: ICaseStudies;
	testimonials: ITestimonials;
	managements: IManagementsJobs;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	ourProgramsLinks: IOurProgramsLinks;
	operationsTeamsJobs: IOperationsTeamsJobs;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
};
export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};
