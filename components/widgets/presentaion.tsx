"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PresentaionListDesktop from "@/components/presentaion-list-descktop";
import PresentaionListMobile from "@/components/presentaion-list-mobile";

const Presentaion: React.FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1023px)` });
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);
	return (
		<section className="container my-36">
			{renderResponsivePresentionList()}
		</section>
	);

	function renderResponsivePresentionList() {
		if (isMinWidthMedium) {
			return <PresentaionListMobile />;
		} else {
			return <PresentaionListDesktop />;
		}
	}
};

export default Presentaion;
