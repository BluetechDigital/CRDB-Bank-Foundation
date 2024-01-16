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
	getNavbarMenuLinks,
	getFooterMenuLinks,
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
	const mobileLinks: any = await getMobileLinks();
	const copyrightLinks: any = await getCopyrightLinks();
	const navbarMenuLinks: any = await getNavbarMenuLinks();
	const footerMenuLinks: any = await getFooterMenuLinks();
	const ourProgramsLinks: any = await getOurProgramsSublinks();
	const newsInsightSublinks: any = await getNewsInsightSublinks();
	const themesOptionsContent: any = await getThemesOptionsContent();

	const news: any = await getAllNewsContent();
	const blogs: any = await getAllBlogsContent();
	const caseStudies: any = await getAllCaseStudiesContent();
	const newsThreeCards: any = await getThreeNewsContent();
	const blogsThreeCards: any = await getThreeBlogsContent();
	const testimonials: any = await getAllTestimonialsContent();
	const managementsJobs: any = await getAllManagementsTaxonomyJobs();
	const operationsTeamsJobs: any = await getAllOperationsTeamsTaxonomyJobs();
	const boardOfDirectorsGrid: any = await getAllBoardOfDirectorsContent();
	const executiveLeadershipsGrid: any =
		await getAllExecutiveLeadershipsContent();

	const globalProps: IGlobalProps = {
		news: news,
		blogs: blogs,
		mobileLinks: mobileLinks,
		caseStudies: caseStudies,
		testimonials: testimonials,
		managements: managementsJobs,
		copyrightLinks: copyrightLinks,
		newsThreeCards: newsThreeCards,
		blogsThreeCards: blogsThreeCards,
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
