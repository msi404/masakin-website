import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";

import { AlarmCheck, HandIcon, Flag } from "lucide-react";
const PresentaionListDesktop: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<ul className="flex flex-col lg:justify-between lg:items-center w-full h-full lg:flex-row bg-yellow-500 md:p-7 lg:p-16 rounded-3xl">
			<li className="flex flex-col space-y-8">
				<h1 className="font-bold">{t("presentaionlistheaderone")}</h1>
				<p className="text-xs font-light w-44">
					{t("presentaionlistdescriptionone")}
				</p>
			</li>
			<li className="flex flex-col space-y-3">
				<AlarmCheck color="white" />
				<div className="space-y-7">
					<h1 className="font-bold">
						{t("presentaionlistheadertwo")}
					</h1>
					<p className="text-xs font-light w-44">
						{t("presentaionlistdescriptiontwo")}
					</p>
				</div>
			</li>
			<li className="relative space-y-6 z-10 text-white flex flex-col after:content-['']  lg:after:w-56 xl:after:w-64 lg:after:h-72 after:bg-slate-900 after:absolute after:rounded-2xl after:-z-10 after:left-1/2 after:-translate-x-1/2 after:top-[50%] after:-translate-y-1/2">
				<HandIcon />
				<h1 className="font-bold">{t("presentaionlistheaderthree")}</h1>
				<p className="text-xs font-light w-44">
					{t("presentaionlistdescriptionthree")}
				</p>
			</li>
			<li className="flex flex-col space-y-3">
				<Flag color="white" />
				<h1 className="font-bold">{t("presentaionlistheaderfour")}</h1>
				<p className="text-xs font-light w-44">
					{t("presentaionlistdescriptionfour")}
				</p>
			</li>
		</ul>
	);
};

export default PresentaionListDesktop;
