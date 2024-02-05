"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { IBanner } from "@/types/ui";
import { Button } from "@/components/ui/button";
const Banner: React.FC<IBanner> = ({ title, description, label, image }) => {
	return (
		<section
			className="text-white flex flex-col justify-center items-center space-y-6 bg-no-repeat bg-center bg-cover w-full h-96"
			style={{
				backgroundImage: `url("${image}")`,
				boxShadow: "inset 0 0 0 2000px rgba(199, 179, 0, 0.6)",
			}}
		>
			<motion.h1
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.2,
					},
				}}
				viewport={{ once: true }}
				className="text-2xl lg:text-4xl font-medium"
			>
				{title}
			</motion.h1>
			<motion.p
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
					},
				}}
				viewport={{ once: true }}
				className="font-extralight"
			>
				{description}
			</motion.p>
			<Button onClick={onButtonClicked} variant="outline" size="lg">
				{label}
				<ArrowRight className="ltr:ml-3 rtl:mr-3 rtl:-scale-x-100" />
			</Button>
		</section>
	);

	function onButtonClicked() {
		window.location.replace("/about-us");
	}
};

export default Banner;
