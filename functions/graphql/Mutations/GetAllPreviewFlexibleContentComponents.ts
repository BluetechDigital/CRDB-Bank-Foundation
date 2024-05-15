// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												title
												video
												paragraph
												displayVideo
												heroBackgroundColor
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
												displaySection
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												displaySection
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
											... on ${postTypeFlexibleContent}_ContentImage {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
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
											... on ${postTypeFlexibleContent}_JumboContentSection {
												fieldGroupName
												displaySection
												contentSection {
													content {
														title
														subtitle
														paragraph
														imageLocation
														backgroundDisplay
														buttonLink {
															url
															title
															target
														}
														smallImage {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
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
											}
											... on ${postTypeFlexibleContent}_IndividualExecutiveMember {
            									fieldGroupName
												displaySection
												title
            									subtitle
            									paragraph
            									executiveName
            									executiveTitle
            									paragraphTitle
            									displayBackgroundIcon
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
												imageTwo {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_SocialMediaGrid {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_AchievementsTwo {
                      							fieldGroupName
												displaySection
                      							title
												backgroundColor
              									achievementsGrid {
              									  textOne
              									  textTwo
              									}
											}
											... on ${postTypeFlexibleContent}_OurPartners {
												fieldGroupName
												displaySection
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
											... on ${postTypeFlexibleContent}_OurPrograms {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												programsGrid {
													card {
														title
														paragraph
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
											}
											... on ${postTypeFlexibleContent}_MainPrograms {
            								  	fieldGroupName
												displaySection
            								  	title
            								  	subtitle
            								  	paragraph
            								  	highlightText
            								  	programsGrid {
													card {
														title
														paragraph
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
            								}
											... on ${postTypeFlexibleContent}_FeaturesGridTwo {
                      							fieldGroupName
												displaySection
                      							cardOne {
													title
													subtitle
													paragraph
													buttonLink {
														url
														title
														target
													}
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
														buttonLink {
															url
															title
															target
														}
                      								}
                      							}
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwoManualType {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												testimonialsContent {
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
											... on ${postTypeFlexibleContent}_JobPositionsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_JobPositionsThreeCardsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												highlightText
												itemsDisplayedPerPage
												gallery {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
												}
											}
											... on ${postTypeFlexibleContent}_MediaCenter {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												gallery {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
												}
											}
											... on ${postTypeFlexibleContent}_MediaCenterCardLinks {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												cardOne {
													title
													link {
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
                      							}
                      							cardTwo {
													title
													link {
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
                      							}
											}
											... on ${postTypeFlexibleContent}_Faq {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
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
												faqContent {
													card {
														title
														paragraph
													}
												}
											}
											... on ${postTypeFlexibleContent}_FaqGrid {
												fieldGroupName
												displaySection
              									title
              									paragraph
              									highlightText
              									faqGrid {
              										card {
              											title
              											paragraph
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												displaySection
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
												displaySection
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
											... on ${postTypeFlexibleContent}_Newsletter {
												fieldGroupName
												displaySection
												title
            									subtitle
            									textarea
            									paragraph
            									formTitle
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
												fieldGroupName
												displaySection
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_BoardOfDirectorsGrid {
												fieldGroupName
												displaySection
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_ExecutiveLeadershipsGrid {
												fieldGroupName
												displaySection
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_NewsGrid {
                								fieldGroupName
                								displaySection
                								title
                								paragraph
                								latestVideo
                								displayVideo
                								highlightText
												videoLink {
                									url
                									title
                									target
                								}
                								newsHighlight {
                									date
                									title
													readTime
													paragraph
													articleType
                									image {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
                									buttonLink {
                										url
                										title
                										target
                									}
                								}
                								videoBackgroundImage {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
                							}
											... on ${postTypeFlexibleContent}_NewsSingle {
                								fieldGroupName
                								displaySection
                								title
                								readTime
												paragraph
												articleType
                								boldParagraph
                							}
											... on ${postTypeFlexibleContent}_NewsThreeCards {
												fieldGroupName
												displaySection
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_BlogsGrid {
												fieldGroupName
												displaySection
												title
												highlightText
												paragraph
											}
											... on ${postTypeFlexibleContent}_BlogsThreeCards {
												fieldGroupName
												displaySection
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_CaseStudiesGrid {
												fieldGroupName
												displaySection
												title
												paragraph
												highlightText
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												displaySection
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
												displaySection
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
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error: unknown) {
		return loginRedirectURL;
	}
};
