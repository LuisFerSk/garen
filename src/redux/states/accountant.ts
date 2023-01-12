import { createSlice } from '@reduxjs/toolkit';
import { Accountant } from '../../models';

export const AccountantEmptyState: Accountant = {
    referralSlipNumber: 0,
    tradeNumber: 0,
};

export const userSlice = createSlice({
    name: 'accountant',
    initialState: AccountantEmptyState,
    reducers: {
        createUser: (state, action) => action.payload,
        modifyUser: (state, action) => ({ ...state, ...action.payload }),
        resetUser: () => AccountantEmptyState
    }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;