"use client";
import React from "react";
import Image from "next/image";
import { Map, Mail, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			fullname: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted you data.",
		});
	}

	return (
		<div className="flex flex-col w-full space-y-10">
			<div className="flex flex-col space-y-16 items-center w-full lg:space-y-0 lg:items-start lg:flex-row lg:justify-between">
				<div className="flex w-full items-center flex-col space-y-10 lg:items-start">
					<div className="space-y-5">
						<h1 className="text-3xl">Contact Us</h1>
						<div className="w-44 h-2 bg-yellow-500" />
						<p className="text-sm">
							Reach out to us for any inquiry
						</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-2/3 space-y-6"
						>
							<FormField
								control={form.control}
								name="fullname"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Full name"
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
												placeholder="Email"
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
												placeholder="Message"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className="w-full" type="submit">
								Submit
							</Button>
						</form>
					</Form>
				</div>
				<div className="relative">
					<Image
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
						<h1>Location:</h1>
						<p className="text-gray-500">Iraq, Baghdad, Karrada</p>
					</div>
				</div>
				<div className="flex">
					<Mail size={60} />
					<div className="rtl:mr-5 ltr:ml-5">
						<h1>E-mail:</h1>
						<p className="text-gray-500">
							info@masaken-albilad.com
						</p>
					</div>
				</div>
				<div className="flex">
					<Phone size={60} />
					<div className="rtl:mr-5 ltr:ml-5">
						<h1>Phone:</h1>
						<p className="text-gray-500">009647800000000</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
