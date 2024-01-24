"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "react-marquee-slider";
import classes from "@/components/logos-marquee/logos-marquee.module.css";
const LogosMarquee: React.FC = () => {
	const LOGOS = [
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2016%2F05%2Fvector-logo-templates_403097.png&f=1&nofb=1&ipt=08923281a7d5694b97336d198c01e937ac95cfee35432d8f4ddbc2dcf3ee2916&ipo=images",
	];
	return (
		// eslint-disable-next-line react/no-children-prop
		<div
			className={cn(
				classes.scroller,
				"max-w-[1000px] mx-auto mt-24 mb-44"
			)}
		>
			<Marquee velocity={25}>
				{LOGOS.map((logo, i) => (
					<Image
						key={i}
						className="mx-5"
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
