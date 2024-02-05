"use client";
import { useState, useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Menu, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
function Navigation() {
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
			text: "07753506070",
		},
		{
			icon: <Mail size={12} />,
			text: "info@masaknalbilad.com",
		},
	];

	const navTabs = [
		{
			href: "/dashboard",
			text: "Dashboard",
			delay: 0.1,
		},
		{
			href: "/dashboard/projects",
			text: "Projects",
			delay: 0.2,
		},
		{
			href: "/dashboard/services",
			text: "Services",
			delay: 0.3,
		},
		{
			href: "/dashboard/agencies",
			text: "Agencies",
			delay: 0.4,
		},
		{
			href: "/dashboard/emails",
			text: "Emails",
			delay: 0.5,
		},
	];
	return (
		<div className="fixed border-b border-slate-500 overflow-hidden w-screen top-0 z-50 text-slate-900 font-semibold bg-white">
			<AnimatePresence>
				<motion.div
					initial={{ height: 100 }}
					animate={{ height: isOpen ? 420 : 100 }}
					exit={{ height: 100 }}
					className="px-6 flex flex-wrap items-center space-x-6 lg:space-x-0 pb-10 max-w-[1400px] mx-auto"
				>
					<div className="flex-1 flex justify-between items-center py-3">
						<Logo />
					</div>
					<button
						onClick={onMenuClicked}
						className="cursor-pointer lg:hidden block p-5 text-xl"
					>
						<Menu />
					</button>
					<div className="flex flex-col space-y-5 justify-center items-center font-normal text-2xl lg:text-base text-center lg:flex lg:items-center lg:w-auto w-full">
						<div className="hidden lg:block text-xs">
							<ul className="flex items-center space-x-10">
								<LogoutLink>Logout</LogoutLink>
								{navLinks.map((link, i) => (
									<li className="flex space-x-3" key={i}>
										{link.icon}
										<span>{link.text}</span>
									</li>
								))}
							</ul>
						</div>
						<nav>
							<ul className="lg:flex lg:space-x-10 space-y-10 items-center lg:space-y-0 justify-between pt-4 lg:pt-0">
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
							? "text-yellow-600  before:block"
							: "before:hidden"
					}`,
					"admin-tab"
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
