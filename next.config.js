/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"cmscrbankfoundation.com",
			"cmscrdbbankfoundation.local",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
