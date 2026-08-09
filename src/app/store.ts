import { taskSlice } from "@/features/tasks/store/taskSlice"
import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({ reducer: {tasks : taskSlice.reducer} })
export type RootState = ReturnType<typeof store.getState>