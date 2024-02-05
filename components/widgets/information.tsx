"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import { Button } from "@/components/ui/button";
const Information: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<section className="container">
			<div className="flex flex-col text-center lg:text-start lg:flex-row justify-between gap-12 lg:gap-44">
				<motion.h1
					initial={{
						opacity: 0,
						translateY: "30px",
					}}
					whileInView={{
						opacity: 1,
						translateY: "0px",
						transition: {
							duration: 2,
						},
					}}
					viewport={{ once: true, amount: 0.6 }}
					className="text-5xl font-bold"
				>
					{t("informationheader")}
				</motion.h1>
				<div className="space-y-10">
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
								duration: 0.3,
							},
						}}
						viewport={{ once: true, amount: 0.6 }}
						className="text-xs lg:text-base max-w-[900px]"
					>
						{t("informationdescription")}
					</motion.p>
					<Button
						onClick={onButtonClicked}
						variant="default"
						size="lg"
						className="w-full lg:w-auto"
					>
						{t("informationlabel")}
					</Button>
				</div>
			</div>
		</section>
	);

	function onButtonClicked() {
		window.location.replace("/about-us");
	}
};

export default Information;
