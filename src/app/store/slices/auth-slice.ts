import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAuthInfo,
  IBodyRequest,
  IRequestedData,
} from '../../types/auth-slice-types';
import { AppDispatch } from '..';

const initialState: IAuthInfo = {
  token: '',
  authorized: false,
  loading: false,
  error: false,
};

const authData = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    tokenReceived(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.error = false;
      state.loading = false;
    },
    changeLoadingStatus(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    requestFailed(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
      state.loading = false;
    },
    checkAuth(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.authorized = !!action.payload;
    },
  },
});

// Actions

export const authUser = (body: IBodyRequest) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(changeLoadingStatus(true));
      await fetch(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_AUTH}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      ).then((resp) =>
        resp.json().then((data: IRequestedData) => {
          localStorage.setItem('secretToken', data.data.token);
          dispatch(tokenReceived(data.data.token));
        })
      );
    } catch (error) {
      dispatch(requestFailed(true));
      console.error(error);
    }
  };
};

export const { tokenReceived, changeLoadingStatus, requestFailed, checkAuth } =
  authData.actions;
export default authData.reducer;
