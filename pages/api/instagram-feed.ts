import {NextApiRequest, NextApiResponse} from "next";

interface InstagramFeedItem {
	// Define the structure of Instagram feed item
	// Adjust these properties according to the actual response structure
	id: string;
	// Add other properties as needed
}

let instagramFeed: InstagramFeedItem[] | null = null;

const fetchInstagramFeed = async () => {
	try {
		const url = `https://graph.instagram.com/me/${process.env.INSTAGRAM_FEED_MEDIA_TYPE}&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;

		const data = await fetch(url);
		const {data: feedData}: {data?: InstagramFeedItem[]} = await data.json();
		instagramFeed = feedData || [];
		console.log("Instagram feed content updated successfully");
	} catch (error) {
		console.error(error);
		throw new Error(
			"Something went wrong trying to fetch Instagram feed content"
		);
	}
};

export const getInstagramFeed = async () => {
	if (!instagramFeed) {
		await fetchInstagramFeed();
	}
	return instagramFeed;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		try {
			if (!instagramFeed) {
				await fetchInstagramFeed();
			}

			res.status(200).json({data: instagramFeed});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				error: "Something went wrong trying to fetch Instagram feed content",
			});
		}
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}

// Fetch and update every 24 hours
setInterval(fetchInstagramFeed, 24 * 60 * 60 * 1000);
// Fetch and update immediately
fetchInstagramFeed();
