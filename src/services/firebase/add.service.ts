import firestore from "firebase/firestore";

import { db } from "../../util/firebase.util";

export function addDoc(path: string, data: any) {
    const collection = firestore.collection(db, path)

    return firestore.addDoc(collection, data)
}