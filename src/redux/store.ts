import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/accountant';

export interface AppStore {
    accountant: any;
}

export default configureStore<AppStore>({
    reducer: {
        accountant: userSlice.reducer
    }
});