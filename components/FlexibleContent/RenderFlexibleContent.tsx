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
				content?.content?.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_VideoBlock` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_ContentImage` ? (
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
						  `${FlexibleContent}_JumboContentSection` ? (
							<>
								<JumboContentSection
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_IndividualExecutiveMember` ? (
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
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_AchievementsTwo` ? (
							<>
								<AchievementsTwo
									title={item?.title}
									backgroundColor={item?.backgroundColor}
									achievementsGrid={item?.achievementsGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPrograms` ? (
							<>
								<OurPrograms
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									programsGrid={item?.programsGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_MainPrograms` ? (
							<>
								<MainPrograms
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									programsGrid={item?.programsGrid}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPartners` ? (
							<>
								<OurPartners
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_FeaturesGridTwo` ? (
							<>
								<FeaturesGridTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsGrid` ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsTwo` ? (
							<>
								<TestimonialsTwo
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JobPositionsGrid` ? (
							<>
								<JobPositions
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JobPositionsThreeCardsGrid` ? (
							<>
								<JobPositionsThreeCards
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_FaqGrid` ? (
							<>
								<FAQGrid
									title={item?.title}
									faqGrid={item?.faqGrid}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_LinkedinCta` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_BoardOfDirectorsGrid` ? (
							<>
								<BoardOfDirectorsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ExecutiveLeadershipsGrid` ? (
							<>
								<ExecutiveLeadershipsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_NewsGrid` ? (
							<>
								<News
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_NewsThreeCards` ? (
							<>
								<NewsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BlogsGrid` ? (
							<>
								<Blogs
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_BlogsThreeCards` ? (
							<>
								<BlogsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_CaseStudiesGrid` ? (
							<></>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
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
