import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "store";

interface State {
    projectModelOpen:boolean;
}
const initialState: State = {
    projectModelOpen: false
}

export const projectListSlice = createSlice({
    name: 'projectListSlice',
    initialState,
    reducers: {
        // 为什么不是纯函数，应为用了Immer
        openProjectModel(state) {
            state.projectModelOpen = true
        },
        closeProjectModel(state) {
            state.projectModelOpen = false
        }
    }
})

export const projectListActions = projectListSlice.actions

export const selectProjectModelOpen = (state:RootState) => state.projectList.projectModelOpen