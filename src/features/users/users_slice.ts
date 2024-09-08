import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "@/types/types";

const initState: Users[] = [];

const userSlice = createSlice({
  name: "users",
  initialState: initState,
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
