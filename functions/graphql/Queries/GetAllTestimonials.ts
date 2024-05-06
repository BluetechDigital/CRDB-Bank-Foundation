import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* TESTIMONIALS */
// Testimonials Content
export const getAllTestimonialsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				testimonialsContent: testimonials(where: {status: PUBLISH}, last: 100) {
					edges {
						node {
							testimonialReview {
								name
								jobTitle
								paragraph
								image {
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

		return response?.data?.testimonialsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch testimonials content"
		);
	}
};

export const getAllTestimonialsContentType = async (type: string) => {
	try {
		const content: DocumentNode = gql`
			{
				testimonialsContent: testimonials(
					where: {status: PUBLISH, tag: "${type}"}
					last: 100
				) {
					edges {
						node {
							testimonialReview {
								name
								jobTitle
								paragraph
								image {
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

		return response?.data?.testimonialsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch testimonials content"
		);
	}
};
