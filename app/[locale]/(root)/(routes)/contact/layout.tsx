import React, { ReactNode } from "react";
import TranslationsProvider from "@/providers/translations-provider";
import initTranslations from "@/app/i18n";
import Crumb from "@/components/crumb";

const i18Namespaces = ["common", "contact"];
const Layout: React.FC<{
	children: ReactNode;
	params: { locale: any };
}> = async ({ children, params: { locale } }) => {
	const { t, resources } = await initTranslations(locale, i18Namespaces);
	return (
		<TranslationsProvider
			locale={locale}
			namespaces={i18Namespaces}
			resources={resources}
		>
			<Crumb
				title={t("crumbcontacttitle")}
				path={t("crumbcontactpath")}
			/>
			<div className="container my-20">{children}</div>
		</TranslationsProvider>
	);
};

export default Layout;
