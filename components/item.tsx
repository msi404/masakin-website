import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const Item: React.FC<{ title: string; image: string }> = ({ title, image }) => {
	return (
		<Card className="w-72 lg:w-96">
			<CardContent>
				<Image
					width={500}
					height={500}
					className="rounded-lg"
					src={image}
					alt="Item"
				/>
			</CardContent>
			<CardFooter>
				<CardTitle>{title}</CardTitle>
			</CardFooter>
		</Card>
	);
};

export default Item;
