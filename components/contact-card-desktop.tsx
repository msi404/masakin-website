import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import { Button } from "@/components/ui/button";

const IMAGE =
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperboat.com%2Fwp-content%2Fuploads%2F2020%2F12%2F07%2F63377%2Fconstruction-02.jpg&f=1&nofb=1&ipt=920a02696cf0b2a222a66b3075014ad2afdfd94a4bed25a144d013e22caf1942&ipo=images";

const ContactCardDesktop: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex lg:justify-end rounded-xl overflow-hidden">
			<div
				className="w-[900px] h-[500px] bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url(${IMAGE})`,
					transform: `rotateY(180deg)`,
				}}
			/>
			<div className="space-y-10 w-[400px] h-full bg-yellow-500 p-10 absolute top-0 left-0">
				<h1 className="text-4xl w-72">{t("contactcardheader")}</h1>
				<p className="w-80">{t("contactcarddescription")}</p>
				<Button variant="secondary">{t("contactcardlabel")}</Button>
			</div>
		</div>
	);
};

export default ContactCardDesktop;
