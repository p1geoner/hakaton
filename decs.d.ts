declare module "leaflet-geosearch/lib/providers/provider"
declare module "leaflet-geosearch/dist/providers/openStreetMapProvider"
declare module "leaflet-geosearch/lib/providers/bingProvider"
declare module "react-router-hash-link"
declare module "html-react-parser"
declare module "swiper"
declare module "react-fast-marquee"

declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
