import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.util";

interface SetDocProps {
    path: string
    id: string
    data: any
}

export function _setDoc(props: SetDocProps) {
    const { path, id, data } = props;

    const document = doc(db, path, id)

    return setDoc(document, data)
}