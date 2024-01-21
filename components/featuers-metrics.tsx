"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import FeatuersMetric from "@/components/featuers-metric";

const FeatuersMetrics: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	const metricList = [
		{
			metric: t("featuersmetricsmetricone"),
			label: t("featuersmetricslabelone"),
		},
		{
			metric: t("featuersmetricsmetrictwo"),
			label: t("featuersmetricslabeltwo"),
		},
		{
			metric: t("featuersmetricsmetricthree"),
			label: t("featuersmetricslabelthree"),
		},
	];
	return (
		<div className="py-16 flex flex-col text-center space-y-10 lg:flex-row lg:text-start justify-between items-center">
			<div>
				<h1 className="text-3xl w-96 lg:text-6xl">
					{t("featuersmetricheadline")}
				</h1>
			</div>
			<div className="space-y-10 lg:w-[650px]">
				<p className="lg:text-xl">{t("featuersmetricdescription")}</p>
				<div className="flex justify-between">
					{metricList.map((item, i) => (
						<FeatuersMetric
							key={i}
							metric={item.metric}
							label={item.label}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeatuersMetrics;
