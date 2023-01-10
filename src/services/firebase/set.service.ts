import firestore from "firebase/firestore";

import { db } from "../../util/firebase.util";

interface SetDocProps {
    path: string
    id: string
    data: any
}

export function setDoc(props: SetDocProps) {
    const { path, id, data } = props;

    const document = firestore.doc(db, path, id)

    return firestore.setDoc(document, data)
}