"use client";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";

const DesktopFooter: React.FC = () => {
	const { t } = useTranslation();
	const navLinks = [
		"Iraq, Baghdad, Karrada",
		"009647800000000",
		"info@masaken.com",
	];
	const navTabs = [
		t("common:serviceoffers"),
		t("common:projects"),
		t("common:commercialagencies"),
	];
	return (
		<Fragment>
			<div className="flex flex-col space-y-5">
				<h1>Logo</h1>
				<p className="w-52 font-extralight">
					{t("common:logodescription")}
				</p>
			</div>
			<div className="flex space-x-10">
				<Separator
					orientation="vertical"
					className="ltr:mr-7 rtl:ml-7"
				/>
				<ul className="space-y-3">
					<li className="font-bold">{t("common:home")}</li>
					{navTabs.map((tab, i) => (
						<li key={i}>{tab}</li>
					))}
				</ul>
			</div>
			<div className="flex">
				<Separator
					orientation="vertical"
					className="ltr:mr-7 rtl:ml-7"
				/>
				<ul className="flex flex-col justify-between">
					{navLinks.map((link, i) => (
						<li key={i}>{link}</li>
					))}
				</ul>
			</div>
			<div className="flex">
				<Separator
					orientation="vertical"
					className="ltr:mr-7 rtl:ml-7"
				/>
				<div>
					<h1>Follow us on</h1>
				</div>
			</div>
		</Fragment>
	);
};

export default DesktopFooter;
