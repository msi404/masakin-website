import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const New: React.FC<{ title: string; href: string }> = ({ title, href }) => {
	return (
		<Link href={href}>
			<h1 className="font-bold text-2xl mb-8">{title}</h1>
			<div className="flex justify-center items-center w-full h-96 lg:w-96 lg:h-56 bg-gray-200 rounded-xl border-dashed border-4 border-gray-400">
				<Plus size={50} color="gray" />
			</div>
		</Link>
	);
};

export default New;
