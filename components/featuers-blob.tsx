"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useWtxI18n from "@/hooks/use-wtx-i18n";

const IMAGE_URL =
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F3%2FEngineer-Download-PNG-Image.png&f=1&nofb=1&ipt=e78bfe2e0b26aa3e10f636d937be6be23422e625a2eb34084b9191ebe453d2ed&ipo=images";
const FeatuersBlob: React.FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	const { t } = useTranslation();
	useWtxI18n();
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);
	return (
		<div className="lg:self-end space-y-10 mx-auto lg:mx-0">
			<div>
				<motion.h1
					initial={{
						opacity: 0,
						translateY: "30px",
					}}
					whileInView={{
						opacity: 1,
						translateY: "0px",
						transition: {
							delay: 0.4,
							duration: 2,
						},
					}}
					viewport={{ once: true, amount: 0.6 }}
					className="text-3xl text-center lg:text-start lg:text-6xl font-medium"
				>
					<span style={{ color: "DarkGoldenRod" }}>
						{t("featuersblobtitlecolored")}
					</span>
					<br />
					{t("featuersblobtitle")}
				</motion.h1>
			</div>
			{renderResponsiveBlob()}
		</div>
	);

	function renderResponsiveBlob() {
		if (isMinWidthMedium)
			return (
				<motion.div
					initial={{
						opacity: 0,
						translateY: "30px",
					}}
					whileInView={{
						opacity: 1,
						translateY: "0px",
						transition: {
							delay: 0.3,
							damping: 0.3,
							duration: 0.8,
						},
					}}
					viewport={{ once: true, amount: 0.6 }}
					className="relative"
				>
					<div>
						<svg width={250} height={250}>
							<circle
								r={125}
								cy={125}
								cx={125}
								fill="DarkGoldenRod"
							/>
						</svg>
					</div>
					<Image
						unoptimized
						className="left-0 top-14 absolute"
						width={600}
						height={600}
						src={IMAGE_URL}
						alt="construction engineers"
					/>
				</motion.div>
			);
		return (
			<motion.div
				initial={{
					opacity: 0,
					translateY: "30px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						delay: 0.3,
						damping: 0.3,
						duration: 0.8,
					},
				}}
				viewport={{ once: true, amount: 0.6 }}
				className="relative"
			>
				<div>
					<svg width={500} height={500}>
						<circle
							r={250}
							cy={250}
							cx={250}
							fill="DarkGoldenRod"
						/>
					</svg>
				</div>
				<Image
					unoptimized
					className="left-0 top-24 absolute"
					width={700}
					height={700}
					src={IMAGE_URL}
					alt="construction engineers"
				/>
			</motion.div>
		);
	}
};

export default FeatuersBlob;
