import React from "react";
import { ArrowRight } from "lucide-react";
import type { IBanner } from "@/types/ui";
import { Button } from "@/components/ui/button";
const Banner: React.FC<IBanner> = ({ title, description, label, image }) => {
	return (
		<div
			className="text-white flex flex-col justify-center items-center space-y-6 bg-no-repeat bg-center bg-cover w-full h-96"
			style={{
				backgroundImage: `url("${image}")`,
				boxShadow: "inset 0 0 0 2000px rgba(199, 179, 0, 0.6)",
			}}
		>
			<h1 className="text-2xl lg:text-4xl font-medium">{title}</h1>
			<p className="font-extralight">{description}</p>
			<Button variant="outline" size="lg">
				{label}
				<ArrowRight className="ltr:ml-3 rtl:mr-3 rtl:-scale-x-100" />
			</Button>
		</div>
	);
};

export default Banner;
