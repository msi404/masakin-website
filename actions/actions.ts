"use server";
import prisma from "@/lib/prisma";
type ProjectType = {
	title: string;
	file: string;
};
export const createProject = async ({ title, file }: ProjectType) => {
	await prisma.project.create({
		data: {
			image: file,
			title: title,
		},
	});
};

export const deleteProject = async (id: number) => {
	await prisma.project.delete({
		where: {
			id: id,
		},
	});
};
