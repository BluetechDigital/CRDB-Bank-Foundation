export const getAllInstagramFeedContent = async () => {
	try {
		const url = `https://graph.instagram.com/me/${process.env.INSTAGRAM_FEED_MEDIA_TYPE}&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;

		const data = await fetch(url);
		const instagramFeed = await data.json();

		return instagramFeed?.data;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch testimonials content"
		);
	}
};
