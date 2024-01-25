// Imports
import "@/styles/globals.scss";
import {motion} from "framer-motion";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getCareerSublinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getAboutUsSublinks,
	getOurProgramsSublinks,
	getNewsInsightSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {
	getAllNewsContent,
	getThreeNewsContent,
} from "@/functions/graphql/Queries/GetAllNews";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {
	getAllBlogsContent,
	getThreeBlogsContent,
} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllCaseStudiesContent} from "@/functions/graphql/Queries/GetAllCaseStudies";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";
import {
	getAllJobsPositionsContent,
	getAllManagementsTaxonomyJobs,
	getAllOperationsTeamsTaxonomyJobs,
} from "@/functions/graphql/Queries/GetAllJobsPositions";

// Components
import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";
import {getAllBoardOfDirectorsContent} from "@/functions/graphql/Queries/GetAllBoardOfDirectors";
import {getAllExecutiveLeadershipsContent} from "@/functions/graphql/Queries/GetAllExecutiveLeaderships";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	return (
		<>
			<ApolloProvider client={client}>
				<GlobalContextProvider globalProps={globalProps}>
					<motion.div
						exit={{
							opacity: 0,
						}}
						initial="initial"
						animate="animate"
					>
						<PageLoadingSquares />
						{/* Cookie Policy Pop Up */}
						<PostHogContextProvider />
						<Component {...pageProps} />
					</motion.div>
				</GlobalContextProvider>
			</ApolloProvider>
		</>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const promises: Promise<any>[] = [
		getMobileLinks(),
		getCareerSublinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getAboutUsSublinks(),
		getOurProgramsSublinks(),
		getNewsInsightSublinks(),
		getThemesOptionsContent(),
		getAllNewsContent(),
		getAllBlogsContent(),
		getAllCaseStudiesContent(),
		getThreeNewsContent(),
		getThreeBlogsContent(),
		getAllTestimonialsContent(),
		getAllJobsPositionsContent(),
		getAllManagementsTaxonomyJobs(),
		getAllOperationsTeamsTaxonomyJobs(),
		getAllBoardOfDirectorsContent(),
		getAllExecutiveLeadershipsContent(),
	];

	const [
		mobileLinks,
		careerSublinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		aboutUsSublinks,
		ourProgramsLinks,
		newsInsightSublinks,
		themesOptionsContent,
		news,
		blogs,
		caseStudies,
		newsThreeCards,
		blogsThreeCards,
		testimonials,
		jobsPositions,
		managementsJobs,
		operationsTeamsJobs,
		boardOfDirectorsGrid,
		executiveLeadershipsGrid,
	] = await Promise.all(promises);

	const globalProps: IGlobalProps = {
		news: news,
		blogs: blogs,
		mobileLinks: mobileLinks,
		caseStudies: caseStudies,
		testimonials: testimonials,
		jobsPositions: jobsPositions,
		careerSublinks: careerSublinks,
		copyrightLinks: copyrightLinks,
		newsThreeCards: newsThreeCards,
		blogsThreeCards: blogsThreeCards,
		managementsJobs: managementsJobs,
		aboutUsSublinks: aboutUsSublinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		ourProgramsLinks: ourProgramsLinks,
		newsInsightSublinks: newsInsightSublinks,
		operationsTeamsJobs: operationsTeamsJobs,
		boardOfDirectorsGrid: boardOfDirectorsGrid,
		themesOptionsContent: themesOptionsContent,
		executiveLeadershipsGrid: executiveLeadershipsGrid,
	};

	return {
		pageProps,
		globalProps,
	};
};
