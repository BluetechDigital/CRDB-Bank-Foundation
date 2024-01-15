import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* EXECUTIVE LEADERSHIPS  SLUGS (URLS) */
export const getAllExecutiveLeadershipsPostsSlugs =
	async (): Promise<ISlug> => {
		try {
			const content: DocumentNode = gql`
				{
					executiveLeadershipsSlugs: executiveLeaderships(
						where: {status: PUBLISH}
						last: 100
					) {
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

			return response?.data?.executiveLeadershipsSlugs?.nodes;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch the executive leaderships slugs"
			);
		}
	};

// Executive Leaderships Content
export const getAllExecutiveLeadershipsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				executiveLeadershipsContent: executiveLeaderships(
					where: {status: PUBLISH}
					last: 10
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

		return response?.data?.executiveLeadershipsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch executive leaderships content"
		);
	}
};
