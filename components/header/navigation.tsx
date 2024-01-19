"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "@/components/header/desktop-nav";
import MobileNav from "@/components/header/mobile-nav";

const Navigation: React.FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });

	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);

	return (
		<header>
			<nav className="flex justify-between lg:container my-6">
				{renderResponsiveNavBar()}
			</nav>
		</header>
	);

	function renderResponsiveNavBar() {
		if (isMinWidthMedium) return <MobileNav />;
		return <DesktopNav />;
	}
};

export default Navigation;
