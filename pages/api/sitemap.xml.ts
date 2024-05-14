// Imports
import {
	getAllJobsPositionsSlugs,
	getAllOperationsTeamsTaxonomyJobs,
	getAllJobsPositionsManagementsSlugs,
} from "@/functions/graphql/Queries/GetAllJobsPositions";
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllNewsPostsSlugs} from "@/functions/graphql/Queries/GetAllNews";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllBlogsPostsSlugs} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllCaseStudiesSlugs} from "@/functions/graphql/Queries/GetAllCaseStudies";
import {getAllBoardOfDirectorsPostsSlugs} from "@/functions/graphql/Queries/GetAllBoardOfDirectors";
import {getAllExecutiveLeadershipsPostsSlugs} from "@/functions/graphql/Queries/GetAllExecutiveLeaderships";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [
		pagesSlugs,
		blogsPostsSlugs,
		caseStudiesPostsSlugs,
		newsPostsSlugs,
		boardOfDirectorsPostsSlugs,
		allJobsPositionsPostsSlugs,
		executiveLeadershipsPostsSlugs,
		managementsJobsPositionsPostsSlugs,
		operationsTeamsJobsPositionsPostsSlugs,
	] = await Promise.all([
		getAllPagesSlugs(),
		getAllBlogsPostsSlugs(),
		getAllCaseStudiesSlugs(),
		getAllNewsPostsSlugs(),
		getAllBoardOfDirectorsPostsSlugs(),
		getAllJobsPositionsSlugs(),
		getAllExecutiveLeadershipsPostsSlugs(),
		getAllOperationsTeamsTaxonomyJobs(),
		getAllJobsPositionsManagementsSlugs(),
	]);

	/* Pages, News  Posts Arrays */
	const pagesLinks: any = [];
	const newsPostsLinks: any = [];
	const blogsPostsLinks: any = [];
	const caseStudiesPostsLinks: any = [];
	const allJobsPositionsPostsLinks: any = [];
	const boardOfDirectorsPostsLinks: any = [];
	const executiveLeadershipsPostsLinks: any = [];
	const managementsJobsPositionsPostsLinks: any = [];
	const operationsTeamsJobsPositionsPostsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Blogs Dynamic Links
	blogsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/blogs/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		blogsPostsLinks.push(object);
	});

	// News Dynamic Links
	newsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/news/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		newsPostsLinks.push(object);
	});

	// Case Studies Dynamic Links
	caseStudiesPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/case-studies/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		caseStudiesPostsLinks.push(object);
	});

	// All Jobs Positions Dynamic Links
	allJobsPositionsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/case-studies/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		allJobsPositionsPostsLinks.push(object);
	});

	// Board Of Directors Dynamic Links
	boardOfDirectorsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/board-directors/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		boardOfDirectorsPostsLinks.push(object);
	});

	// Executive Leaderships Dynamic Links
	executiveLeadershipsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/executive-leadership/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		executiveLeadershipsPostsLinks.push(object);
	});

	// Managements Taxonomy Dynamic Links
	managementsJobsPositionsPostsSlugs?.map((keys: any) => {
		keys?.node?.jobPositions?.nodes?.map((subKeys: any) => {
			const subSlugs = subKeys?.slug;
			const object = {
				url: `/job-positions/${subSlugs}`,
				changefreq: "daily",
				lastmod: `${subKeys?.modified}`,
				priority: 0.8,
			};

			managementsJobsPositionsPostsLinks.push(object);
		});
	});

	// Operations Teams Taxonomy Dynamic Links
	operationsTeamsJobsPositionsPostsSlugs?.map((keys: any) => {
		keys?.node?.jobPositions?.nodes?.map((subKeys: any) => {
			const subSlugs = subKeys?.slug;

			const object = {
				url: `/job-positions/${subSlugs}`,
				changefreq: "daily",
				lastmod: `${subKeys?.modified}`,
				priority: 0.8,
			};

			operationsTeamsJobsPositionsPostsLinks.push(object);
		});
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...newsPostsLinks,
		...blogsPostsLinks,
		...caseStudiesPostsLinks,
		...boardOfDirectorsPostsLinks,
		...executiveLeadershipsPostsLinks,
		...managementsJobsPositionsPostsLinks,
		...operationsTeamsJobsPositionsPostsLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
