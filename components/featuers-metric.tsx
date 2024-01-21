import React from "react";

const FeatuersMetric: React.FC<{ metric: any; label: string }> = ({
	metric,
	label,
}) => {
	return (
		<div className="text-center felx flex-col space-y-8 items-center justify-center relative w-fit">
			<h1 className="text-3xl font-bold before:absolute before:h-[4px] before:top-12 before:w-full before:bg-yellow-600">
				+{metric}
			</h1>
			<p>{label}</p>
		</div>
	);
};

export default FeatuersMetric;
