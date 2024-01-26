import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useWtxI18n from "@/hooks/use-wtx-i18n";

import { Separator } from "@/components/ui/separator";
const PresentaionListMobile: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<ul className="max-w-[400px] mx-auto text-sm flex flex-col space-y-10 h-full">
			<motion.li
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
						damping: 0.3,
						duration: 0.8,
					},
				}}
				viewport={{ once: true, amount: 0.6 }}
				className="flex flex-col bg-yellow-500 space-y-10 py-5 items-center text-center rounded-3xl"
			>
				<h1 className="font-bold">{t("presentaionlistheaderone")}</h1>
				<Separator />
				<p className="text-xs font-light">
					{t("presentaionlistdescriptionone")}
				</p>
			</motion.li>
			<motion.li
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
						damping: 0.3,
						duration: 0.8,
					},
				}}
				viewport={{ once: true, amount: 0.6 }}
				className="flex flex-col bg-yellow-500 space-y-10 py-5 items-center text-center rounded-3xl"
			>
				<h1 className="font-bold">{t("presentaionlistheadertwo")}</h1>
				<Separator />
				<p className="text-xs font-light">
					{t("presentaionlistdescriptiontwo")}
				</p>
			</motion.li>

			<motion.li
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
						damping: 0.3,
						duration: 0.8,
					},
				}}
				viewport={{ once: true, amount: 0.6 }}
				className="flex flex-col text-white bg-slate-900 space-y-10 py-5 items-center text-center rounded-3xl"
			>
				<h1 className="font-bold">{t("presentaionlistheaderthree")}</h1>
				<Separator />
				<p className="text-xs font-light">
					{t("presentaionlistdescriptionthree")}
				</p>
			</motion.li>
			<motion.li
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
						damping: 0.3,
						duration: 0.8,
					},
				}}
				viewport={{ once: true, amount: 0.6 }}
				className="flex flex-col bg-yellow-500 space-y-10 py-5 items-center text-center rounded-3xl"
			>
				<h1 className="font-bold">{t("presentaionlistheaderfour")}</h1>
				<Separator />
				<p className="text-xs font-light">
					{t("presentaionlistdescriptionfour")}
				</p>
			</motion.li>
		</ul>
	);
};

export default PresentaionListMobile;
