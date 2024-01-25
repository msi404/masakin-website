import React from "react";

const IMAGE_URL =
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic4.depositphotos.com%2F1009279%2F354%2Fi%2F450%2Fdepositphotos_3546790-stock-photo-skyscraper-in-construction.jpg&f=1&nofb=1&ipt=c3b1e11c675587671c3bb8e42302120bdaf88615854220ad38d28bcea5a9eed5&ipo=images";
const Crumb: React.FC<{ title: string; path: string }> = ({ title, path }) => {
	return (
		<div
			className="flex justify-between items-center px-12 lg:px-24 text-black bg-no-repeat bg-center bg-cover w-full h-44"
			style={{
				backgroundImage: `url("${IMAGE_URL}")`,
				boxShadow: "inset 0 0 0 2000px rgba(199, 179, 0, 0.6)",
			}}
		>
			<h1 className="text-sm lg:text-4xl font-medium">{title}</h1>
			<p className="text-xs lg:text-base">{path}</p>
		</div>
	);
};

export default Crumb;
