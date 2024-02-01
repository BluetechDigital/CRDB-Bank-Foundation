/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"mydummysite.co.uk",
			"vzt.nmy.mybluehost.me",
			"cmscrbankfoundation.com",
			"cmscrdbbankfoundation.local",
		],
	},
};

module.exports = nextConfig;
