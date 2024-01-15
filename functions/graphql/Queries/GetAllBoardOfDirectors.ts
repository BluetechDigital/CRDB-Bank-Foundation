import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* BOARD OF DIRECTORS SLUGS (URLS) */
export const getAllBoardOfDirectorsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				boardofDirectorsSlugs: boardofDirectors(
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

		return response?.data?.boardofDirectorsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the board of directors slugs"
		);
	}
};

// Board Of Directors Content
export const getAllBoardOfDirectorsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				boardofDirectorsContent: boardofDirectors(
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

		return response?.data?.boardofDirectorsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch board of directors content"
		);
	}
};
