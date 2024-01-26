"use client";
import type { NextPage } from "next";
import ContactForm from "@/components/contact-form";
const Page: NextPage = () => {
	return (
		<div className="flex flex-col space-y-10 md:flex-wrap md:flex-row md:space-y-0 md:gap-10 items-center">
			<ContactForm />
		</div>
	);
};

export default Page;
