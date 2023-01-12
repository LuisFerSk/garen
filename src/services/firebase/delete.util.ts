import { deleteDoc, doc } from "firebase/firestore";

import { db } from "./firebase.util";

export function _deleteDoc(path: string, id: string) {
    const document = doc(db, path, id)

    return deleteDoc(document)
}