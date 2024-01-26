"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageChanger from "@/components/language-changer";
import { cn } from "@/lib/utils";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import Logo from "@/components/logo";
function Navigation() {
	const { t } = useTranslation();
	useWtxI18n();
	const path = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState<string>(path);
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	const onMenuClicked = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};
	const resetMenu = () => {
		setIsOpen(false);
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			resetMenu();
		}
	};
	useEffect(() => {
		setActiveTab(path);
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
		if (isMinWidthMedium) {
			resetMenu();
		}
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [mediaQuery, isMinWidthMedium]);

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
		{
			href: "/",
			text: t("common:home"),
			delay: 0.1,
		},
		{
			href: "/services",
			text: t("common:serviceoffers"),
			delay: 0.2,
		},
		{
			href: "/agencies",
			text: t("common:commercialagencies"),
			delay: 0.3,
		},
		{
			href: "/projects",
			text: t("common:projects"),
			delay: 0.4,
		},
		{
			href: "/about-us",
			text: t("common:aboutus"),
			delay: 0.5,
		},
		{
			href: "/contact",
			text: t("common:contactus"),
			delay: 0.6,
		},
	];
	return (
		<div className="fixed border-b border-slate-500 overflow-hidden w-screen top-0 z-50 text-slate-900 font-semibold bg-white">
			<AnimatePresence>
				<motion.div
					initial={{ height: 100 }}
					animate={{ height: isOpen ? 550 : 100 }}
					exit={{ height: 100 }}
					className="px-5 lg:px-24 flex flex-wrap items-center space-x-6 lg:space-x-0 pb-10 max-w-[1400px] mx-auto"
				>
					<div className="flex-1 flex justify-between items-center py-3">
						<Logo />
					</div>
					<button
						onClick={onMenuClicked}
						className="cursor-pointer lg:hidden block  text-xl"
					>
						<Menu />
					</button>
					<div className="flex flex-col space-y-5 justify-center items-center font-normal text-2xl lg:text-base text-center lg:flex lg:items-center lg:w-auto w-full">
						<div className="hidden lg:block text-xs">
							<ul className="flex space-x-10">
								<LanguageChanger />
								{navLinks.map((link, i) => (
									<li className="flex" key={i}>
										{link.icon}
										<span className="mx-3">
											{link.text}
										</span>
									</li>
								))}
							</ul>
						</div>
						<nav className="w-full">
							<ul className="lg:flex ltr:mr-5 rtl:ml-5 space-y-10 items-center lg:space-y-0 justify-between pt-4 lg:pt-0">
								{renderNavTabs()}
							</ul>
						</nav>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);

	function renderNavTabs() {
		return navTabs.map((tab, i) => (
			<li
				onClick={() => handleActiveTab(tab.href)}
				className={cn(
					`${
						activeTab === tab.href
							? "text-yellow-600 font-bold  before:block"
							: "before:hidden"
					}`,
					"nav-tab"
				)}
				key={i}
			>
				<Link href={tab.href}>
					<motion.div
						initial={{
							opacity: 0,
							translateY: "30px",
						}}
						whileInView={{
							opacity: 1,
							translateY: "0px",
							transition: {
								delay: tab.delay,
							},
						}}
						viewport={{ once: false }}
					>
						{tab.text}
					</motion.div>
				</Link>
			</li>
		));
	}

	function handleActiveTab(path: string) {
		setActiveTab(() => path);
		resetMenu();
	}
}

export default Navigation;
