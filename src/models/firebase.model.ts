import { Unsubscribe } from "@firebase/util";
import { DocumentData, DocumentSnapshot, FieldPath, WhereFilterOp } from "firebase/firestore";

export type callbackOnSnapshot = (doc: DocumentSnapshot<DocumentData>) => void;

export interface OnSnapshotProps {
    path: string
    id: string
    callback: callbackOnSnapshot
}

export type onSnapshotType = (callback: callbackOnSnapshot) => Unsubscribe;

export interface GetDocWhereProps {
    path: string
    field: string | FieldPath
    condition: WhereFilterOp
    value: unknown
}