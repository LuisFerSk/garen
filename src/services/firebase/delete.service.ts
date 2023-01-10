import firestore from "firebase/firestore";

import { db } from "../../util/firebase.util";

export function deleteDoc(path: string, id: string) {
    const document = firestore.doc(db, path, id)

    return firestore.deleteDoc(document)
}