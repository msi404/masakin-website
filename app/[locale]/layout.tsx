import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Masakn",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}