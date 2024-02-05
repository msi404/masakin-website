import type { NextPage } from "next";
import List from "@/components/list";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import { deleteAgency } from "@/actions/actions";
const Page: NextPage = async () => {
	const agenciesCollection = collection(store, "agencies");
	const projectsSnapshot = await getDocs(agenciesCollection);
	const services = projectsSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	return (
		<div>
			<List items={services} deleteFunc={deleteAgency} />
		</div>
	);
};

export default Page;
