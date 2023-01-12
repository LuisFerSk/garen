import { increment, Unsubscribe } from "firebase/firestore";
import { callbackOnSnapshot, OnSnapshotProps } from "../models";
import { _onSnapshot, _updateDoc } from "./firebase";

const path: string = 'contadores';

const idReferralSlip: string = 'boleta_remision'

const idTrade: string = 'oficio'

export function getReferralSlipNumber(callback: callbackOnSnapshot): Unsubscribe {
    const onSnapshotProps: OnSnapshotProps = {
        path,
        id: idReferralSlip,
        callback
    }

    return _onSnapshot(onSnapshotProps)
}

export function getTradeNumber(callback: callbackOnSnapshot): Unsubscribe {
    const onSnapshotProps: OnSnapshotProps = {
        path,
        id: idTrade,
        callback
    }

    return _onSnapshot(onSnapshotProps)
}

export async function generateNewReferralSlipNumber() {
    try {
        const newData = {
            cantidad: increment(1)
        }

        const resultUpdate = await _updateDoc({
            path,
            id: idReferralSlip,
            data: newData
        })

        return resultUpdate;
    } catch (err) {
        throw err;
    }
}

export async function generateNewTradeNumber() {
    try {
        const newData = {
            cantidad: increment(1)
        }

        const resultUpdate = await _updateDoc({
            path,
            id: idTrade,
            data: newData
        })

        return resultUpdate;
    } catch (err) {
        throw err;
    }
}