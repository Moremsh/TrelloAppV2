import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
  reducers : {
    addTask: (state,action : PayloadAction<{listId : string , taskTitle : string}>)=>{
      const id = crypto.randomUUID()
      state.tasks[id] = {id, title: action.payload.taskTitle}
      state.lists[action.payload.listId].taskIds.push(id)
    },
    editTask : (state, action : PayloadAction<{taskId : string, taskTitle : string}>)=>{
      state.tasks[action.payload.taskId].title = action.payload.taskTitle
    },
    deleteTask : (state,action : PayloadAction<{taskId:string,listId:string}>) => {
      delete state.tasks[action.payload.taskId]
      const list = state.lists[action.payload.listId]
      list.taskIds = list.taskIds.filter((taskId) => taskId !== action.payload.taskId)
    }
  }
})

export const {addTask , editTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer