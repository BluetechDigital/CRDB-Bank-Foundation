/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"mydummysite.co.uk",
			"cmscrbankfoundation.com",
			"cmscrdbbankfoundation.local",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
