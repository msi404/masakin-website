"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { deleteProject } from "@/actions/actions";
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

const List: React.FC<{ items: any; deleteFunc: (id: string) => {} }> = ({
	items,
	deleteFunc,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Table>
			<TableCaption>A list of your recent emails.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead className="text-right">Message</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item: any) => (
					<Popover key={item.id}>
						<PopoverTrigger asChild>
							<TableRow>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell className="text-right">
									<p className="break-words">
										{item.message}
									</p>
								</TableCell>
							</TableRow>
						</PopoverTrigger>
						<PopoverContent className="space-y-10">
							<h1>Do you want to delete this item?</h1>
							<form>
								<Button
									className="w-full"
									variant="destructive"
									type="submit"
									disabled={isLoading}
									onClick={() => onDeleteClicked(item.id)}
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
	async function onDeleteClicked(id: string) {
		setIsLoading(true);
		await deleteFunc(id);
		window.location.reload();
		setIsLoading(false);
	}
};

export default List;
