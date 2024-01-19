"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const MobileFooter: React.FC = () => {
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
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default MobileFooter;
