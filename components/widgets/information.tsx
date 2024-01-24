"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import { Button } from "@/components/ui/button";
const Information: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<section className="container">
			<div className="flex flex-col text-center lg:text-start lg:flex-row justify-between gap-12 lg:gap-44">
				<h1 className="text-5xl font-bold">{t("informationheader")}</h1>
				<div className="space-y-10">
					<p className="text-xs lg:text-base max-w-[900px]">
						{t("informationdescription")}
					</p>
					<Button
						variant="default"
						size="lg"
						className="w-full lg:w-auto"
					>
						{t("informationlabel")}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Information;
