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
		],
	},
};

module.exports = nextConfig;
