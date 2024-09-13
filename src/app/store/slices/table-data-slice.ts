import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ITableItems,
  ITableData,
  IReqestedDataTable,
} from '../../types/data-slice-types';
import { AppDispatch } from '../index';
import { changeLoadingStatus } from './auth-slice';

const initialState: ITableItems = {
  tableItems: [],
  error: {
    errorCode: '',
    errorMessage: '',
  },
};

const tableData = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    dataReceived(state, action: PayloadAction<ITableData[]>) {
      state.tableItems = action.payload;
    },
  },
});

// Actions

export const getAllEntries = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(changeLoadingStatus(true));
      await fetch(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_GET_ENTRIES}`,
        {
          method: `GET`,
          headers: {
            'x-auth': `${localStorage.getItem('secretToken')}`,
          },
        }
      ).then((resp) =>
        resp.json().then((data: IReqestedDataTable) => {
          dispatch(dataReceived(data.data));
          console.log(data.data);
        })
      );
    } catch (error) {
      console.error(error);
    }
    dispatch(changeLoadingStatus(false));
  };
};

export const { dataReceived } = tableData.actions;
export default tableData.reducer;
