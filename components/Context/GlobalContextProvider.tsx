// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	// console.log(globalProps?.operationsTeamsJobs);
	return (
		<GlobalContext.Provider
			value={{
				news: globalProps?.news,
				blogs: globalProps?.blogs,
				mobileLinks: globalProps?.mobileLinks,
				caseStudies: globalProps?.caseStudies,
				testimonials: globalProps?.testimonials,
				jobsPositions: globalProps?.jobsPositions,
				careerSublinks: globalProps?.careerSublinks,
				newsThreeCards: globalProps?.newsThreeCards,
				copyrightLinks: globalProps?.copyrightLinks,
				managementsJobs: globalProps?.managementsJobs,
				footerMenuLinks: globalProps?.footerMenuLinks,
				blogsThreeCards: globalProps?.blogsThreeCards,
				aboutUsSublinks: globalProps?.aboutUsSublinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				ourProgramsLinks: globalProps?.ourProgramsLinks,
				newsInsightSublinks: globalProps?.newsInsightSublinks,
				operationsTeamsJobs: globalProps?.operationsTeamsJobs,
				themesOptionsContent: globalProps?.themesOptionsContent,
				boardOfDirectorsGrid: globalProps?.boardOfDirectorsGrid,
				executiveLeadershipsGrid: globalProps?.executiveLeadershipsGrid,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
