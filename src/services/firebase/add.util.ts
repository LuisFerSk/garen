import { addDoc, collection } from "firebase/firestore";

import { db } from "./firebase.util";

export function _addDoc(path: string, data: any) {
    const _collection = collection(db, path)

    return addDoc(_collection, data)
}