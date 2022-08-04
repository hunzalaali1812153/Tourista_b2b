import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewTour, DeleteTour, GetTourDetails, GetToursList } from '../api/TourApis';
import { toast } from 'react-toastify';
import { createCollaboration, declineCollaborateStatus, GetMyT0ourCollaborate, GetMyTourCollaborate, GetTourCollaborate, updateCollaborateStatus } from '../api/CollaborationApis';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  collaborations: {},
  myCollaborations: {}
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const createNewCollaborationAsync = createAsyncThunk(
  'CollaborationSlice/createcollaboration',
  async (data) => {
    console.log(data)
    const response = await createCollaboration(data.formData, data.token);
    return response.data;
  }
);

export const GetTourCollaborateAsync = createAsyncThunk(
  'CollaborationSlice/gettourcollaborate',
  async (data) => {
    const response = await GetTourCollaborate(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetMyTourCollaborateAsync = createAsyncThunk(
  'CollaborationSlice/getmytourcollaborate',
  async (data) => {
    const response = await GetMyTourCollaborate(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const updateCollaborateStatusAsync = createAsyncThunk(
  'CollaborationSlice/updatecollaboratestatus',
  async (data) => {
    const response = await updateCollaborateStatus(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const declineCollaborateStatusAsync = createAsyncThunk(
  'CollaborationSlice/declinecollaboratestatus',
  async (data) => {
    const response = await declineCollaborateStatus(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const CollaborationProfileSlice = createSlice({
  name: 'CollaborationSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetTourCollaborateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collaborations = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(GetMyTourCollaborateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.myCollaborations = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(createNewCollaborationAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewCollaborationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(updateCollaborateStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateCollaborateStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      })
      .addCase(declineCollaborateStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(declineCollaborateStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      });
  },
});

export const { changeScreen } = CollaborationProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.CollaborationSlice.screenMode;

export const getProfiles = (state) => state.CollaborationSlice.profile;

export const getAvailableProfiles = (state) => state.CollaborationSlice.unAssignedList;

export const getCollaboration = (state) => state.CollaborationSlice.collaborations?state.CollaborationSlice.collaborations:[];

export const getMyCollaboration = (state) => state.CollaborationSlice.myCollaborations?state.CollaborationSlice.myCollaborations:[];

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default CollaborationProfileSlice.reducer;
