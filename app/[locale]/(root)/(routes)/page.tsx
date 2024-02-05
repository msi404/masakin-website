import type { NextPage } from "next";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/providers/translations-provider";
import Banner from "@/components/widgets/banner";
import Featuers from "@/components/widgets/features";
import Projects from "@/components/widgets/projects";
import Presentaion from "@/components/widgets/presentaion";
import Information from "@/components/widgets/information";
import Agencies from "@/components/widgets/agencies";
const i18Namespaces = ["home"];
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	const agenciesCollection = collection(store, "agencies");
	const agenciesSnapshot = await getDocs(agenciesCollection);
	const agencies = agenciesSnapshot.docs.map(doc => ({ ...doc.data() }));
	const projectsCollection = collection(store, "projects");
	const projectsSnapshot = await getDocs(projectsCollection);
	const projects = projectsSnapshot.docs.map(doc => ({ ...doc.data() }));
	const { t, resources } = await initTranslations(locale, i18Namespaces);
	const IMAGE_URL =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic4.depositphotos.com%2F1009279%2F354%2Fi%2F450%2Fdepositphotos_3546790-stock-photo-skyscraper-in-construction.jpg&f=1&nofb=1&ipt=c3b1e11c675587671c3bb8e42302120bdaf88615854220ad38d28bcea5a9eed5&ipo=images";
	return (
		<TranslationsProvider
			resources={resources}
			locale={locale}
			namespaces={i18Namespaces}
		>
			<Banner
				title={t("bannertitle")}
				description={t("bannerdescription")}
				label={t("bannerlabel")}
				image={IMAGE_URL}
			/>
			<Featuers />
			<Projects projects={projects} />
			<Presentaion />
			<Information />
			<Agencies agencies={agencies} />
		</TranslationsProvider>
	);
};

export default Home;
