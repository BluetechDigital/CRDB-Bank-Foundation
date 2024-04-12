// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import FAQ from "../FAQ";
import Hero from "../Hero";
import News from "../News";
import Blogs from "../Blogs";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import FAQGrid from "../FAQGrid";
import Newsletter from "../Newsletter";
import VideoBlock from "../VideoBlock";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";
import OurPartners from "../OurPartners";
import Maintenance from "../Maintenance";
import LinkedInCta from "../LinkedInCta";
import OurPrograms from "../OurPrograms";
import JobPositions from "../JobPositions";
import MainPrograms from "../MainPrograms";
import ContentImage from "../ContentImage";
import ErrorPage from "../Global/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import NewsThreeCards from "../NewsThreeCards";
import TestimonialsTwo from "../TestimonialsTwo";
import AchievementsTwo from "../AchievementsTwo";
import FeaturesGridTwo from "../FeaturesGridTwo";
import BlogsThreeCards from "../BlogsThreeCards";
import TestimonialsGrid from "../TestimonialsGrid";
import JumboContentSection from "../JumboContentSection";
import BoardOfDirectorsGrid from "../BoardOfDirectorsGrid";
import JobPositionsThreeCards from "../JobPositionsThreeCards";
import ExecutiveLeadershipsGrid from "../ExecutiveLeadershipsGrid";
import IndividualExecutiveMember from "../IndividualExecutiveMember";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, index: number) => (
					<section key={index}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` &&
						item?.displaySection ? (
							<>
								<Hero
									video={item?.video}
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayVideo={item?.displayVideo}
									buttonLinkTwo={item?.buttonLinkTwo}
									rightSideImage={item?.rightSideImage}
									backgroundImage={item?.backgroundImage}
									heroBackgroundColor={item?.heroBackgroundColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` &&
						  item?.displaySection ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` &&
						  item?.displaySection ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_VideoBlock` &&
						  item?.displaySection ? (
							<>
								<VideoBlock
									title={item?.title}
									video={item?.video}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayVideo={item?.displayVideo}
									highlightText={item?.highlightText}
									displayYoutubeIcon={item?.displayYoutubeIcon}
									videoBackgroundImage={item?.videoBackgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContentImage` &&
						  item?.displaySection ? (
							<>
								<ContentImage
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_JumboContentSection` &&
						  item?.displaySection ? (
							<>
								<JumboContentSection
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_IndividualExecutiveMember` &&
						  item?.displaySection ? (
							<>
								<IndividualExecutiveMember
									title={item?.title}
									image={item?.image}
									imageTwo={item?.imageTwo}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									executiveName={item?.executiveName}
									executiveTitle={item?.executiveTitle}
									paragraphTitle={item?.paragraphTitle}
									displayBackgroundIcon={item?.displayBackgroundIcon}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_AchievementsTwo` &&
						  item?.displaySection ? (
							<>
								<AchievementsTwo
									title={item?.title}
									backgroundColor={item?.backgroundColor}
									achievementsGrid={item?.achievementsGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPrograms` &&
						  item?.displaySection ? (
							<>
								<OurPrograms
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									programsGrid={item?.programsGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_MainPrograms` &&
						  item?.displaySection ? (
							<>
								<MainPrograms
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									programsGrid={item?.programsGrid}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPartners` &&
						  item?.displaySection ? (
							<>
								<OurPartners
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FeaturesGridTwo` &&
						  item?.displaySection ? (
							<>
								<FeaturesGridTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TestimonialsGrid` &&
						  item?.displaySection ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TestimonialsTwo` &&
						  item?.displaySection ? (
							<>
								<TestimonialsTwo
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_JobPositionsGrid` &&
						  item?.displaySection ? (
							<>
								<JobPositions
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_JobPositionsThreeCardsGrid` &&
						  item?.displaySection ? (
							<>
								<JobPositionsThreeCards
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` &&
						  item?.displaySection ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
									itemsDisplayedPerPage={item?.itemsDisplayedPerPage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` &&
						  item?.displaySection ? (
							<>
								<FAQ
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									faqContent={item?.faqContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FaqGrid` &&
						  item?.displaySection ? (
							<>
								<FAQGrid
									title={item?.title}
									faqGrid={item?.faqGrid}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` &&
						  item?.displaySection ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_LinkedinCta` &&
						  item?.displaySection ? (
							<>
								<LinkedInCta
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
									highlightTextColor={item?.highlightTextColor}
									displayLinkedinIcon={item?.displayLinkedinIcon}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Newsletter` &&
						  item?.displaySection ? (
							<>
								<Newsletter
									title={item?.title}
									subtitle={item?.subtitle}
									textarea={item?.textarea}
									paragraph={item?.paragraph}
									formTitle={item?.formTitle}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` &&
						  item?.displaySection ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` &&
						  item?.displaySection ? (
							<>
								<ContactForm title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_BoardOfDirectorsGrid` &&
						  item?.displaySection ? (
							<>
								<BoardOfDirectorsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ExecutiveLeadershipsGrid` &&
						  item?.displaySection ? (
							<>
								<ExecutiveLeadershipsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_NewsGrid` &&
						  item?.displaySection ? (
							<>
								<News
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_NewsThreeCards` &&
						  item?.displaySection ? (
							<>
								<NewsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BlogsGrid` &&
						  item?.displaySection ? (
							<>
								<Blogs
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BlogsThreeCards` &&
						  item?.displaySection ? (
							<>
								<BlogsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_CaseStudiesGrid` &&
						  item?.displaySection ? (
							<></>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` &&
						  item?.displaySection ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ErrorPageContent` &&
						  item?.displaySection ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
