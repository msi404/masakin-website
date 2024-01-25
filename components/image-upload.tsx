"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { Cloud } from "lucide-react";

interface ImageUploadProps {
	value: string;
	onChange: (src: string) => void;
	disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	// result.info.asset_id
	if (!isMounted) return null;
	return (
		<CldUploadButton
			onUpload={(result: any) => {
				onChange(result.info.secure_url);
			}}
			options={{
				maxFiles: 1,
			}}
			uploadPreset="uxvsxycu"
		>
			<div className="p-4 border-4 border-dashed border-primary rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
				<div className="relative flex justify-center h-40 w-96 mx-auto">
					{value ? (
						<Image
							fill
							alt="upload"
							className="rounded-lg object-cover"
							src={value}
						/>
					) : (
						<Cloud size={150} color="gray" />
					)}
				</div>
			</div>
		</CldUploadButton>
	);
};

export default ImageUpload;
