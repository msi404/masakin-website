import React, { ReactNode } from "react";
const FeatuersMetric: React.FC<{ label: string; children: ReactNode }> = ({
	label,
	children,
}) => {
	return (
		<div className="felx flex-col space-y-8 text-center items-center justify-center relative lg:w-56">
			{children}
			<div className="w-16 lg:w-20 h-1 lg:h-2 mx-auto bg-yellow-500" />
			<p className="text-xs lg:text-xl">{label}</p>
		</div>
	);
};

export default FeatuersMetric;
