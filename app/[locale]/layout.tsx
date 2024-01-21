import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const almarai = Almarai({ weight: "400", subsets: ["arabic"] });

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
			<body className={almarai.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
