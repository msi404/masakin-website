/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'external-content.duckduckgo.com',
			},
			{
				protocol: 'https',
				hostname: 'topsdecor.com',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'asset.cloudinary.com',
			},
		],
	},
}

module.exports = nextConfig
