import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUserDetail, GetUserType } from '../api/UserApis';
import { toast } from 'react-toastify';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  users: [],
  userType: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetUserDetailAsync = createAsyncThunk(
  'UserSlice/getuserdetail',
  async (data) => {
    const response = await GetUserDetail(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetUserTypeAsync = createAsyncThunk(
  'UserSlice/getusertype',
  async (data) => {
    const response = await GetUserType(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const UserProfileSlice = createSlice({
  name: 'UserSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetUserDetailAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload.details
        // state.profileData = action.payload.token;
      })
      .addCase(GetUserTypeAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userType = action.payload.details
        // state.profileData = action.payload.token;
      })
  },
});

export const { changeScreen } = UserProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.UserSlice.screenMode;

export const getProfiles = (state) => state.UserSlice.profile;

export const getAvailableProfiles = (state) => state.UserSlice.unAssignedList;

export const getUser = (state) => state.UserSlice.users;

export const getUserType = (state) => state.UserSlice.userType;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default UserProfileSlice.reducer;
