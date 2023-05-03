import { createSlice } from "@reduxjs/toolkit"

import skillStack from "../Skill"

export const skillSlice = createSlice({
    name: "storeSkilData",
    initialState: {
        initialSkillArray: [],
        skillName: skillStack
    },
    reducers: {
        storeToskillArray: (initialState, action) => {
            initialState.initialSkillArray = action.payload
        }
    }
})
export const { storeToskillArray } = skillSlice.actions;
export default skillSlice.reducer;