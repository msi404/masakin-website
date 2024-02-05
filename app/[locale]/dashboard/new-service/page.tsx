"use client";
import { Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createService } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ImageUpload from "@/components/image-upload";
const formSchema = z.object({
	title: z.string().min(5, {
		message: "Title must be at least 5 characters.",
	}),
	caption: z.string().min(10, {
		message: "Caption must be at least 10 characters.",
	}),
	image: z.string(),
});

const Page: NextPage = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			caption: "",
			image: "",
		},
	});

	const isLoading = form.formState.isSubmitting;
	const router = useRouter();

	return (
		<Fragment>
			<Card className="lg:w-1/2 mx-auto">
				<CardHeader>
					<CardTitle className="text-base md:text-3xl">
						Create Service
					</CardTitle>
					<CardDescription>
						Deploy your new service in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-base lg:text-3xl">
											Title
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Title"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is the service public title.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="caption"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-base lg:text-3xl">
											Caption
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Caption"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is the service public caption.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem className="flex flex-col space-y-5">
										<FormLabel className="font-bold text-base lg:text-3xl">
											Upload Image
										</FormLabel>
										<FormControl>
											<ImageUpload
												disabled={isLoading}
												onChange={field.onChange}
												value={field.value}
											/>
										</FormControl>
										<FormDescription>
											This is the service image.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<CardFooter>
								<div className="mx-auto w-96 flex flex-col md:justify-between md:flex-row space-y-7 md:space-y-0">
									<Button
										className="w-block"
										size="lg"
										onClick={() => router.back()}
										variant="outline"
									>
										Cancel
									</Button>
									<Button
										size="lg"
										type="submit"
										disabled={isLoading}
									>
										Submit
									</Button>
								</div>
							</CardFooter>
						</form>
					</Form>
				</CardContent>
			</Card>
		</Fragment>
	);
	async function onSubmit(values: z.infer<typeof formSchema>) {
		await createService({
			title: values.title,
			caption: values.caption,
			image: values.image,
		});
		form.reset();
		window.location.replace("/dashboard/services");
		toast({
			variant: "success",
			title: "You successfuly added a new service.",
		});
	}
};

export default Page;
