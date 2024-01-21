import React, { useState, Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import LanguageChanger from "@/components/language-changer";
import Logo from "@/components/logo";

const DesktopNav: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const { t } = useTranslation();
	useWtxI18n();
	const navLinks = [
		{
			icon: <MapPin size={12} />,
			text: "Iraq, Baghdad, Karrada",
		},
		{
			icon: <Phone size={12} />,
			text: "009647800000000",
		},
		{
			icon: <Mail size={12} />,
			text: "info@masaken.com",
		},
	];
	const navTabs = [
		t("common:home"),
		t("common:serviceoffers"),
		t("common:commercialagencies"),
		t("common:projects"),
		t("common:aboutus"),
		t("common:contactus"),
	];
	return (
		<Fragment>
			<div className="space-y-6">
				<ul className="flex text-xs">{renderNavLinks()}</ul>
				<ul className="hidden lg:flex font-medium">
					{renderNavTabs()}
					<li className="ltr:ml-3 rtl:mr-3">
						<LanguageChanger />
					</li>
				</ul>
			</div>
			<div>
				<Logo />
			</div>
		</Fragment>
	);

	function renderNavLinks() {
		return navLinks.map((link, i) => (
			<li
				key={i}
				className="flex justify-between items-center gap-2 ltr:ml-3 rtl:mr-3 p-2"
			>
				{link.icon}
				{link.text}
			</li>
		));
	}

	function renderNavTabs() {
		return navTabs.map((tab, i) => (
			<li
				onClick={() => handleActiveTab(i)}
				className={`${
					activeTab === i
						? "text-yellow-600  before:block"
						: "before:hidden"
				} nav-tab`}
				key={i}
			>
				<Link className="px-2 py-5" href="#">
					{tab}
				</Link>
			</li>
		));
	}

	function handleActiveTab(id: number) {
		setActiveTab(id);
	}
};

export default DesktopNav;
