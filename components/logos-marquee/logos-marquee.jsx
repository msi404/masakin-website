"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";
import classes from "@/components/logos-marquee/logos-marquee.module.css";
import WHITE_TIGER_LOGO from '@/public/white_tiger_logo.png'
import PLING_LOGO from '@/public/pling_logo.png'
const LogosMarquee = () => {
	const LOGOS = [WHITE_TIGER_LOGO,PLING_LOGO,WHITE_TIGER_LOGO,PLING_LOGO];
	return (
		// eslint-disable-next-line react/no-children-prop
		<div
			className={classes.scroller}
		>
			<Marquee velocity={15}>
				{LOGOS.map((logo, i) => (
					<Image
						className="p-10"
						key={i}
						width={200}
						height={200}
						src={logo}
						alt="Building"
					/>
				))}
			</Marquee>
		</div>
	);
};

export default LogosMarquee;
