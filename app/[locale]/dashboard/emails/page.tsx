import type { NextPage } from "next";
import EmailList from "@/components/emails-list";
import List from "@/components/list";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import { deleteEmail } from "@/actions/actions";
const Page: NextPage = async () => {
	const emailsCollection = collection(store, "emails");
	const emailsSnapshot = await getDocs(emailsCollection);
	const emails = emailsSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	return (
		<div>
			<EmailList items={emails} deleteFunc={deleteEmail} />
		</div>
	);
};

export default Page;
