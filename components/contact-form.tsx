"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Map, Mail, Phone } from "lucide-react";
import { sendEmail } from "@/actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import MAP from "@/public/map.png";

const FormSchema = z.object({
	fullname: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({ message: "You must provide your email." }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			fullname: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		sendEmail({
			name: data.fullname,
			email: data.email,
			message: data.message,
		});
		form.reset();
		toast({
			title: "You submitted you data.",
		});
	}

	return (
		<div className="flex flex-col w-full space-y-10">
			<div className="flex flex-col space-y-16 items-center w-full lg:space-y-0 lg:items-start lg:flex-row lg:justify-between">
				<div className="flex w-full items-center flex-col space-y-10 lg:items-start">
					<div className="space-y-5">
						<h1 className="text-3xl">{t("contact:headline")}</h1>
						<div className="w-44 h-2 bg-yellow-500" />
						<p className="text-sm">{t("contact:description")}</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="lg:w-2/3 space-y-6"
						>
							<FormField
								control={form.control}
								name="fullname"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder={t(
													"contact:fullnamelabel"
												)}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder={t(
													"contact:emaillabel"
												)}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												placeholder={t(
													"contact:messagelabel"
												)}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className="w-full" type="submit">
								{t("contact:buttonlabel")}
							</Button>
						</form>
					</Form>
				</div>
				<div className="relative">
					<Image
						unoptimized
						className="z-10"
						src={MAP}
						width={700}
						height={700}
						alt="Map"
					/>
					<div className="w-44 h-56 absolute bg-yellow-500 -right-10 -top-8 -z-10" />
				</div>
			</div>
			<div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between pt-16">
				<div className="flex">
					<Map size={60} />
					<div className="rtl:mr-5 ltr:ml-5">
						<h1>{t("contact:locationlabel")}</h1>
						<p className="text-gray-500">
							{t("contact:locationdescription")}
						</p>
					</div>
				</div>
				<div className="flex">
					<Mail size={60} />
					<div className="rtl:mr-5 ltr:ml-5">
						<h1>{t("contact:e-maillabel")}</h1>
						<p className="text-gray-500">info@masaknalbilad.com</p>
					</div>
				</div>
				<div className="flex">
					<Phone size={60} />
					<div className="rtl:mr-5 ltr:ml-5">
						<h1>{t("contact:phonelabel")}</h1>
						<p className="text-gray-500">07753506070</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
