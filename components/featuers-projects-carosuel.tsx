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

const FeatuersProjectsCarosuel: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	const images = [
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
		"https://topsdecor.com/wp-content/uploads/2020/08/1596795106_543_These-are-the-coolest-skyscraper-buildings-in-Dubai.jpg",
	];
	return (
		<section className="container space-y-10">
			<div>
				<h1 className="text-4xl font-bold">
					{t("featuersprojectsheadline")}
				</h1>
			</div>
			<Carousel opts={{ align: "end" }} className="w-full max-w-8xl">
				<CarouselContent className="flex rtl:flex-row-reverse">
					{images.map((image, i) => (
						<CarouselItem
							key={i}
							className="md:basis-1/3 lg:basis-1/4"
						>
							<div className="relative rounded-2xl overflow-hidden">
								<Image
									className="rounded-2xl"
									width={500}
									height={500}
									src={image}
									alt="Building"
								/>
								<div className="absolute left-0 bottom-0 w-full h-56 bg-gradient-to-t from-slate-900" />
								<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
									<h1 className="font-bold text-xl">
										Lorem Ipsum
									</h1>
									<p className="text-xs font-light">
										Lorem Ipsum Lorem Ipsum
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
