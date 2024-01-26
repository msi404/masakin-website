"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import FeatuersMetric from "@/components/featuers-metric";
import Counter from "@/components/counter";
const FeatuersMetrics: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<div className="py-16 flex flex-col text-center space-y-10 lg:flex-row lg:text-start justify-between items-center">
			<div>
				<motion.h1
					initial={{
						opacity: 0,
						translateY: "30px",
					}}
					whileInView={{
						opacity: 1,
						translateY: "0px",
						transition: {
							duration: 2,
						},
					}}
					viewport={{ once: true, amount: 0.6 }}
					className="text-xl w-56 lg:w-96 lg:text-6xl"
				>
					{t("featuersmetricheadline")}
				</motion.h1>
			</div>
			<div className="space-y-10 lg:w-[650px]">
				<motion.p
					initial={{
						opacity: 0,
						translateY: "30px",
					}}
					whileInView={{
						opacity: 1,
						translateY: "0px",
						transition: {
							delay: 0.4,
							duration: 2,
						},
					}}
					viewport={{ once: true, amount: 0.6 }}
					className="lg:text-xl"
				>
					{t("featuersmetricdescription")}
				</motion.p>
				<div className="flex justify-between">
					<FeatuersMetric label={t("featuersmetricslabelone")}>
						<Counter from={0} to={200} />
					</FeatuersMetric>
					<FeatuersMetric label={t("featuersmetricslabeltwo")}>
						<Counter from={0} to={500} />
					</FeatuersMetric>
					<FeatuersMetric label={t("featuersmetricslabelthree")}>
						<Counter from={0} to={300} />
					</FeatuersMetric>
				</div>
			</div>
		</div>
	);
};

export default FeatuersMetrics;
