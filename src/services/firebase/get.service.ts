import firestore, { FieldPath, WhereFilterOp } from "firebase/firestore"

import { db } from "../../util/firebase.util"

export function getDoc(path: string, id: string) {
    const document = firestore.doc(db, path, id)

    return firestore.getDoc(document)
}

export function getDocs(path: string) {
    const collection = firestore.collection(db, path)

    return firestore.getDocs(collection)
}

interface GetDocWhereProps {
    path: string
    field: string | FieldPath
    condition: WhereFilterOp
    value: unknown
}

export function getDocWhere(props: GetDocWhereProps) {
    const { path, field, condition, value } = props;

    const collection = firestore.collection(db, path)

    const where = firestore.where(field, condition, value)

    const query = firestore.query(collection, where)

    return firestore.getDocs(query)
}