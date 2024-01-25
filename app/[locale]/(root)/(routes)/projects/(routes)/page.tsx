import { Fragment } from "react";
import type { NextPage } from "next";
import prisma from "@/lib/prisma";
import Item from "@/components/item";
import Crumb from "@/components/crumb";
const Page: NextPage = async () => {
	const projects = await prisma.project.findMany();
	return (
		<div className="flex flex-col space-y-10 md:flex-wrap md:flex-row md:space-y-0 md:gap-10 items-center">
			{projects.map(project => (
				<Item
					key={project.id}
					title={project.title}
					image={project.image}
				/>
			))}
		</div>
	);
};

export default Page;
