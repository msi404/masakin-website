import type { NextPage } from "next";
import List from "@/components/list";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import { deleteService } from "@/actions/actions";
const Page: NextPage = async () => {
	const servicesCollection = collection(store, "services");
	const projectsSnapshot = await getDocs(servicesCollection);
	const services = projectsSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	return (
		<div>
			<List items={services} deleteFunc={deleteService} />
		</div>
	);
};

export default Page;
