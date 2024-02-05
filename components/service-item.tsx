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

const Item: React.FC<{
	title: string;
	image: string;
	caption: string;
}> = ({ title, image, caption }) => {
	return (
		<Card className="max-w-[500px] flex flex-col md:flex-row items-center">
			<CardContent>
				<Image
					unoptimized
					width={500}
					height={500}
					className="rounded-lg"
					src={image}
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
	);
};

export default Item;
