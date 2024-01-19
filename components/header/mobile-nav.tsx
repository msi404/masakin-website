"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import useWtxI18n from "@/hooks/use-wtx-i18n";

const MobileNav: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t } = useTranslation();
	useWtxI18n();
	const navTabs = [
		t("common:home"),
		t("common:serviceoffers"),
		t("common:commercialagencies"),
		t("common:projects"),
		t("common:aboutus"),
		t("common:contactus"),
	];
	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		<div className="px-10 relative">
			<Menu size={30} onClick={onMenuClick} className="cursor-pointer" />
			{renderMenu()}
		</div>
	);

	function renderMenu() {
		if (isMenuOpen) {
			return (
				<ul className="ltr:left-0 rtl:right-0 bg-white absolute flex flex-col space-y-10 h-screen w-screen py-10 px-10">
					{navTabs.map((tab, i) => (
						<li onClick={resetMenu} className="text-4xl" key={i}>
							<Link href="#">{tab}</Link>
						</li>
					))}
				</ul>
			);
		} else {
			return null;
		}
	}

	function resetMenu() {
		setIsMenuOpen(false);
	}

	function handleScroll() {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			resetMenu();
		}
	}

	function onMenuClick() {
		isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
	}
};

export default MobileNav;
