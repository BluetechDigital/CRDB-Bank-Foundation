// Imports
import React, {FC, Fragment} from "react";
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
import MediaCenter from "../MediaCenter";
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
import SocialMediaGrid from "../SocialMediaGrid";
import TestimonialsGrid from "../TestimonialsGrid";
import JumboContentSection from "../JumboContentSection";
import BoardOfDirectorsGrid from "../BoardOfDirectorsGrid";
import MediaCenterCardLinks from "../MediaCenterCardLinks";
import JobPositionsThreeCards from "../JobPositionsThreeCards";
import ExecutiveLeadershipsGrid from "../ExecutiveLeadershipsGrid";
import IndividualExecutiveMember from "../IndividualExecutiveMember";
import TestimonialsTwoManualType from "../TestimonialsTwoManualType";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Faq`]: FAQ,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_Blogs`]: Blogs,
		[`${FlexibleContent}_NewsGrid`]: News,
		[`${FlexibleContent}_FaqGrid`]: FAQGrid,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_ErrorPage`]: ErrorPage,
		[`${FlexibleContent}_Newsletter`]: Newsletter,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_ContactInfo`]: ContactInfo,
		[`${FlexibleContent}_OurPartners`]: OurPartners,
		[`${FlexibleContent}_Maintenance`]: Maintenance,
		[`${FlexibleContent}_LinkedinCta`]: LinkedInCta,
		[`${FlexibleContent}_MediaCenter`]: MediaCenter,
		[`${FlexibleContent}_OurPrograms`]: OurPrograms,
		[`${FlexibleContent}_JobPositions`]: JobPositions,
		[`${FlexibleContent}_MainPrograms`]: MainPrograms,
		[`${FlexibleContent}_ContentImage`]: ContentImage,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_NewsThreeCards`]: NewsThreeCards,
		[`${FlexibleContent}_TestimonialsTwo`]: TestimonialsTwo,
		[`${FlexibleContent}_AchievementsTwo`]: AchievementsTwo,
		[`${FlexibleContent}_FeaturesGridTwo`]: FeaturesGridTwo,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_BlogsThreeCards`]: BlogsThreeCards,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_JumboContentSection`]: JumboContentSection,
		[`${FlexibleContent}_BoardOfDirectorsGrid`]: BoardOfDirectorsGrid,
		[`${FlexibleContent}_MediaCenterCardLinks`]: MediaCenterCardLinks,
		[`${FlexibleContent}_JobPositionsThreeCards`]: JobPositionsThreeCards,
		[`${FlexibleContent}_ExecutiveLeadershipsGrid`]: ExecutiveLeadershipsGrid,
		[`${FlexibleContent}_TestimonialsTwoManualType`]: TestimonialsTwoManualType,
		[`${FlexibleContent}_IndividualExecutiveMember`]: IndividualExecutiveMember,
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMapping[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMapping[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
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
