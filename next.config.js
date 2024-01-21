/** @type {import('next').NextConfig} */
const nextConfig = {
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
		],
	},
}

module.exports = nextConfig
