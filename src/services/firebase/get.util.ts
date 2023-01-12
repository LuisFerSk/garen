import { Unsubscribe } from "@firebase/util"
import { collection,  doc, DocumentData, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore"
import { GetDocWhereProps, OnSnapshotProps } from "../../models"

import { db } from "./firebase.util"

export function _getDoc(path: string, id: string): Promise<DocumentSnapshot<DocumentData>> {
    const document = doc(db, path, id)

    return getDoc(document)
}

export function _onSnapshot(props: OnSnapshotProps): Unsubscribe {
    const { path, id, callback } = props;

    const document = doc(db, path, id)

    return onSnapshot(document, callback)
}

export function _getDocs(path: string): Promise<QuerySnapshot<DocumentData>> {
    const _collection = collection(db, path)

    return getDocs(_collection)
}

export function getDocWhere(props: GetDocWhereProps): Promise<QuerySnapshot<DocumentData>> {
    const { path, field, condition, value } = props;

    const _collection = collection(db, path)

    const _where = where(field, condition, value)

    const _query = query(_collection, _where)

    return getDocs(_query)
}