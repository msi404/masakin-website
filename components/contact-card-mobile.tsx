import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";
import { Button } from "@/components/ui/button";

const IMAGE =
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperboat.com%2Fwp-content%2Fuploads%2F2020%2F12%2F07%2F63377%2Fconstruction-02.jpg&f=1&nofb=1&ipt=920a02696cf0b2a222a66b3075014ad2afdfd94a4bed25a144d013e22caf1942&ipo=images";

const ContactCardMobile: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col rounded-xl overflow-hidden">
			<div className="space-y-5 bg-yellow-500 p-5">
				<h1 className="text-2xl w-72">{t("contactcardheader")}</h1>
				<p className="w-80">{t("contactcarddescription")}</p>
				<Button className="w-full" variant="secondary">
					{t("contactcardlabel")}
				</Button>
			</div>
			<div
				className="w-[500px] md:w-[700px] h-[250px] bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url(${IMAGE})`,
					transform: `rotateY(180deg)`,
				}}
			/>
		</div>
	);
};

export default ContactCardMobile;
