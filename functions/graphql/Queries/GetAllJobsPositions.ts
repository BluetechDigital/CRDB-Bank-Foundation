import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* JOBS POSITIONS SLUGS (URLS) */
export const getAllJobsPositionsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsSlugs: jobPositions(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.jobsPositionsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the jobs positions slugs"
		);
	}
};

// All Jobs Positions Content
export const getAllJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
				) {
					edges {
						node {
							slug
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};

// Latest Three Jobs Positions Content
export const getThreeJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(where: {status: PUBLISH}, first: 3) {
					edges {
						node {
							slug
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};

/* JOBS POSITIONS TAXONOMIES (CONTENT) */
// Managements Taxonomy
export const getAllJobsPositionsManagementsSlugs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				managementsTaxonomySlugs: managements(last: 100) {
					edges {
						node {
							jobPositions(where: {status: PUBLISH}) {
								nodes {
									slug
									modified
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.managementsTaxonomySlugs?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs for bravo logistics taxonomy"
		);
	}
};

// All Managements Taxonomy Jobs Positions Content
export const getAllManagementsTaxonomyJobs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				managementsTaxonomyJobs: managements {
					edges {
						node {
							jobPositions(last: 100, where: {status: PUBLISH}) {
								edges {
									node {
										slug
										excerpt
										title(format: RENDERED)
										featuredImage {
											node {
												altText
												sourceUrl
												mediaDetails {
													height
													width
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		let initialArray: any[] | undefined;
		const finalArray: any = [];

		// Setting the initial Array
		initialArray = response?.data?.managementsTaxonomyJobs?.edges;

		// Managements Taxonomy Dynamic Links
		initialArray?.forEach((keys: any) => {
			keys?.node?.jobPositions?.edges?.forEach((subKeys: any) => {
				const object = {
					slug: subKeys?.node?.slug,
					title: subKeys?.node?.title,
					excerpt: subKeys?.node?.excerpt,
					featuredImage: subKeys?.node?.featuredImage,
				};

				if (object?.slug && object?.excerpt && object?.title) {
					finalArray.push(object);
				}
			});
		});

		return finalArray;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all jobs post for Managements taxonomy"
		);
	}
};

// Operations Teams Taxonomy
export const getAllJobsPositionsOperationsTeamsSlugs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				operationsTeamsTaxonomySlugs: operationsTeams(last: 100) {
					edges {
						node {
							jobPositions(where: {status: PUBLISH}) {
								nodes {
									slug
									modified
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.operationsTeamsTaxonomySlugs?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs for Agricoms taxonomy"
		);
	}
};

// All Operations Teams Taxonomy Jobs Positions Content
export const getAllOperationsTeamsTaxonomyJobs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				operationsTeamsTaxonomyJobs: operationsTeams {
					edges {
						node {
							jobPositions(last: 100, where: {status: PUBLISH}) {
								edges {
									node {
										slug
										excerpt
										title(format: RENDERED)
										featuredImage {
											node {
												altText
												sourceUrl
												mediaDetails {
													height
													width
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		let initialArray: any[] | undefined;
		const finalArray: any = [];

		// Setting the initial Array
		initialArray = response?.data?.operationsTeamsTaxonomyJobs?.edges;

		// Managements Taxonomy Dynamic Links
		initialArray?.forEach((keys: any) => {
			keys?.node?.jobPositions?.edges?.forEach((subKeys: any) => {
				const object = {
					slug: subKeys?.node?.slug,
					title: subKeys?.node?.title,
					excerpt: subKeys?.node?.excerpt,
					featuredImage: subKeys?.node?.featuredImage,
				};

				if (object?.slug && object?.excerpt && object?.title) {
					finalArray.push(object);
				}
			});
		});

		return finalArray;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all jobs post for operations teams taxonomy"
		);
	}
};
