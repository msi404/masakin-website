import type { NextPage } from "next";
import prisma from "@/lib/prisma";
import List from "@/components/list";

const Page: NextPage = async () => {
	const projects = await prisma.project.findMany();
	return (
		<div>
			<List projects={projects} />
		</div>
	);
};

export default Page;
