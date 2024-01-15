// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				news: globalProps?.news,
				blogs: globalProps?.blogs,
				mobileLinks: globalProps?.mobileLinks,
				managements: globalProps?.managements,
				caseStudies: globalProps?.caseStudies,
				testimonials: globalProps?.testimonials,
				newsThreeCards: globalProps?.newsThreeCards,
				copyrightLinks: globalProps?.copyrightLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				blogsThreeCards: globalProps?.blogsThreeCards,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				ourProgramsLinks: globalProps?.ourProgramsLinks,
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
