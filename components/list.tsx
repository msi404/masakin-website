"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { Project } from "@prisma/client";
import { deleteProject } from "@/actions/actions";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const List: React.FC<{ projects: Project[] }> = ({ projects }) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Table>
			<TableCaption>A list of your recent projects.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Thumnail</TableHead>
					<TableHead>Title</TableHead>
					<TableHead className="text-right">Id</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{projects.map(project => (
					<Popover key={project.id}>
						<PopoverTrigger asChild>
							<TableRow>
								<TableCell>
									<Image
										className="rounded-lg"
										width={150}
										height={150}
										src={project.image}
										alt="Project Image"
									/>
								</TableCell>
								<TableCell>{project.title}</TableCell>
								<TableCell className="text-right">
									{project.id}
								</TableCell>
							</TableRow>
						</PopoverTrigger>
						<PopoverContent className="space-y-10">
							<h1>Do you want to delete this project?</h1>
							<form>
								<Button
									className="w-full"
									variant="destructive"
									type="submit"
									disabled={isLoading}
									onClick={() => onDeleteClicked(project.id)}
								>
									Delete
								</Button>
							</form>
						</PopoverContent>
					</Popover>
				))}
			</TableBody>
		</Table>
	);
	async function onDeleteClicked(id: number) {
		setIsLoading(true);
		await deleteProject(id);
		window.location.reload();
		setIsLoading(false);
	}
};

export default List;
