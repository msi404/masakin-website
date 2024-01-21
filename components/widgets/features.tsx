import React from "react";
import { Separator } from "@/components/ui/separator";
import FeatuersList from "@/components/features-list";
import FeatuersBlob from "@/components/featuers-blob";
import FeatuersMetrics from "@/components/featuers-metrics";
const Features: React.FC = () => {
	return (
		<section className="space-y-1 my-24 container">
			<div className="flex flex-col space-y-24 lg:space-y-0 lg:flex-row lg:justify-between">
				<FeatuersList />
				<FeatuersBlob />
			</div>
			<Separator />
			<FeatuersMetrics />
		</section>
	);
};

export default Features;
