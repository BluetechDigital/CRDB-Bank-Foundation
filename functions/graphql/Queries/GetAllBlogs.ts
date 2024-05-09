import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* BLOGS SLUGS (URLS) */
export const getAllBlogsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				blogsSlugs: posts(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.blogsSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the blogs slugs");
	}
};

// All Blogs Content
export const getAllBlogsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				blogsContent: posts(where: {status: PUBLISH}, last: 100) {
					edges {
						node {
							id
							slug
							date
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

		return response?.data?.blogsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all the blogs posts");
	}
};
