import React, { ReactNode } from "react";
import initTranslations from "@/app/i18n";
import Navigation from "@/components/header/navigation";
import Footer from "@/components/footer/footer";
import TranslationsProvider from "@/providers/translations-provider";

const i18Namespaces = ["common"];
const Layout: React.FC<{
	children: ReactNode;
	params: { locale: any };
}> = async ({ children, params: { locale } }) => {
	const { resources } = await initTranslations(locale, i18Namespaces);
	return (
		<TranslationsProvider
			resources={resources}
			locale={locale}
			namespaces={i18Namespaces}
		>
			<Navigation />
			<main className="mt-[100px]">{children}</main>
			<Footer />
		</TranslationsProvider>
	);
};

export default Layout;
