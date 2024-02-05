import React, { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import type { AgencyType } from "@/types/ui";
const AgencyItem: React.FC<AgencyType> = ({ title, caption, logo, image }) => {
	return (
		<Fragment>
			<div className="flex flex-col space-y-10 w-full justify-between lg:space-y-0 lg:space-x-10 lg:flex-row">
				<div
					className="bg-no-repeat bg-cover bg-center w-36 h-36 lg:w-56 lg:h-56"
					style={{ backgroundImage: `url(${logo})` }}
				/>
				<div className="lg:w-96 space-y-5">
					<h1 className="text-3xl font-semibold">{title}</h1>
					<p className="break-words w-44 text-xs md:w-full md:text-base">
						{caption}
					</p>
				</div>
				<div className="relative">
					<div
						className="rounded-bl-[50px] bg-no-repeat bg-cover bg-center w-36 h-36 lg:w-56 lg:h-56"
						style={{ backgroundImage: `url(${image})` }}
					/>
					<div className="absolute h-10 w-10 lg:h-36 lg:w-36 bg-yellow-500 -top-3 left-28 lg:-top-5 lg:-right-5 -z-10" />
				</div>
			</div>
			<Separator />
		</Fragment>
	);
};

export default AgencyItem;
