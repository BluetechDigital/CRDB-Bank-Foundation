/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "cmscrbankfoundation.com",
				port: "",
				pathname: "/wp-content/uploads/**",
			},
			{
				protocol: "https",
				hostname: "cmscbf.com",
				port: "",
				pathname: "/wp-content/uploads/**",
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
