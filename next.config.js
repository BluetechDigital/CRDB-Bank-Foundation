/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cmscrbankfoundation.com",
				port: "",
				pathname: "/wp-content/uploads/**",
			},
			{
				protocol: "https",
				hostname: "vzt.nmy.mybluehost.me",
				port: "",
				pathname: "",
			},
			{
				protocol: "https",
				hostname: "**.cdninstagram.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
