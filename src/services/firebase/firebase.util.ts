// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { Analytics, getAnalytics } from "firebase/analytics";
import { getFirestore, DocumentData, QuerySnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF6PebWdKZRdBeNnIdqlIYIIslcgRRUgs",
    authDomain: "garen-fcf9c.firebaseapp.com",
    projectId: "garen-fcf9c",
    storageBucket: "garen-fcf9c.appspot.com",
    messagingSenderId: "448743658892",
    appId: "1:448743658892:web:59ad849790573374d432a9",
    measurementId: "G-HEZX7RZJ19"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase

// let analytics: Analytics;
// if (app.name && typeof window !== 'undefined') {
//     analytics = getAnalytics(app);
// }
// export { analytics };

export const db = getFirestore(app);


export function getDocsSnapshot(snapshot: QuerySnapshot<DocumentData>, result: any[]) {
    snapshot.forEach((get) =>
        result = [...result, { id: get.id, data: get.data() }],
    )
}