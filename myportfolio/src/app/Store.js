import { configureStore } from "@reduxjs/toolkit"
import skillSliceLogic from "../feature/SkillSlice"
export const Store = configureStore({
    reducer: {
        storeSkill: skillSliceLogic
    }
})