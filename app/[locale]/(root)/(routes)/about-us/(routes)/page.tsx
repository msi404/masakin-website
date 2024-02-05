"use client";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import IMAGE_1 from "@/public/image_1.png";
import IMAGE_2 from "@/public/image_2.png";
import IMAGE_3 from "@/public/image_3.png";
import IMAGE_4 from "@/public/image_4.png";
const Page: NextPage = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<div className="flex flex-col space-y-16">
			<div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
				<div className="relative w-full">
					<Image
						width={500}
						height={500}
						src={IMAGE_1}
						alt="construction image"
					/>
					<div className="absolute -top-5 ltr:right-5 rtl:-right-5 h-20 w-16 md:h-44 md:w-36 bg-yellow-500 -z-10" />
				</div>
				<p className="text-xs rtl:pr-10 ltr:pl-10 lg:text-base md:w-[1300px] lg:w-[1600px]">
					{t("about-us:maindescription")}
				</p>
			</div>
			<div className="flex flex-col space-y-16 lg:flex-row lg:justify-between lg:space-y-0">
				<div className="flex flex-col space-y-10 items-center">
					<Image
						width={200}
						height={200}
						src={IMAGE_2}
						alt="construction image"
					/>
					<div className="text-center">
						<h1 className="text-xl">
							{t("about-us:firstheadline")}
						</h1>
						<p className="text-xs w-72 md:w-96">
							{" "}
							{t("about-us:firstdescription")}
						</p>
					</div>
				</div>
				<div className="flex flex-col space-y-10 items-center">
					<Image
						width={200}
						height={200}
						src={IMAGE_3}
						alt="construction image"
					/>
					<div className="text-center">
						<h1 className="text-xl">
							{t("about-us:secondheadline")}
						</h1>
						<p className="text-xs w-72 md:w-96">
							{" "}
							{t("about-us:seconddescription")}
						</p>
					</div>
				</div>
				<div className="flex flex-col space-y-10 items-center">
					<Image
						width={200}
						height={200}
						src={IMAGE_4}
						alt="construction image"
					/>
					<div className="text-center">
						<h1 className="text-xl">
							{t("about-us:thirdheadline")}
						</h1>
						<p className="text-xs w-72 md:w-96">
							{t("about-us:thirddescription")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
