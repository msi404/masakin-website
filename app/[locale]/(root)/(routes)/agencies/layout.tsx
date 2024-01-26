import React, { ReactNode, Fragment } from "react";
import initTranslations from "@/app/i18n";
import Crumb from "@/components/crumb";

const i18Namespaces = ["common"];
const Layout: React.FC<{
	children: ReactNode;
	params: { locale: any };
}> = async ({ children, params: { locale } }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<Fragment>
			<Crumb
				title={t("crumbagenciestitle")}
				path={t("crumbagenciespath")}
			/>
			<div className="container my-20">{children}</div>
		</Fragment>
	);
};

export default Layout;
