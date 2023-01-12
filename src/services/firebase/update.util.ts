import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.util";

interface UpdateDocProps {
    path: string
    id: string
    data: any
}

export function _updateDoc(props: UpdateDocProps) {
    const { path, id, data } = props;

    const document = doc(db, path, id)

    return updateDoc(document, data)
}