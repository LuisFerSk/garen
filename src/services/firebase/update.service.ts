import firestore from "firebase/firestore";

import { db } from "../../util/firebase.util";

interface UpdateDocProps {
    path: string
    id: string
    data: any
}

export function updateDoc(props: UpdateDocProps) {
    const { path, id, data } = props;

    const document = firestore.doc(db, path, id)

    return firestore.updateDoc(document, data)
}