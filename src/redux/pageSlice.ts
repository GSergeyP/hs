import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 

export interface PageState {
  pageLoading: string | undefined,
  error: boolean,
  modal: boolean,
}

const initialState: PageState = {
  pageLoading: 'pageBasic',
  error: false,
  modal: false,
}

export const pageSlice = createSlice({
  name: 'pageLoading',
  initialState,
  reducers: {
    pageBasic: (state) => {
      localStorage.removeItem('sessionID');
      state.pageLoading = 'pageBasic';
      state.modal = false;
    },
    pageLogin: (state) => {
      state.pageLoading = 'pageLogin';
      state.error = false;
    },
    login: (state, action: PayloadAction<object | any>) => { ////////////////////////////////////////////

    const login = action.payload.login,
          password = action.payload.password;

      if(login === 'admin' && password === 'admin') {
        const content = [{sessionID: '123456789', name: 'Dmitriy', url: 'http://localhost:3000/img/photo/photo.png'}]
        localStorage.setItem('sessionID', JSON.stringify(content));
        state.pageLoading = 'pageBasic';
      }
      else {
        state.pageLoading = 'pageLogin';
        state.error = true;
      }
    },
    pageRegister: (state) => {
      state.pageLoading = 'pageRegister';
      state.error = false;
    },
    registers: (state, action: PayloadAction<object | any>) => {
      const login = action.payload.login;

      if(login === 'admin') {
        state.pageLoading = 'pageRegister';
        state.error = true;
      }
      else {
        state.pageLoading = 'pageRegister';
        state.modal = true;
        state.error = false;
      }
    }
  },
})

export const { pageBasic, pageLogin, login, pageRegister, registers } = pageSlice.actions

export default pageSlice.reducer