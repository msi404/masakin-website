import type { NextPage } from "next";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import AgencyItem from "@/components/agency-item";
const Page: NextPage = async () => {
	const agenciesCollection = collection(store, "agencies");
	const agenciesSnapshot = await getDocs(agenciesCollection);
	const agencies = agenciesSnapshot.docs;
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			{agencies.map((agency, i) => (
				<AgencyItem
					key={i}
					title={agency.data().title}
					logo={agency.data().logo}
					image={agency.data().image}
					caption={agency.data().caption}
				/>
			))}
		</div>
	);
};

export default Page;
