import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												title
												video
												paragraph
												displayVideo
												buttonLink {
													url
													title
													target
												}
												buttonLinkTwo {
													url
													title
													target
												}
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												rightSideImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												title
												video
												subtitle
												paragraph
												displayVideo
												highlightText
												displayYoutubeIcon
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
            										sourceUrl
              									}
											}
											... on ${postTypeFlexibleContent}_OurPartners {
												fieldGroupName
												title
												subtitle
												paragraph
												imageGrid {
													link {
														url
														title
														target
													}
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
											... on ${postTypeFlexibleContent}_FeaturesGridTwo {
                      							fieldGroupName
                      							cardOne {
                      							  title
                      							  subtitle
                      							  paragraph
                      							}
                      							cardTwo {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							lastCard {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							gridContent {
                      							  card {
                      							    title
                      							    subtitle
                      							    paragraph
                      							    backgroundColor
                      							  }
                      							}
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												title
												paragraph
												highlightText
												gallery {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
												}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_LinkedinCta {
												fieldGroupName
												title
												highlightText
												backgroundColor
												highlightTextColor
												displayLinkedinIcon
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_BoardOfDirectorsGrid {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_ExecutiveLeadershipsGrid {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_NewsGrid {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_NewsThreeCards {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_BlogsGrid {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_BlogsThreeCards {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_CaseStudiesGrid {
												fieldGroupName
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
												sourceUrl
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

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
