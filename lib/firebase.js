import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyCGS0PeA6Tj2Bzdxbhi8VoBl90Z4-9Uy90",
	authDomain: "masakn-e50e8.firebaseapp.com",
	projectId: "masakn-e50e8",
	storageBucket: "masakn-e50e8.appspot.com",
	messagingSenderId: "865596741915",
	appId: "1:865596741915:web:687038dcc621e6af0c9bbe"
};

const app = initializeApp( firebaseConfig );
export const store = getFirestore( app );