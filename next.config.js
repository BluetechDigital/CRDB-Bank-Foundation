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
		],
	},
};

module.exports = nextConfig;
