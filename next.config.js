/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cmscrbankfoundation.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
