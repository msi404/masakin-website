"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Hammer, Building, Construction, Ship } from "lucide-react";
import useWtxI18n from "@/hooks/use-wtx-i18n";

const FeaturesList: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	const list = [
		{
			icon: (
				<Hammer
					className="mx-5 shadow-xl rounded-full w-12 h-12 p-2"
					size={30}
					color="DarkGoldenRod"
				/>
			),
			title: t("featuerslistonetitle"),
			description: t("featuerslistonedescription"),
		},
		{
			icon: (
				<Building
					className="mx-5 shadow-xl rounded-full w-12 h-12 p-2"
					size={30}
					color="DarkGoldenRod"
				/>
			),
			title: t("featuerslisttwotitle"),
			description: t("featuerslisttwodescription"),
		},
		{
			icon: (
				<Construction
					className="mx-5 shadow-xl rounded-full w-12 h-12 p-2"
					size={30}
					color="DarkGoldenRod"
				/>
			),
			title: t("featuerslistthreetitle"),
			description: t("featuerslistthreedescription"),
		},
		{
			icon: (
				<Ship
					className="mx-5 shadow-xl rounded-full w-12 h-12 p-2"
					size={30}
					color="DarkGoldenRod"
				/>
			),
			title: t("featuerslistfourtitle"),
			description: t("featuerslistfourdescription"),
		},
	];
	return (
		<ul className="space-y-10">
			{list.map((item, i) => (
				<li className="flex" key={i}>
					{item.icon}
					<div className="flex flex-col space-y-5">
						<h1 className="font-bold">{item.title}</h1>
						<p className="text-sm w-80 lg:text-base lg:w-96 text-gray-500">
							{item.description}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default FeaturesList;
