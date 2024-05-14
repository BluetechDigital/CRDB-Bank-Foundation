import {getInstagramFeed} from "../../pages/api/instagram-feed";

export const getAllInstagramFeedContent = async () => {
	const instagramFeed = await getInstagramFeed();
	// Use the instagramFeed data here
	return instagramFeed;
};
