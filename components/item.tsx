import React from "react";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const Item: React.FC<{
	title: string;
	thumnail: string;
	firstImage: string;
	secondImage: string;
	thirdImage: string;
	caption: string;
}> = ({ title, thumnail, firstImage, secondImage, thirdImage, caption }) => {
	return (
		<Dialog>
			<DialogTrigger>
				<Card className="max-w-[500px] flex flex-col md:flex-row items-center">
					<CardContent>
						<Image
							unoptimized
							width={500}
							height={500}
							className="rounded-lg"
							src={thumnail}
							alt="Item"
						/>
					</CardContent>
					<div className="flex flex-col flex-grow w-full">
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>
						<CardFooter>
							<CardDescription>{caption}</CardDescription>
						</CardFooter>
					</div>
				</Card>
			</DialogTrigger>
			<DialogContent className="max-w-[350px]  sm:max-w-[425px] lg:max-w-[800px] flex flex-col items-center">
				<DialogHeader className="flex sm:flex-row w-full">
					<Image
						unoptimized
						src={thumnail}
						width={300}
						height={300}
						alt="image"
						className="rounded-lg rtl:ml-12 ltr:mr-12"
					/>
					<div>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription className="break-words">
							{caption}
						</DialogDescription>
					</div>
				</DialogHeader>
				<div className="space-y-5">
					<Carousel
						opts={{
							align: "start",
						}}
						className="w-full max-w-xl"
					>
						<CarouselContent>
							<CarouselItem className="basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card>
										<Image
											unoptimized
											src={firstImage}
											width={300}
											height={300}
											alt="image"
											className="rounded-lg"
										/>
									</Card>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card>
										<Image
											unoptimized
											src={secondImage}
											width={300}
											height={300}
											alt="image"
											className="rounded-lg"
										/>
									</Card>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card>
										<Image
											unoptimized
											src={thirdImage}
											width={300}
											height={300}
											alt="image"
											className="rounded-lg"
										/>
									</Card>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
				<DialogFooter className="w-full">
					<DialogClose className="w-full">
						<Button className="w-full">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default Item;
