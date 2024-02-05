import type { NextPage } from "next";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import Item from "@/components/item";
const Page: NextPage = async () => {
	const projectsCollection = collection(store, "projects");
	const projectsSnapshot = await getDocs(projectsCollection);
	const projects = projectsSnapshot.docs;
	return (
		<div className="flex flex-col justify-center space-y-10 md:flex-wrap md:flex-row md:space-y-0 md:gap-10 md:justify-start items-center">
			{projects.map((project, i) => (
				<Item
					key={i}
					title={project.data().title}
					thumnail={project.data().thumnail}
					firstImage={project.data().firstImage}
					secondImage={project.data().secondImage}
					thirdImage={project.data().thirdImage}
					caption={project.data().caption}
				/>
			))}
		</div>
	);
};

export default Page;
