import {gql} from "@apollo/client";
import {client} from "@/config/apollo";

// Navbar Menu Links
export const getNavbarMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				navbarMenuLinks: menuItems(where: {location: PRIMARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.navbarMenuLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Mobile Navbar links
export const getMobileLinks = async () => {
	try {
		const content: any = gql`
			{
				mobileLinks: menuItems(where: {location: MOBILE_LINKS}, first: 10) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mobileLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch mobile links content"
		);
	}
};

// Navbar About Us Sublinks
export const getAboutUsSublinks = async () => {
	try {
		const content: any = gql`
			{
				aboutUsSublinks: menuItems(where: {location: ABOUT_SUBLINKS}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.aboutUsSublinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Navbar Our Programs Sublinks
export const getOurProgramsSublinks = async () => {
	try {
		const content: any = gql`
			{
				ourServicesSublinks: menuItems(
					where: {location: OUR_PROGRAMS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.ourServicesSublinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch our Programs Sublinks content"
		);
	}
};

// Media Center Sublinks
export const getMediaCenterSublinks = async () => {
	try {
		const content: any = gql`
			{
				mediaCenterSublinks: menuItems(
					where: {location: MEDIA_CENTER_SUBLINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mediaCenterSublinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch news insight sublinks content"
		);
	}
};

// Career Sublinks
export const getCareerSublinks = async () => {
	try {
		const content: any = gql`
			{
				careerSublinks: menuItems(
					where: {location: CAREER_SUBLINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.careerSublinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch career sublinks content"
		);
	}
};

// Footer Copyright Links
export const getCopyrightLinks = async () => {
	try {
		const content: any = gql`
			{
				copyrightLinks: menuItems(
					where: {location: COPYRIGHT_LINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.copyrightLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch copyright links content"
		);
	}
};

// Footer Menu Links
export const getFooterMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				footerMenuLinks: menuItems(where: {location: FOOTER}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.footerMenuLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
};
