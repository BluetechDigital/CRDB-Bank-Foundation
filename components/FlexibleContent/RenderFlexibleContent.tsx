// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import News from "../News";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import VideoBlock from "../VideoBlock";
import ContactInfo from "../ContactInfo";
import OurPartners from "../OurPartners";
import Maintenance from "../Maintenance";
import LinkedInCta from "../LinkedInCta";
import ErrorPage from "../Global/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import NewsThreeCards from "../NewsThreeCards";
import FeaturesGridTwo from "../FeaturesGridTwo";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
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
							<></>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_BoardOfDirectorsGrid` ? (
							<></>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ExecutiveLeadershipsGrid` ? (
							<></>
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
							<></>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_BlogsThreeCards` ? (
							<></>
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
