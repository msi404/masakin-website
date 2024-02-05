"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const FeatuersProjectsCarosuel: React.FC<{ projects: any }> = ({
	projects,
}) => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<section className="container space-y-10 px-20 md:px-36">
			<div>
				<h1 className="text-4xl font-bold">
					{t("featuersprojectsheadline")}
				</h1>
			</div>
			<Carousel opts={{ align: "end" }}>
				<CarouselContent className="flex rtl:flex-row-reverse">
					{projects.map((project: any, i: number) => (
						<CarouselItem
							key={i}
							className="md:basis-1/3 lg:basis-1/4"
						>
							<div className="relative rounded-2xl overflow-hidden">
								<Image
									unoptimized
									className="rounded-2xl"
									width={500}
									height={500}
									src={project.thumnail}
									alt="Building"
								/>
								<div className="absolute left-0 bottom-0 w-full h-56 bg-gradient-to-t from-slate-900" />
								<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
									<h1 className="font-bold text-xl">
										{project.title}
									</h1>
									<p className="text-xs font-light">
										{project.caption}
									</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="bg-slate-900 text-white" />
				<CarouselNext className="bg-slate-900 text-white" />
			</Carousel>
		</section>
	);
};

export default FeatuersProjectsCarosuel;
