import {getInstagramFeed} from "../../pages/api/instagram-feed";

export const getAllInstagramFeedContent = async () => {
	const instagramFeed = await getInstagramFeed();
	return instagramFeed;
};
