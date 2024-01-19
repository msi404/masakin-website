"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopFooter from "@/components/footer/desktop-footer";
import MobileFooter from "@/components/footer/mobile-footer";
const Footer: React.FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });

	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);

	return (
		<footer className="flex justify-between container mt-10">
			{renderResponsiveFooter()}
		</footer>
	);

	function renderResponsiveFooter() {
		if (isMinWidthMedium) return <MobileFooter />;
		return <DesktopFooter />;
	}
};

export default Footer;
