import { Accountant, anyObject } from "../models";

export function createAccountantAdapter(data: anyObject | undefined): Accountant {
    return {
        amount: data?.cantidad as number
    }
}