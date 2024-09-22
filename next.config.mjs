/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	// compress: true,
	// poweredByHeader: false,
	// pageExtensions: ['resume.tsx', 'page.ts', 'page.jsx', 'page.js'],
	reactStrictMode: false,
	images: {
		// formats: ['image/avif', 'image/webp'],
		domains: [
			// 'back.sakhipoteka.study-traektoria.ru',
		],
		remotePatterns: [
			{
				hostname: '**.img.avito.st',
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	headers: () => [
		{
			source: '/',
			headers: [
				{
					key: 'Cache-Control',
					value: 'no-store',
				},
			],
		},
	],
	async rewrites() {
		return [
			{
				source: '/avtorizacia',
				destination: '/authorization',
			},
			{
				source: '/registraciya',
				destination: '/registration',
			},
			{
				source: '/kategorii',
				destination: '/categories',
			},
			{
				source: '/kategorii/:path*',
				destination: '/categories/:path*',
			},
			{
				source: '/kategorii/:path*',
				destination: '/categories/:path*',
			},
			{
				source: '/kategorii/:id*/kyrsi',
				destination: '/categories/:id*/courses',
			},
			{
				source: '/kategorii/:id*/kyrsi/:slug*',
				destination: '/categories/:id*/courses/:slug*',
			},
			{
				source: '/profil',
				destination: '/profile',
			},
		];
	},

	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React _components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]}, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		)
		return config
	}
};

export default nextConfig;
