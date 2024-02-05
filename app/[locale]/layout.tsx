import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Masakn Albilad - شركة مساكن البلاد",
	description: "تأسست شركتنا بموجب قانون الشركات العراقي رقم 10 لسنة 2018.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cairo.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}