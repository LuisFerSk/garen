import { useEffect } from "react"
import { callbackOnSnapshot, onSnapshotType } from "../models"

export function useOnSnapshot(onSnapshot: onSnapshotType, callback: callbackOnSnapshot) {
    useEffect(() => {
        const unsubscribe = onSnapshot(callback)

        return () => {
            unsubscribe()
        }
    }, [])
}