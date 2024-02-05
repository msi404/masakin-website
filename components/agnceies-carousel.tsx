"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const AgenciesCarousel: React.FC<{ items: any }> = ({ items }) => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-64 md:w-full max-w-sm mx-auto"
		>
			<CarouselContent>
				{items.map((item: any, i: number) => (
					<CarouselItem key={i} className="basis-1/2">
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<Image
										unoptimized
										src={item.logo}
										width={200}
										height={200}
										alt="logo"
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default AgenciesCarousel;
