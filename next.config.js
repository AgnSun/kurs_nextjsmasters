/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/collections",
				destination: "/collections/summer-vibes",
				permanent: false,
			},
			{
				source: "/categories",
				destination: "/categories/t-shirts",
				permanent: false,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: false,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
