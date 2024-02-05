import type { NextPage } from "next";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import ServiceItem from "@/components/service-item";
const Page: NextPage = async () => {
	const servicesCollection = collection(store, "services");
	const servicesSnapshot = await getDocs(servicesCollection);
	const services = servicesSnapshot.docs;
	return (
		<div className="flex flex-col justify-center space-y-10 md:flex-wrap md:flex-row md:space-y-0 md:gap-10 md:justify-start items-center">
			{services.map((service, i) => (
				<ServiceItem
					key={i}
					title={service.data().title}
					image={service.data().image}
					caption={service.data().caption}
				/>
			))}
		</div>
	);
};

export default Page;
