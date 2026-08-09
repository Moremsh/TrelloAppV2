import { createSlice } from "@reduxjs/toolkit";
import type { Board, List, Task } from "../types";
import { boards, lists, tasks } from "../constants";

interface TasksState{
  boards : Record<string,Board>,
  lists : Record<string,List>,
  tasks : Record<string,Task> 
}

const initialState : TasksState = {
  boards : boards,
  lists : lists,
  tasks : tasks
}

export const taskSlice = createSlice({
  name : "taskSlice",
  initialState,
  reducers : {}
})

export default taskSlice.reducer