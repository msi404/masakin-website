import React, { ReactNode } from "react";
const FeatuersMetric: React.FC<{ label: string; children: ReactNode }> = ({
	label,
	children,
}) => {
	return (
		<div className="felx flex-col space-y-8 text-center items-center justify-center relative w-fit">
			{children}
			<p className="text-xl">{label}</p>
		</div>
	);
};

export default FeatuersMetric;
