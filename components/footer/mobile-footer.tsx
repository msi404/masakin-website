"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import LanguageChanger from "@/components/language-changer";
import Logo from "@/components/logo";

const MobileFooter: React.FC = () => {
	const { t } = useTranslation();
	const navLinks = [
		"Iraq, Baghdad, Karrada",
		"07753506070",
		"07853506070",
		"info@masaknalbilad.com",
	];
	const navTabs = [
		{
			text: t("common:serviceoffers"),
			func: redirectService,
		},
		{
			text: t("common:projects"),
			func: redirectProjects,
		},
		{
			text: t("common:commercialagencies"),
			func: redirectAgencies,
		},
	];
	return (
		<div className="flex flex-col space-y-8 w-screen">
			<div className="flex flex-col space-y-5">
				<Logo />
				<p className="w-52 font-extralight">
					{t("common:logodescription")}
				</p>
			</div>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-lg">
						{t("common:footerlinks")}
					</AccordionTrigger>
					<AccordionContent>
						<ul className="font-light text-gray-500 space-y-2 text-lg">
							{navTabs.map((tab, i) => (
								<li
									className="cursor-pointer"
									onClick={tab.func}
									key={i}
								>
									<Separator className="my-2" />
									{tab.text}
								</li>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="text-lg">
						{t("common:footercontact")}
					</AccordionTrigger>
					<AccordionContent>
						<ul className="font-light text-gray-500 space-y-2 text-lg">
							{navLinks.map((link, i) => (
								<li key={i}>
									<Separator className="my-2" />
									<Link href="#">{link}</Link>
								</li>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="space-y-2 text-lg">
						{t("common:footerfollow")}
					</AccordionTrigger>
					<AccordionContent className="flex space-x-5">
						<Facebook fill="black" />
						<Instagram color="white" fill="black" />
						<Linkedin fill="black" />
						<Twitter fill="black" />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<LanguageChanger />
			<div className="mx-auto py-6 font-light text-gray-500">
				<p>{t("common:copyright")}</p>
			</div>
		</div>
	);

	function redirectService() {
		window.location.replace("/services");
	}
	function redirectProjects() {
		window.location.replace("/projects");
	}
	function redirectAgencies() {
		window.location.replace("/agencies");
	}
};

export default MobileFooter;
